import { Request, Response } from 'express';
import CommonService from '../modules/common/service';
import SchoolsService from '../modules/schools/service';
import UserService from '../modules/users/service';
import logger from '../config/logger';
import { ISchools } from '../modules/schools/model';
import { IUser } from '../modules/users/model';

export class SchoolsController {
  private schoolsService: SchoolsService = new SchoolsService();
  private userService: UserService = new UserService();

  public async getAllSchools(req: Request, res: Response) {
    const {
      pageNumber = 1,
      pageSize = 50,
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
      customLabels,
    };

    try {
      const schoolsData = await this.schoolsService.getAllSchools(query, options);

      CommonService.successResponse('All Schools Retrieved Successfully', schoolsData, res);
    } catch (err) {
      logger.error({ message: err.message, service: 'SchoolsService' });
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
        logger.error({ message: err.message, service: 'SchoolsService' });
        CommonService.mongoError(err, res);
      }
    } else {
      CommonService.insufficientParameters(res);
    }
  }

  // public async createSchool(req: Request | any, res: Response) {
  //   const {
  //     nameOfSchool,
  //     category,
  //     address = null,
  //     location,
  //     zone,
  //     principal,
  //     vicePrincipalAdmin,
  //     vicePrincipalAcademics,
  //     division,
  //     latitude,
  //     longitude,
  //   } = req.body;

  //   if (!nameOfSchool || !category || !location || !zone || !division) {
  //     return CommonService.insufficientParameters(res);
  //   }

  //   const query = { $and: [{ nameOfSchool }, { category }] };

  //   try {
  //     const existingSchool = await this.schoolsService.filterSchool(query);
  //     if (existingSchool) {
  //       return CommonService.forbiddenResponse('Duplicate School', res);
  //     }

  //     const schoolParams: Partial<ISchools> = {
  //       nameOfSchool,
  //       category,
  //       address,
  //       location,
  //       zone,
  //       principal,
  //       vicePrincipalAdmin,
  //       vicePrincipalAcademics,
  //       division,
  //       latitude,
  //       longitude,
  //       modificationNotes: [
  //         {
  //           modifiedOn: new Date(Date.now()),
  //           modifiedBy: `${req.user?.staffName?.firstName} ${req.user?.staffName?.lastName}`,
  //           modificationNote: 'New School created',
  //         },
  //       ],
  //     };
  //     console.log(
  //       schoolParams.principal,
  //       schoolParams.vicePrincipalAcademics,
  //       schoolParams.vicePrincipalAdmin
  //     );
  //     const newSchoolData = await this.schoolsService.createSchool(schoolParams);

  //     if (principal) {
  //       await this.updatePrincipal(newSchoolData._id, principal);
  //     }

  //     if (vicePrincipalAdmin) {
  //       await this.updateVicePrincipalAdmin(
  //         newSchoolData._id,
  //         vicePrincipalAdmin,
  //         'Vice-Principal Admin'
  //       );
  //     }

  //     if (vicePrincipalAcademics) {
  //       await this.updateVicePrincipalAcademics(
  //         newSchoolData._id,
  //         vicePrincipalAcademics,
  //         'Vice-Principal Academics'
  //       );
  //     }
  //     const updatedSchool = await this.schoolsService.filterSchool({ _id: newSchoolData._id });
  //     CommonService.successResponse('School Successfully Created!', updatedSchool, res);
  //   } catch (err) {
  //     logger.error({ message: err.message, service: 'SchoolsService' });
  //     CommonService.mongoError(err, res);
  //   }
  // }

  // private async updatePrincipal(schoolId: string, principal: string) {
  //   try {
  //     const existingSchool = await this.schoolsService.filterSchool({ principal });
  //     console.log(existingSchool._id);
  //     if (existingSchool && existingSchool.principal) {
  //       await this.schoolsService.updateSchool({ _id: existingSchool._id }, { principal: null });
  //     }

  //     this.userService.updateUser(
  //       { _id: principal },
  //       { schoolOfPresentPosting: schoolId, position: 'Principal' },
  //       (err: any, userData: IUser) => {
  //         if (err) throw new Error(err);
  //       }
  //     );
  //   } catch (err) {
  //     logger.error({ message: err.message, service: 'SchoolsService' });
  //     throw err;
  //   }
  // }

  // private async updateVicePrincipalAcademics(
  //   schoolId: string,
  //   vicePrincipalAcademics: string,
  //   position: string
  // ) {
  //   try {
  //     const existingSchool = await this.schoolsService.filterSchool({ vicePrincipalAcademics });
  //     console.log(existingSchool._id);
  //     if (existingSchool && existingSchool.vicePrincipalAcademics) {
  //       await this.schoolsService.updateSchool(
  //         { _id: existingSchool._id },
  //         { vicePrincipalAcademics: null }
  //       );
  //     }

  //     this.userService.updateUser(
  //       { _id: vicePrincipalAcademics },
  //       { schoolOfPresentPosting: schoolId, position: position },
  //       (err: any, userData: IUser) => {
  //         if (err) throw new Error(err);
  //       }
  //     );
  //   } catch (err) {
  //     logger.error({ message: err.message, service: 'SchoolsService' });
  //     throw err;
  //   }
  // }

  // private async updateVicePrincipalAdmin(
  //   schoolId: string,
  //   vicePrincipalAdmin: string,
  //   position: string
  // ) {
  //   try {
  //     const existingSchool = await this.schoolsService.filterSchool({ vicePrincipalAdmin });

  //     if (existingSchool && existingSchool.vicePrincipalAdmin) {
  //       await this.schoolsService.updateSchool(
  //         { _id: existingSchool._id },
  //         { vicePrincipalAdmin: null }
  //       );
  //     }

  //     this.userService.updateUser(
  //       { _id: vicePrincipalAdmin },
  //       { schoolOfPresentPosting: schoolId, position: position },
  //       (err: any, userData: IUser) => {
  //         if (err) throw new Error(err);
  //       }
  //     );
  //   } catch (err) {
  //     logger.error({ message: err.message, service: 'SchoolsService' });
  //     throw err;
  //   }
  // }

  // public async deleteSchool(req: Request, res: Response) {
  //   if (req.params.id) {
  //     try {
  //       const deleteDetails = await this.schoolsService.deleteSchool(req.params.id);
  //       if (deleteDetails.deletedCount) {
  //         CommonService.successResponse('School deleted successfully', null, res);
  //       } else {
  //         CommonService.failureResponse('Invalid school, Unable to delete', null, res);
  //       }
  //     } catch (err) {
  //       logger.error({ message: err.message, service: 'SchoolsService' });
  //       CommonService.mongoError(err, res);
  //     }
  //   } else {
  //     CommonService.insufficientParameters(res);
  //   }
  // }

  // public async getUsersFromAParticularSchool(req: Request, res: Response) {
  //   const schoolFilter = { _id: req.params.id };
  //   if (req.params.id) {
  //     try {
  //       const schoolData = await this.schoolsService.findUsersInASchool(schoolFilter);
  //       console.log(schoolData[0].listOfStaff);
  //       CommonService.successResponse(
  //         'Teachers retrieved successfully',
  //         schoolData[0].listOfStaff,
  //         res
  //       );
  //     } catch (err) {
  //       logger.error({ message: err.message, service: 'SchoolsService' });
  //       CommonService.mongoError(err, res);
  //     }
  //   } else {
  //     CommonService.insufficientParameters(res);
  //   }
  // }

  public async createSchool(req: Request | any, res: Response) {
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

    if (!nameOfSchool || !category || !location || !zone || !division) {
      return CommonService.insufficientParameters(res);
    }

    const query = { $and: [{ nameOfSchool }, { category }] };

    try {
      const existingSchool = await this.schoolsService.filterSchool(query);
      if (existingSchool) {
        return CommonService.forbiddenResponse('Duplicate School', res);
      }

      // First, update existing principals and vice principals to null
      if (principal) {
        await this.updateExistingPrincipal(principal);
      }

      if (vicePrincipalAdmin) {
        await this.updateExistingVicePrincipalAdmin(vicePrincipalAdmin);
      }

      if (vicePrincipalAcademics) {
        await this.updateExistingVicePrincipalAcademics(vicePrincipalAcademics);
      }

      const staff = [];
      if (principal) staff.push(principal);
      if (vicePrincipalAcademics) staff.push(vicePrincipalAcademics);
      if (vicePrincipalAdmin) staff.push(vicePrincipalAdmin);

      // Then, create the new school
      const schoolParams: Partial<ISchools> = {
        nameOfSchool,
        category,
        address,
        location,
        zone,
        principal: null, // Initially set to null
        vicePrincipalAdmin: null, // Initially set to null
        vicePrincipalAcademics: null, // Initially set to null
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

      // Update the new school with the new principal and vice principals
      if (principal) {
        await this.updatePrincipal(newSchoolData._id, principal, 'Principal');
        // await this.schoolsService.updateSchool(newSchoolData._id, {istOfStaff: );
      }

      if (vicePrincipalAdmin) {
        await this.updateVicePrincipalAdmin(
          newSchoolData._id,
          vicePrincipalAdmin,
          'Vice-Principal Admin'
        );
      }

      if (vicePrincipalAcademics) {
        await this.updateVicePrincipalAcademics(
          newSchoolData._id,
          vicePrincipalAcademics,
          'Vice-Principal Academics'
        );
      }

      const updatedSchool = await this.schoolsService.filterSchool({ _id: newSchoolData._id });
      CommonService.successResponse('School Successfully Created!', updatedSchool, res);
    } catch (err) {
      logger.error({ message: err.message, service: 'SchoolsService' });
      CommonService.mongoError(err, res);
    }
  }

  private async updateExistingPrincipal(principal: string) {
    try {
      const existingSchool = await this.schoolsService.filterSchool({ principal });
      if (existingSchool && existingSchool.principal) {
        await this.schoolsService.updateSchool({ _id: existingSchool._id }, { principal: null });
        this.userService.updateUser(
          { _id: existingSchool.principal },
          { schoolOfPresentPosting: null, position: null },
          (err: any, userData: IUser) => {
            if (err) throw new Error(err);
          }
        );
      }
    } catch (err) {
      logger.error({ message: err.message, service: 'SchoolsService' });
      throw err;
    }
  }

  private async updateExistingVicePrincipalAcademics(vicePrincipalAcademics: string) {
    try {
      const existingSchool = await this.schoolsService.filterSchool({ vicePrincipalAcademics });
      if (existingSchool && existingSchool.vicePrincipalAcademics) {
        await this.schoolsService.updateSchool(
          { _id: existingSchool._id },
          { vicePrincipalAcademics: null }
        );
        this.userService.updateUser(
          { _id: existingSchool.vicePrincipalAcademics },
          { schoolOfPresentPosting: null, position: null },
          (err: any, userData: IUser) => {
            if (err) throw new Error(err);
          }
        );
      }
    } catch (err) {
      logger.error({ message: err.message, service: 'SchoolsService' });
      throw err;
    }
  }

  private async updateExistingVicePrincipalAdmin(vicePrincipalAdmin: string) {
    try {
      const existingSchool = await this.schoolsService.filterSchool({ vicePrincipalAdmin });
      if (existingSchool && existingSchool.vicePrincipalAdmin) {
        await this.schoolsService.updateSchool(
          { _id: existingSchool._id },
          { vicePrincipalAdmin: null }
        );
        this.userService.updateUser(
          { _id: existingSchool.vicePrincipalAdmin },
          { schoolOfPresentPosting: null, position: null },
          (err: any, userData: IUser) => {
            if (err) throw new Error(err);
          }
        );
      }
    } catch (err) {
      logger.error({ message: err.message, service: 'SchoolsService' });
      throw err;
    }
  }

  private async updatePrincipal(schoolId: string, principal: string, position: string) {
    try {
      await this.schoolsService.updateSchool({ _id: schoolId }, { principal });
      await this.userService.updateUser(
        { _id: principal },
        { schoolOfPresentPosting: schoolId, position: position },
        (err: any, userData: IUser) => {
          if (err) throw new Error(err);
        }
      );
    } catch (err) {
      logger.error({ message: err.message, service: 'SchoolsService' });
      throw err;
    }
  }

  private async updateVicePrincipalAcademics(
    schoolId: string,
    vicePrincipalAcademics: string,
    position: string
  ) {
    try {
      await this.schoolsService.updateSchool({ _id: schoolId }, { vicePrincipalAcademics });
      await this.userService.updateUser(
        { _id: vicePrincipalAcademics },
        { schoolOfPresentPosting: schoolId, position: position },
        (err: any, userData: IUser) => {
          if (err) throw new Error(err);
        }
      );
    } catch (err) {
      logger.error({ message: err.message, service: 'SchoolsService' });
      throw err;
    }
  }

  private async updateVicePrincipalAdmin(
    schoolId: string,
    vicePrincipalAdmin: string,
    position: string
  ) {
    try {
      await this.schoolsService.updateSchool({ _id: schoolId }, { vicePrincipalAdmin });
      await this.userService.updateUser(
        { _id: vicePrincipalAdmin },
        { schoolOfPresentPosting: schoolId, position: position },
        (err: any, userData: IUser) => {
          if (err) throw new Error(err);
        }
      );
    } catch (err) {
      logger.error({ message: err.message, service: 'SchoolsService' });
      throw err;
    }
  }

  public async deleteSchool(req: Request, res: Response) {
    if (req.params.id) {
      try {
        const deleteDetails = await this.schoolsService.deleteSchool(req.params.id);
        if (deleteDetails.deletedCount) {
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
        console.log(schoolData[0].listOfStaff);
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

    // Build the update query dynamically based on the provided fields
    const updateData: Partial<ISchools> = {};
    if (nameOfSchool) updateData.nameOfSchool = nameOfSchool;
    if (category) updateData.category = category;
    if (address !== undefined) updateData.address = address;
    if (location) updateData.location = location;
    if (zone) updateData.zone = zone;
    if (principal) updateData.principal = principal;
    if (vicePrincipalAdmin) updateData.vicePrincipalAdmin = vicePrincipalAdmin;
    if (vicePrincipalAcademics) updateData.vicePrincipalAcademics = vicePrincipalAcademics;
    if (division) updateData.division = division;
    if (latitude) updateData.latitude = latitude;
    if (longitude) updateData.longitude = longitude;

    // Check if there is any data to update
    if (Object.keys(updateData).length === 0) {
      return CommonService.insufficientParameters(res);
    }

    try {
      const query = { _id: id };
      const updatedSchool = await this.schoolsService.updateSchool(query, updateData);

      if (updatedSchool) {
        CommonService.successResponse('School updated successfully', updatedSchool, res);
      } else {
        CommonService.failureResponse('School not found', null, res);
      }
    } catch (err) {
      logger.error({ message: err.message, service: 'SchoolsService' });
      CommonService.mongoError(err, res);
    }
  }
}
