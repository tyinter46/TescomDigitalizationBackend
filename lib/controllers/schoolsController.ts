import dotenv from 'dotenv';
import { Request, Response } from 'express';
import CommonService from '../modules/common/service';
import SchoolsService from '../modules/schools/service';
import PostingReportService from '../modules/postingReports/service';
import UserService from '../modules/users/service';
import logger from '../config/logger';
// import { TriggerPostGeneratePostingLetterAndTriggerDownload } from '../controllers/GeneratePostingLetterAndTriggerDownload';
import { ISchools } from '../modules/schools/model';
import { IUser } from '../modules/users/model';
import { IPostingReport } from '../modules/postingReports/model';
import { ModificationNote } from 'modules/common/model';
import { User } from 'aws-sdk/clients/budgets';
dotenv.config();

export class SchoolsController {
  private BASE_URL = process.env.BASE_URL || 'http://localhost:8001';
  private schoolsService: SchoolsService = new SchoolsService();
  private principalDataSchool: any;
  private vicePrincipalAdminSchool: any;
  private vicePrincipalAcademicsSchool: any;
  // private triggerPostingLetterDownloadService =
  // new TriggerPostGeneratePostingLetterAndTriggerDownload();
  private userService: UserService = new UserService();
  private postingReportService: PostingReportService = new PostingReportService();
  public async getAllSchools(req: Request, res: Response) {
    const {
      pageNumber = 1,
      pageSize = 600,
      nameOfSchool = '',
      category = '',
      address = '',
      location = '',
      zone = '',
      division = '',
      listOfStaff = '',
      principal = '',
      vicePrincipalAdmin = '',
      vicePrincipalAcademics = '',
      latitude = '',
      longitude = '',
      sort = '',
      id = '',
    } = req.query;

    const page = parseInt(pageNumber as string, 10) || 1;
    const limit = parseInt(pageSize as string, 10) || 50;

    const query: any = {};
    const orConditions: any[] = [];

    if (nameOfSchool) orConditions.push({ nameOfSchool: { $regex: nameOfSchool, $options: 'i' } });
    if (category) orConditions.push({ category: { $regex: category, $options: 'i' } });
    if (address) orConditions.push({ address: { $regex: address, $options: 'i' } });
    if (location) orConditions.push({ location: { $regex: location, $options: 'i' } });
    if (zone) orConditions.push({ zone: { $regex: zone, $options: 'i' } });
    if (listOfStaff) orConditions.push({ listOfStaff: { $regex: listOfStaff, $options: 'i' } });
    if (principal) orConditions.push({ principal: { $regex: principal, $options: 'i' } });
    if (division) orConditions.push({ zone: { $regex: division, $options: 'i' } });
    if (vicePrincipalAdmin)
      orConditions.push({ zone: { $regex: vicePrincipalAdmin, $options: 'i' } });
    if (vicePrincipalAcademics)
      orConditions.push({ zone: { $regex: vicePrincipalAcademics, $options: 'i' } });

    if (id) query._id = { $eq: id };
    if (orConditions.length > 0) query.$or = orConditions;

    const sortQuery = {
      nameOfSchool: sort === 'desc' ? -1 : 1,
    };

    const customLabels = {
      totalDocs: 'itemsCount',
      docs: 'programs',
      limit: 'pageSize',
      nextPage: 'next',
      prevPage: 'prev',
      totalPages: 'pageCount',
    };

    const options = {
      page,
      limit,
      sort: sortQuery,
      populate: [
        {
          path: 'principal',
          select:
            'staffName gender position phoneNumber ogNumber tscFileNumber dateOfFirstAppointment dateOfPresentPosting dateOfBirth gradeLevel dateOfRetirement',
        },
        {
          path: 'listOfStaff',
          select:
            'staffName gender position phoneNumber ogNumber tscFileNumber dateOfFirstAppointment dateOfPresentPosting dateOfBirth gradeLevel dateOfRetirement',
        },
        {
          path: 'vicePrincipalAdmin',
          select:
            'staffName gender position phoneNumber ogNumber tscFileNumber dateOfFirstAppointment  dateOfPresentPosting  dateOfBirth gradeLevel dateOfRetirement',
        },
        {
          path: 'vicePrincipalAcademics',
          select:
            'staffName gender position phoneNumber ogNumber tscFileNumber dateOfFirstAppointment dateOfPresentPosting dateOfBirth gradeLevel dateOfRetirement',
        },
      ],
      customLabels,
    };

    try {
      const schoolsData = await this.schoolsService.getAllSchools(query, options);

      CommonService.successResponse('All Schools Retrieved Successfully', schoolsData, res);
    } catch (err) {
      logger.error({ message: err.message, service: 'Get All SchoolsService' });
      CommonService.mongoError(err, res);
    }
  }

