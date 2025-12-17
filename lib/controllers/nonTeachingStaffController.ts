import dotenv from 'dotenv';
dotenv.config();
import { Request, Response } from 'express';
import CommonService from '../modules/common/service';
import SchoolsService from '../modules/schools/service';
import PostingReportService from '../modules/postingReports/service';
import UserService from '../modules/users/service';
import logger from '../config/logger';
import { ISchools } from '../modules/schools/model';
import { IUser } from '../modules/users/model';
import { generateAndUploadStaffPostingLetter } from '../utils/staffPostingPdfGenerator';
import UsersModel from '../modules/users/schema';

export class StaffPostingController {
  public schoolsService: SchoolsService = new SchoolsService();
  private userService: UserService = new UserService();
  private postingReportService: PostingReportService = new PostingReportService();

  public async updateStaffSchool(req: Request, res: Response) {
    const { id } = req.params;
    const {
      previousSchoolId,
      nameOfSchool,
      category,
      address = null,
      location,
      zone,
      cadre,
      staff,
      division,
      latitude,
      longitude,
    } = req.body;

    if (!id) {
      return CommonService.insufficientParameters(res);
    }

    const updateData: Partial<ISchools> = {};
    if (nameOfSchool) updateData.nameOfSchool = nameOfSchool;
    if (category) updateData.category = category;
    if (address !== undefined) updateData.address = address;
    if (location) updateData.location = location;
    if (zone) updateData.zone = zone;
    if (division) updateData.division = division;
    if (latitude) updateData.latitude = latitude;
    if (longitude) updateData.longitude = longitude;

    if (Object.keys(updateData).length === 0) {
      return CommonService.insufficientParameters(res);
    }

    try {
      const query = { _id: id };
      const currentSchoolToBeUpdated = await this.schoolsService.filterSchool(query);
      if (!currentSchoolToBeUpdated) {
        return CommonService.failureResponse('School not found', null, res);
      }

      const currentStaffList = currentSchoolToBeUpdated?.listOfStaff || [];
      let updatedSchool: any;

      if (currentStaffList.length > 0) {
        const makeStaffListUnique = (staffList: any[]) => {
          const seen = new Set();
          return staffList.filter((staff) => {
            const id = staff.toString();
            return id && !seen.has(id) && seen.add(id);
          });
        };
        updateData.listOfStaff = makeStaffListUnique(currentStaffList);
        await this.schoolsService.updateSchool(query, updateData);
        if (staff) {
          updatedSchool = await this.updateExistingStaff(staff, id, previousSchoolId, cadre);
        }
      }

      if (staff) {
        updatedSchool = await this.updateExistingStaff(staff, id, previousSchoolId, cadre);
      }

      return CommonService.successResponse('School updated successfully', updatedSchool, res);
    } catch (error: any) {
      return CommonService.mongoError(error.message, res);
    }
  }

  public async updateExistingStaff(
    staff: IUser,
    currentSchoolId: string,
    previousSchoolId: string,
    cadre: string
  ) {
    try {
      const existingSchool = await this.schoolsService.filterSchool({ listOfStaff: staff });
      if (existingSchool) {
        const updatedStaffList = existingSchool?.listOfStaff.filter(
          (staffId) => staffId.toString() !== staff.toString()
        );
        await this.schoolsService.updateSchool(
          { _id: existingSchool._id },
          { listOfStaff: updatedStaffList }
        );
        logger.info(`Removed staff ${staff} from existing school ${existingSchool._id}`);
      }

      const updatedSchool = await this.updateStaff(currentSchoolId, staff, cadre, previousSchoolId);
      return updatedSchool;
    } catch (err: any) {
      logger.error({ message: err.message, service: 'updateExistingStaff SchoolsService' });
      throw new Error(`Failed to update existing staff: ${err.message}`);
    }
  }

  public async updateStaff(
    schoolId: string,
    staff: IUser,
    cadre: string,
    previousSchoolId: string
  ) {
    try {
      const result = await this.schoolsService.filterSchool({ _id: schoolId });
      if (!result) {
        throw new Error(`School ${schoolId} not found`);
      }

      const makeStaffListUnique = (staffList: any[]) => {
        const seen = new Set();
        return staffList?.filter((staff: string) => {
          const id = staff?.toString();
          return id && !seen.has(id) && seen.add(id);
        });
      };

      if (!result.listOfStaff?.includes(staff)) {
        result?.listOfStaff?.push(staff);
      }

      const uniqueStaffList = makeStaffListUnique(result?.listOfStaff);
      await this.schoolsService.updateSchool({ _id: schoolId }, { listOfStaff: uniqueStaffList });
      logger.info(`Updated school ${schoolId} with staff ${staff}`);

      // Update user record and generate letter
      const userUpdate = {
        schoolOfPreviousPosting: previousSchoolId || null,
        schoolOfPresentPosting: schoolId,
        cadre: cadre,
        dateOfPresentSchoolPosting: new Date().toISOString(),
      };

      const userData = await new Promise<IUser>((resolve, reject) => {
        this.userService.updateUser({ _id: staff }, userUpdate, (err: any, updatedUser: IUser) => {
          if (err) {
            reject(new Error(`Failed to update user: ${err.message}`));
          } else {
            resolve(updatedUser);
          }
        });
      });

      // Generate and upload posting letter
      let pdfDownloadLink: string | null = null;
      try {
        pdfDownloadLink = await generateAndUploadStaffPostingLetter(userData._id);
        if (!pdfDownloadLink) {
          throw new Error('Failed to generate posting letter: No download link returned');
        }
        logger.info(`Generated posting letter for staff ${staff}: ${pdfDownloadLink}`);
      } catch (letterError: any) {
        logger.error({
          message: `Failed to generate posting letter for staff ${staff}: ${letterError.message}`,
          service: 'generateAndUploadStaffPostingLetter',
        });
        throw letterError; // Re-throw to ensure the job fails
      }

      // Update user with the posting letter link
      await new Promise<void>((resolve, reject) => {
        this.userService.updateUser(
          { _id: userData._id },
          { letters: { ...userData.letters, postingLetter: pdfDownloadLink } },
          (err: any) => {
            if (err) {
              reject(new Error(`Failed to update user with letter: ${err.message}`));
            } else {
              logger.info(`Updated user ${userData._id} with posting letter: ${pdfDownloadLink}`);
              resolve();
            }
          }
        );
      });

      return result; // Return the updated school
    } catch (err: any) {
      logger.error({ message: err.message, service: 'updateStaff SchoolsService' });
      throw err;
    }
  }
}
