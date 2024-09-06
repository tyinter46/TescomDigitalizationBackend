import dotenv from 'dotenv';
import { Request, response, Response } from 'express';
import CommonService from '../modules/common/service';
import SchoolsService from '../modules/schools/service';
import PostingReportService from '../modules/postingReports/service';
import UserService from '../modules/users/service';
import logger from '../config/logger';
import { ISchools } from '../modules/schools/model';
import { IUser } from '../modules/users/model';
// import { IPostingReport } from '../modules/postingReports/model';
// import { ModificationNote } from 'modules/common/model';
// import { User } from 'aws-sdk/clients/budgets';
dotenv.config();

export class SchoolsController {
  private BASE_URL = process.env.PROD_CLIENT_BASE_URL;
  private schoolsService: SchoolsService = new SchoolsService();
  private principalDataSchool: any;
  private vicePrincipalAdminSchool: any;
  private vicePrincipalAcademicsSchool: any;

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

  //UPDATE SCHOOL ######################### UPDATE SCHOOL
  public async updateSchool(req: Request, res: Response) {
    const { id } = req.params;
    const {
      previousSchoolId,
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
      staleOrNew,
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

      // Helper function to update principal or vice principal
      const updateStaffRole = async (roleId, currentRoleId, updateFunction, roleName) => {
        if (roleId && roleId !== currentRoleId) {
          currentStaffList = currentStaffList.filter(
            (staff) => staff?._id?.toString() !== roleId.toString()
          );

          await updateFunction(roleId, id);

          if (!currentStaffList.some((staff) => staff?._id?.toString() === roleId.toString())) {
            currentStaffList.push({ _id: roleId });
          }
        } else if (roleId && !currentRoleId) {
          // Handle case where the staff does not currently belong to any school
          await updateFunction(roleId, id);
          currentStaffList.push({ _id: roleId });
        }
      };

      await updateStaffRole(
        principal,
        currentSchoolToBeUpdated.principal,
        this.updateExistingPrincipal.bind(this),
        'Principal'
      );
      await updateStaffRole(
        vicePrincipalAdmin,
        currentSchoolToBeUpdated.vicePrincipalAdmin,
        this.updateExistingVicePrincipalAdmin.bind(this),
        'Vice-Principal Admin'
      );
      await updateStaffRole(
        vicePrincipalAcademics,
        currentSchoolToBeUpdated.vicePrincipalAcademics,
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
      const updatedSchool = await this.schoolsService.updateSchool(query, updateData);

      if (principal) {
        await this.updatePrincipal(
          updatedSchool._id,
          principal,
          'Principal',
          previousSchoolId,
          staleOrNew
        );
      }

      if (vicePrincipalAdmin) {
        await this.updateVicePrincipalAdmin(
          updatedSchool._id,
          vicePrincipalAdmin,
          'Vice-Principal',
          previousSchoolId,
          staleOrNew
        );
      }

      if (vicePrincipalAcademics) {
        await this.updateVicePrincipalAcademics(
          updatedSchool._id,
          vicePrincipalAcademics,
          'Vice-Principal',
          previousSchoolId,
          staleOrNew
        );
      }

      return CommonService.successResponse('School updated successfully', updatedSchool, res);
    } catch (error) {
      return CommonService.mongoError(error.message, res);
    }
  }

  public async updateExistingPrincipal(
    principal: string | null,
    currentSchoolId: string,
    previousSchoolId: string,
    staleOrNew: string
  ) {
    // console.log(principal);
    try {
      // Find the school where the principal is currently assigned
      const existingSchool = await this.schoolsService.filterSchool({
        $and: [
          {
            $or: [
              { principal: principal },
              { vicePrincipalAdmin: principal },
              { vicePrincipalAcademics: principal },
            ],
          },
          // { _id: { $ne: currentSchoolId } }, // Exclude the current school from the results
        ],
      });

      // Check if the school is found
      if (existingSchool) {
        // console.log(`Existing School: ${existingSchool.nameOfSchool}`);

        // Remove the principal from the staff list
        const updatedStaffList = existingSchool.listOfStaff.filter(
          (staffId) => staffId.toString() !== principal.toString()
        );

        if (existingSchool.principal?._id?.toString() === principal.toString()) {
          await this.schoolsService.updateSchool(
            { _id: existingSchool._id },
            { listOfStaff: updatedStaffList, principal: null }
          );
        }
        if (existingSchool.vicePrincipalAdmin?._id?.toString() === principal.toString()) {
          await this.schoolsService.updateSchool(
            { _id: existingSchool?._id },
            { listOfStaff: updatedStaffList, vicePrincipalAdmin: null }
          );
        }
        if (existingSchool.vicePrincipalAcademics?._id?.toString() === principal.toString()) {
          await this.schoolsService.updateSchool(
            { _id: existingSchool?._id },
            { listOfStaff: updatedStaffList, vicePrincipalAcademics: null }
          );
        }

        // Update the school to remove the principal
        // await this.schoolsService.updateSchool({ _id: existingSchool._id }, updateData);

        // Update the user's school and position to null
        this.userService.updateUser(
          { _id: principal },
          { schoolOfPresentPosting: null, position: null },
          (err: any, userData: IUser) => {
            if (err) throw new Error(err);
            // console.log(userData);
          }
        );
      } else {
        // const updatePrincipalWithNoSchoolData: Partial<ISchools> = {};
        if (principal) {
          await this.schoolsService.updateSchool(
            { _id: currentSchoolId },
            {
              pincipal: principal,
            }
          );

          this.updatePrincipal(
            currentSchoolId,
            principal,
            'Principal',
            previousSchoolId,
            staleOrNew
          );
          console.log('posted');
        }
      }
    } catch (err) {
      logger.error({ message: err.message, service: 'updateExistingPrincipal SchoolsService' });
      throw new Error('existing school is the same with current school');
    }
  }

  public async updateExistingVicePrincipalAcademics(
    vicePrincipalAcademics: string | null,
    currentSchoolId: string,
    previousSchoolId: string,
    staleOrNew: string
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
          // { _id: { $ne: currentSchoolId } }, // Exclude the current school from the results
        ],
      });
      if (existingSchool) {
        const staffList = existingSchool?.listOfStaff?.filter(
          (staff) => staff?.toString() !== vicePrincipalAcademics
        );
        if (existingSchool?.principal?._id?.toString() === vicePrincipalAcademics) {
          await this.schoolsService.updateSchool(
            { _id: existingSchool._id },
            { listOfStaff: staffList, principal: null }
          );
        }
        if (existingSchool?.vicePrincipalAcademics?._id?.toString() === vicePrincipalAcademics) {
          await this.schoolsService.updateSchool(
            { _id: existingSchool?._id },
            { listOfStaff: staffList, vicePrincipalAcademics: null }
          );
        }
        if (existingSchool?.vicePrincipalAdmin?._id?.toString() === vicePrincipalAcademics) {
          await this.schoolsService.updateSchool(
            { _id: existingSchool?._id },
            { listOfStaff: staffList, vicePrincipalAdmin: null }
          );
        }

        this.userService.updateUser(
          { _id: existingSchool?.vicePrincipalAcademics },
          { schoolOfPresentPosting: null, position: null },
          (err: any, userData: IUser) => {
            if (err) throw new Error(err);
          }
        );
      } else {
        console.log('No existing school found for the provided principal academics ID.');
        // const updatevicePrincipalAcademicsWithNoSchoolData: Partial<ISchools> = {};

        if (vicePrincipalAcademics)
          // updatevicePrincipalAcademicsWithNoSchoolData.vicePrincipalAcademics._id =
          //   vicePrincipalAcademics;
          await this.schoolsService.updateSchool(
            { _id: currentSchoolId },
            {
              vicePrincipalAcademics: vicePrincipalAcademics,
            }
          );
        this.updateVicePrincipalAcademics(
          currentSchoolId,
          vicePrincipalAcademics,
          'Vice-Principal',
          previousSchoolId,
          staleOrNew
        );

        console.log('pincipal posted');
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
    currentSchoolId: string,
    previousSchoolId: string,
    staleOrNew: string
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
          // { _id: { $ne: currentSchoolId } }, // Exclude the current school from the results
        ],
      });
      console.log(existingSchool);
      if (existingSchool) {
        // console.log(existingSchool.principal, vicePrincipalAdmin);
        const staffList = existingSchool?.listOfStaff?.filter(
          (staff) => staff.toString() !== vicePrincipalAdmin
        );
        if (existingSchool?.principal?._id?.toString() === vicePrincipalAdmin) {
          await this.schoolsService.updateSchool(
            { _id: existingSchool._id },
            { listOfStaff: staffList, principal: null }
          );
        }
        if (existingSchool.vicePrincipalAcademics?._id?.toString() === vicePrincipalAdmin) {
          await this.schoolsService.updateSchool(
            { _id: existingSchool?._id },
            { listOfStaff: staffList, vicePrincipalAcademics: null }
          );
        }
        if (existingSchool.vicePrincipalAdmin?._id?.toString() === vicePrincipalAdmin) {
          await this.schoolsService.updateSchool(
            { _id: existingSchool._id },
            { listOfStaff: staffList, vicePrincipalAdmin: null }
          );
        }

        this.userService.updateUser(
          { _id: existingSchool?.vicePrincipalAdmin },
          { schoolOfPresentPosting: null, position: null },
          (err: any, userData: IUser) => {
            if (err) throw new Error(err);
          }
        );
      } else {
        console.log('No existing school found for the provided vice principal admin  ID.');
        // const updatevicePrincipalAdminWithNoSchoolData: Partial<ISchools> = {};
        if (vicePrincipalAdmin)
          // updatevicePrincipalAdminWithNoSchoolData.vicePrincipalAdmin._id = vicePrincipalAdmin;
          await this.schoolsService.updateSchool(
            { _id: currentSchoolId },
            {
              vicePrincipalAdmin,
            }
          );
        this.updateVicePrincipalAdmin(
          currentSchoolId,
          vicePrincipalAdmin,
          'Vice-Principal',
          previousSchoolId,
          staleOrNew
        );
        console.log('vicePrincipalAdmin posted');
      }
    } catch (err) {
      logger.error({
        message: err.message,
        service: 'updateExistingVicePrincipalAdmin SchoolsService',
      });
      throw err;
    }
  }

  public async updatePrincipal(
    schoolId: string,
    principal: string,
    position: string,
    previousSchoolId: string,
    staleOrNew: string
  ) {
    try {
      const pdfDownloadLink = `${this.BASE_URL}/api/downloadPdf/${principal}`;
      await this.schoolsService.updateSchool({ _id: schoolId }, { principal });
      this.userService.updateUser(
        { _id: principal },
        {
          schoolOfPreviousPosting: previousSchoolId,
          staleOrNew,
          schoolOfPresentPosting: schoolId,
          position: position,
          letters: { postingLetter: pdfDownloadLink }, // Pushes a new postingLetter into the letters array
          $set: { dateOfPresentSchoolPosting: Date.now().toString() },
        },
        (err: any, userData: IUser) => {
          if (err) throw new Error(err);
          throw new Error('unable to update principal record');
        }
      );
    } catch (err) {
      logger.error({ message: err.message, service: 'updatePrincipal SchoolsService' });
      throw err;
    }
  }

  public async updateVicePrincipalAcademics(
    schoolId: string,
    vicePrincipalAcademics: string,
    position: string,
    previousSchoolId: string,
    staleOrNew: string
  ) {
    try {
      const pdfDownloadLink = `${this.BASE_URL}/api/downloadPdf/${vicePrincipalAcademics}`;
      await this.schoolsService.updateSchool({ _id: schoolId }, { vicePrincipalAcademics });
      this.userService.updateUser(
        { _id: vicePrincipalAcademics },
        {
          schoolOfPresentPosting: schoolId,
          staleOrNew,
          schoolOfPreviousPosting: previousSchoolId,
          position: position,
          letters: { postingLetter: pdfDownloadLink },
          $set: { dateOfPresentSchoolPosting: Date.now().toString() },
        },
        (err: any, userData: IUser) => {
          if (err) throw new Error(err);
        }
      );
    } catch (err) {
      logger.error({
        message: err.message,
        service: 'updateVicePrincipalAcademics SchoolsService',
      });
      throw err;
    }
  }

  public async updateVicePrincipalAdmin(
    schoolId: string,
    vicePrincipalAdmin: string,
    position: string,
    previousSchoolId: string,
    staleOrNew: string
  ) {
    try {
      const pdfDownloadLink = `${this.BASE_URL}/api/downloadPdf/${vicePrincipalAdmin}`;
      await this.schoolsService.updateSchool({ _id: schoolId }, { vicePrincipalAdmin });
      this.userService.updateUser(
        { _id: vicePrincipalAdmin },
        {
          schoolOfPreviousPosting: previousSchoolId,
          schoolOfPresentPosting: schoolId,
          staleOrNew: staleOrNew,
          position: position,
          letters: { postingLetter: pdfDownloadLink },
          $set: { dateOfPresentSchoolPosting: Date.now().toString() },
        },
        (err: any, userData: IUser) => {
          if (err) throw new Error(err);
        }
      );
    } catch (err) {
      logger.error({ message: err.message, service: 'updateVicePrincipalAdmin SchoolsService' });
      throw err;
    }
  }

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