  public async getSchoolById(req: Request, res: Response) {
    if (req.params.id) {
      const schoolFilter = { _id: req.params.id };

      try {
        const schoolData = await this.schoolsService.filterSchool(schoolFilter);
        CommonService.successResponse('School Retrieved Successfully', schoolData, res);
      } catch (err) {
        logger.error({ message: err.message, service: 'Get School by ID SchoolsService' });
        CommonService.mongoError(err, res);
      }
    } else {
      CommonService.insufficientParameters(res);
    }
  }

  // ########################################################################

  public async createSchool(req: Request | any, res: Response) {
    const {
      nameOfSchool,
      category,
      address = null,
      location,
      zone,
      // principal,
      // vicePrincipalAdmin,
      // vicePrincipalAcademics,
      division,
      latitude,
      longitude,
    } = req.body;

    if (!nameOfSchool || !category || !location || !zone || !division) {
      return CommonService.insufficientParameters(res);
    }

    const query = { $and: [{ nameOfSchool }, { category }] };

    try {
      const existingSchool = await this.schoolsService.filterSchool(query);
      if (existingSchool) {
        return CommonService.forbiddenResponse('Duplicate School', res);
      }

      const staff = [];

      //  create the new school
      const schoolParams: Partial<ISchools> = {
        nameOfSchool,
        category,
        address,
        location,
        zone,
        principal: null,
        vicePrincipalAdmin: null,
        vicePrincipalAcademics: null,
        division,
        latitude,
        listOfStaff: staff,
        longitude,
        modificationNotes: [
          {
            modifiedOn: new Date(Date.now()),
            modifiedBy: `${req.user?.staffName?.firstName} ${req.user?.staffName?.lastName}`,
            modificationNote: 'New School created',
          },
        ],
      };

      const newSchoolData = await this.schoolsService.createSchool(schoolParams);

      const updatedSchool = await this.schoolsService.filterSchool({ _id: newSchoolData._id });
      CommonService.successResponse('School Successfully Created!', updatedSchool, res);
    } catch (err) {
      logger.error({ message: err.message, service: 'createSchool SchoolsService' });
      CommonService.mongoError(err, res);
    }
  }

  // ################################################################
  public async updateSchool(req: Request, res: Response) {
    const { id } = req.params;
    const {
      nameOfSchool,
      category,
      address = null,
      location,
      zone,
      principal,
      vicePrincipalAdmin,
      vicePrincipalAcademics,
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

      let currentStaffList = currentSchoolToBeUpdated?.listOfStaff || [];
      const currentRoles = {
        principal: currentSchoolToBeUpdated.principal?._id?.toString(),
        vicePrincipalAdmin: currentSchoolToBeUpdated.vicePrincipalAdmin?._id?.toString(),
        vicePrincipalAcademics: currentSchoolToBeUpdated.vicePrincipalAcademics?._id?.toString(),
      };

      // Helper function to update principal or vice principal
      const updateStaffRole = async (roleId, currentRoleId, updateFunction, roleName) => {
        if (roleId) {
          const roleIdString = roleId.toString();
          // Check if the new role ID is already in the current staff list
          const isNewRoleInCurrentSchool = currentStaffList.some(
            (staff) => staff?._id?.toString() === roleIdString
          );

          // Check if this is a role interchange within the school
          const isRoleInterchange = Object.values(currentRoles).includes(roleIdString);

          // Remove the staff from the current role's list if they are being updated
          if (currentRoleId && roleId !== currentRoleId) {
            // Only remove from staff list if they're not involved in a role interchange
            if (!isRoleInterchange) {
              currentStaffList = currentStaffList.filter(
                (staff) => staff?._id?.toString() !== currentRoleId.toString()
              );
            }

            await updateFunction(roleId, id);

            // Only add the new role ID to the staff list if they're not already in the school
            if (!isNewRoleInCurrentSchool && !isRoleInterchange) {
              currentStaffList.push({ _id: roleId });
            }
            if (isRoleInterchange && !isNewRoleInCurrentSchool) {
              currentStaffList.push({ _id: roleId });
            }
          } else if (!currentRoleId) {
            // Handle case where the staff does not currently belong to any school
            await updateFunction(roleId, id);
            if (!isNewRoleInCurrentSchool && !isRoleInterchange) {
              currentStaffList.push({ _id: roleId });
            }
          }

          // If the new role is already in the current school but not a role interchange,
          // remove them from the general staff list
          if (isNewRoleInCurrentSchool && !isRoleInterchange) {
            currentStaffList = currentStaffList.filter(
              (staff) => staff?._id?.toString() !== roleIdString
            );
          }
        }
      };

      await updateStaffRole(
        principal,
        currentSchoolToBeUpdated.principal?._id,
        this.updateExistingPrincipal.bind(this),
        'Principal'
      );
      await updateStaffRole(
        vicePrincipalAdmin,
        currentSchoolToBeUpdated.vicePrincipalAdmin?._id,
        this.updateExistingVicePrincipalAdmin.bind(this),
        'Vice-Principal Admin'
      );
      await updateStaffRole(
        vicePrincipalAcademics,
        currentSchoolToBeUpdated.vicePrincipalAcademics?._id,
        this.updateExistingVicePrincipalAcademics.bind(this),
        'Vice-Principal Academics'
      );

      // Ensure uniqueness of the staff list
      const makeStaffListUnique = (staffList) => {
        const seen = new Set();
        return staffList.filter((staff) => {
          const id = staff?._id?.toString();
          return id && !seen.has(id) && seen.add(id);
        });
      };

      updateData.listOfStaff = makeStaffListUnique(currentStaffList);
      updateData.principal = principal || currentSchoolToBeUpdated.principal;
      updateData.vicePrincipalAdmin =
        vicePrincipalAdmin || currentSchoolToBeUpdated.vicePrincipalAdmin;
      updateData.vicePrincipalAcademics =
        vicePrincipalAcademics || currentSchoolToBeUpdated.vicePrincipalAcademics;

      const updatedSchool = await this.schoolsService.updateSchool(query, updateData);

      return CommonService.successResponse('School updated successfully', updatedSchool, res);
    } catch (error) {
      return CommonService.mongoError(error.message, res);
    }
  }
  public async updateExistingPrincipal(principal: string | null, currentSchoolId: string) {
    try {
      const existingSchool = await this.schoolsService.filterSchool({
        $and: [
          {
            $or: [
              { principal: principal },
              { vicePrincipalAdmin: principal },
              { vicePrincipalAcademics: principal },
            ],
          },
        ],
      });

      if (existingSchool) {
        const updatedStaffList = existingSchool.listOfStaff.filter(
          (staff) => staff.toString() !== principal
        );

        const updateFields = {};
        if (existingSchool.principal?._id?.toString() === principal.toString()) {
          updateFields['principal'] = null;
        }
        if (existingSchool.vicePrincipalAdmin?._id?.toString() === principal.toString()) {
          updateFields['vicePrincipalAdmin'] = null;
        }
        if (existingSchool.vicePrincipalAcademics?._id?.toString() === principal.toString()) {
          updateFields['vicePrincipalAcademics'] = null;
        }

        if (Object.keys(updateFields).length > 0) {
          await this.schoolsService.updateSchool(
            { _id: existingSchool._id },
            { listOfStaff: updatedStaffList, ...updateFields }
          );
        }

        await this.userService.updateUser(
          { _id: principal },
          { schoolOfPresentPosting: null, position: null },
          (err: any, userData: IUser) => {
            if (err) throw new Error(err);
          }
        );
      } else {
        if (principal) {
          await this.schoolsService.updateSchool(
            { _id: currentSchoolId },
            { principal: principal }
          );
        }
      }
    } catch (err) {
      logger.error({ message: err.message, service: 'updateExistingPrincipal SchoolsService' });
      throw err;
    }
  }

  public async updateExistingVicePrincipalAcademics(
    vicePrincipalAcademics: string | null,
    currentSchoolId: string
  ) {
    try {
      const existingSchool = await this.schoolsService.filterSchool({
        $and: [
          {
            $or: [
              { vicePrincipalAcademics },
              { vicePrincipalAdmin: vicePrincipalAcademics },
              { principal: vicePrincipalAcademics },
            ],
          },
        ],
      });

      if (existingSchool) {
        const updatedStaffList = existingSchool.listOfStaff.filter(
          (staff) => staff.toString() !== vicePrincipalAcademics
        );

        const updateFields = {};
        if (existingSchool.principal?._id?.toString() === vicePrincipalAcademics.toString()) {
          updateFields['principal'] = null;
        }
        if (
          existingSchool.vicePrincipalAcademics?._id?.toString() ===
          vicePrincipalAcademics.toString()
        ) {
          updateFields['vicePrincipalAcademics'] = null;
        }
        if (
          existingSchool.vicePrincipalAdmin?._id?.toString() === vicePrincipalAcademics.toString()
        ) {
          updateFields['vicePrincipalAdmin'] = null;
        }

        if (Object.keys(updateFields).length > 0) {
          await this.schoolsService.updateSchool(
            { _id: existingSchool._id },
            { listOfStaff: updatedStaffList, ...updateFields }
          );
        }

        await this.userService.updateUser(
          { _id: vicePrincipalAcademics },
          { schoolOfPresentPosting: null, position: null },
          (err: any, userData: IUser) => {
            if (err) throw new Error(err);
          }
        );
      } else {
        if (vicePrincipalAcademics) {
          await this.schoolsService.updateSchool(
            { _id: currentSchoolId },
            { vicePrincipalAcademics: vicePrincipalAcademics }
          );
        }
      }
    } catch (err) {
      logger.error({
        message: err.message,
        service: 'updateExistingVicePrincipalAcademics SchoolsService',
      });
      throw err;
    }
  }

  public async updateExistingVicePrincipalAdmin(
    vicePrincipalAdmin: string | null,
    currentSchoolId: string
  ) {
    try {
      const existingSchool = await this.schoolsService.filterSchool({
        $and: [
          {
            $or: [
              { vicePrincipalAdmin },
              { principal: vicePrincipalAdmin },
              { vicePrincipalAcademics: vicePrincipalAdmin },
            ],
          },
        ],
      });

      if (existingSchool) {
        const updatedStaffList = existingSchool.listOfStaff.filter(
          (staff) => staff.toString() !== vicePrincipalAdmin
        );

        const updateFields = {};
        if (existingSchool.principal?._id?.toString() === vicePrincipalAdmin.toString()) {
          updateFields['principal'] = null;
        }
        if (existingSchool.vicePrincipalAdmin?._id?.toString() === vicePrincipalAdmin.toString()) {
          updateFields['vicePrincipalAdmin'] = null;
        }
        if (
          existingSchool.vicePrincipalAcademics?._id?.toString() === vicePrincipalAdmin.toString()
        ) {
          updateFields['vicePrincipalAcademics'] = null;
        }

        if (Object.keys(updateFields).length > 0) {
          await this.schoolsService.updateSchool(
            { _id: existingSchool._id },
            { listOfStaff: updatedStaffList, ...updateFields }
          );
        }

        await this.userService.updateUser(
          { _id: vicePrincipalAdmin },
          { schoolOfPresentPosting: null, position: null },
          (err: any, userData: IUser) => {
            if (err) throw new Error(err);
          }
        );
      } else {
        if (vicePrincipalAdmin) {
          await this.schoolsService.updateSchool(
            { _id: currentSchoolId },
            { vicePrincipalAdmin: vicePrincipalAdmin }
          );
        }
      }
    } catch (err) {
      logger.error({
        message: err.message,
        service: 'updateExistingVicePrincipalAdmin SchoolsService',
      });
      throw err;
    }
  }
  // #################################################################3
  public async deleteSchool(req: Request, res: Response) {
    if (req.params.id) {
      try {
        const deleteDetails = await this.schoolsService.deleteSchool(req.params.id);
        if (deleteDetails.deletedCount) {
          await this.userService.updateUsers(
            { schoolOfPresentPosting: req.params.id },
            { schoolOfPresentPosting: null }
          );

          console.log(
            `School with ID ${req.params.id} has been deleted and associated users have been updated.`
          );
          CommonService.successResponse('School deleted successfully', null, res);
        } else {
          CommonService.failureResponse('Invalid school, Unable to delete', null, res);
        }
      } catch (err) {
        logger.error({ message: err.message, service: 'SchoolsService' });
        CommonService.mongoError(err, res);
      }
    } else {
      CommonService.insufficientParameters(res);
    }
  }

  public async getUsersFromAParticularSchool(req: Request, res: Response) {
    const schoolFilter = { _id: req.params.id };
    if (req.params.id) {
      try {
        const schoolData = await this.schoolsService.findUsersInASchool(schoolFilter);
        // console.log(schoolData[0].listOfStaff);
        CommonService.successResponse(
          'Teachers retrieved successfully',
          schoolData[0].listOfStaff,
          res
        );
      } catch (err) {
        logger.error({ message: err.message, service: 'SchoolsService' });
        CommonService.mongoError(err, res);
      }
    } else {
      CommonService.insufficientParameters(res);
    }
  }
}
