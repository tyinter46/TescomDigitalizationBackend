import { ModificationNote } from '../modules/common/model';
import { Request, Response } from 'express';
import CommonService from '../modules/common/service';
import SchoolsService from '../modules/schools/service';
import UserService from '../modules/users/service';
import logger from '../config/logger';
import { ISchools } from '../modules/schools/model';
import UsersSchema from '../modules/schools/schema';
import { IUser } from '../modules/users/model';

export class SchoolsController {
  private schoolsService: SchoolsService = new SchoolsService();
  private userService: UserService = new UserService();

  public getAllSchools(req: any, res: Response) {
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

    if (nameOfSchool) {
      orConditions.push({ ogNumber: { $regex: nameOfSchool, $options: 'i' } });
    }

    if (category) {
      orConditions.push({ category: { $regex: category, $options: 'i' } });
    }

    if (address) {
      orConditions.push({ address: { $regex: address, $options: 'i' } });
    }

    if (location) {
      orConditions.push({ location: { $regex: location, $options: 'i' } });
    }

    if (zone) {
      orConditions.push({ zone: { $regex: zone, $options: 'i' } });
    }

    if (listOfStaff) {
      orConditions.push({ listOfStaff: { $regex: listOfStaff, $options: 'i' } });
    }

    if (principal) {
      orConditions.push({ principal: { $regex: principal, $options: 'i' } });
    }

    if (division) {
      orConditions.push({ zone: { $regex: division, $options: 'i' } });
    }

    if (vicePrincipalAdmin) {
      orConditions.push({ zone: { $regex: vicePrincipalAdmin, $options: 'i' } });
    }
    if (vicePrincipalAcademics) {
      orConditions.push({ zone: { $regex: vicePrincipalAcademics, $options: 'i' } });
    }

    if (id) {
      query._id = { $eq: id };
    }

    if (orConditions.length > 0) {
      query.$or = orConditions;
    }

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
      page: page,
      limit: limit,
      sort: sortQuery,
      // populate: [
      //   { path: 'listOfStaff', model: 'UsersModel' },
      //   { path: 'principal', model: 'UsersModel' },
      //   { path: 'vicePrincipalAdmin', model: 'UsersModel' },
      //   { path: 'vicePrincipalAcademics', model: 'UsersModel' },
      // ],
      customLabels,
    };
    console.log('Query:', query);
    console.log('Options:', options);
    this.schoolsService.getAllSchools(query, options, (err: any, schoolsData: ISchools) => {
      if (err) {
        logger.error({ message: err, service: 'SchoolsService' });
        return CommonService.mongoError(err, res);
      } else {
        CommonService.successResponse('All Schools Retrieved Successfully', schoolsData, res);
      }
    });
  }

  public getSchoolById(req: Request, res: Response) {
    if (req.params.id) {
      const schoolFilter = { _id: req.params.id };
      this.schoolsService.filterSchool(schoolFilter, (err: any, schoolData: ISchools) => {
        if (err) {
          logger.error({ message: err, service: 'SchoolsService' });
          return CommonService.mongoError(err, res);
        }
        CommonService.successResponse('School Retrieved Successfully', schoolData, res);
      });
    } else {
      CommonService.insufficientParameters(res);
    }
  }

  public createSchool(req: Request | any, res: Response) {
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
    this.schoolsService.filterSchool(query, (err: any, existingSchool: ISchools) => {
      if (err) {
        logger.error({ message: err, service: 'SchoolsService' });
        CommonService.mongoError(err, res);
      }
      if (existingSchool) return CommonService.forbiddenResponse('Duplicate School', res);
    });
    const schoolParams: Partial<ISchools> = {
      nameOfSchool,
      category,
      address,
      location,
      zone,
      principal,
      vicePrincipalAdmin,
      vicePrincipalAcademics,
      division,
      latitude,
      longitude,
      modificationNotes: [
        {
          modifiedOn: new Date(Date.now()),
          modifiedBy: `${req.user?.staffName?.firstName} ${req.user?.staffName?.lastName}`,
          modificationNote: 'New School created',
        },
      ],
    };

    this.schoolsService.createSchool(schoolParams, (err: any, schoolData: Partial<ISchools>) => {
      if (err) {
        logger.error({ message: err, service: 'SchoolsService' });
        CommonService.mongoError(err, res);
      }

      if (principal) {
        //search if its an existing principal and set the school hes coming from to null
        this.schoolsService.filterSchool(
          { principal: principal },
          (err: any, schoolData: ISchools) => {
            if (err) {
              logger.error({ message: err, service: 'SchoolsService' });
              CommonService.mongoError(err, res);
            }
            if (schoolData.principal._id === principal) {
              this.schoolsService.updateSchool(
                { principal: schoolData.principal._id },
                { principal: null },
                (err: any, updatedSchool: ISchools) => {
                  if (err) {
                    logger.error({ message: err, service: 'SchoolsService' });
                    CommonService.mongoError(err, res);
                    console.log(updatedSchool.principal);
                  }
                  console.log('Principal set to null in the incoming school schema');
                }
              );
            }
          }
        );
        //update the user principal's schoolOfPresentPosting to reflect the new school
        this.userService.updateUser(
          { _id: principal },
          { schoolOfPresentPosting: schoolData._id },
          (err: any, principalData: IUser) => {
            if (err) {
              logger.error({ message: err, service: 'SchoolsService' });
              CommonService.mongoError(err, res);
            }
            console.log(principalData);
          }
        );
      }
      if (vicePrincipalAdmin) {
        //search if its an existing vicePrincipalAdmin and set the school hes coming from to null
        this.schoolsService.filterSchool(
          { vicePrincipalAdmin: vicePrincipalAdmin },
          (err: any, schoolData: ISchools) => {
            if (err) {
              logger.error({ message: err, service: 'SchoolsService' });
              CommonService.mongoError(err, res);
            }
            if (schoolData.vicePrincipalAdmin._id === vicePrincipalAdmin) {
              this.schoolsService.updateSchool(
                { vicePrincipalAdmin: schoolData.vicePrincipalAdmin._id },
                { vicePrincipalAdmin: null },
                (err: any, updatedSchool: ISchools) => {
                  if (err) {
                    logger.error({ message: err, service: 'SchoolsService' });
                    CommonService.mongoError(err, res);
                    console.log(updatedSchool.principal);
                  }
                  console.log('vicePrincipalAdmin set to null in the incoming school schema');
                }
              );
            }
          }
        );
        //update the user vicePrincipalAdmin's schoolOfPresentPosting to reflect the new school
        this.userService.updateUser(
          { _id: vicePrincipalAdmin },
          { schoolOfPresentPosting: schoolData._id },
          (err: any, vicePrincipalAdmin: IUser) => {
            if (err) {
              logger.error({ message: err, service: 'SchoolsService' });
              CommonService.mongoError(err, res);
            }
            console.log(vicePrincipalAdmin);
          }
        );
      }

      if (vicePrincipalAcademics) {
        this.schoolsService.filterSchool(
          { vicePrincipalAcademics: vicePrincipalAcademics },
          (err: any, schoolData: ISchools) => {
            if (err) {
              logger.error({ message: err, service: 'SchoolsService' });
              CommonService.mongoError(err, res);
            }
            if (schoolData.vicePrincipalAcademics._id === vicePrincipalAcademics) {
              this.schoolsService.updateSchool(
                { vicePrincipalAcademics: schoolData.vicePrincipalAcademics._id },
                { vicePrincipalAcademics: null },
                (err: any, updatedSchool: ISchools) => {
                  if (err) {
                    logger.error({ message: err, service: 'SchoolsService' });
                    CommonService.mongoError(err, res);
                    console.log(updatedSchool.principal);
                  }
                  console.log('vicePrincipalAcademics set to null in the incoming school schema');
                }
              );
            }
          }
        );

        this.userService.updateUser(
          { _id: vicePrincipalAcademics },
          { schoolOfPresentPosting: schoolData._id },
          (err: any, vicePrincipalAcademicsData: IUser) => {
            if (err) {
              logger.error({ message: err, service: 'SchoolsService' });
              CommonService.mongoError(err, res);
            }
            console.log(vicePrincipalAcademicsData);
          }
        );
      }
      return CommonService.successResponse('School Successfully Created!', schoolData, res);
    });
  }

  public updateSchool(req: Request | any, res: Response) {
    const {
      nameOfSchool,
      category,
      principal,
      vicePrincipalAcademics,
      vicePrincipalAdmin,
      address,
      location,
      zone,
      division,
      latitude,
      longitude,
    } = req.body;

    if (
      nameOfSchool ||
      vicePrincipalAcademics ||
      vicePrincipalAdmin ||
      category ||
      address ||
      location ||
      zone ||
      division ||
      latitude ||
      longitude
    ) {
      const schoolFilter = { _id: req.params.id };
      this.schoolsService.filterSchool(schoolFilter, (err: any, schoolData: ISchools) => {
        if (err) {
          CommonService.mongoError(err, res);
        } else if (schoolData) {
          if (!schoolData.modificationNotes) {
            schoolData.modificationNotes = [];
          }
          schoolData.modificationNotes.push({
            modifiedOn: new Date(Date.now()),
            modifiedBy: req.id,
            modificationNote: 'School details updated successfully',
          });

          const schoolParams: Partial<ISchools> = {
            // _id: req.params.id,

            nameOfSchool: nameOfSchool ? nameOfSchool : schoolData.nameOfSchool,
            category: category ? category : schoolData.category,
            address: address ? address : schoolData.address,
            principal: principal ? principal : schoolData.principal,
            vicePrincipalAcademics: vicePrincipalAcademics
              ? vicePrincipalAcademics
              : schoolData.vicePrincipalAcademics,
            vicePrincipalAdmin: vicePrincipalAdmin
              ? vicePrincipalAdmin
              : schoolData.vicePrincipalAdmin,

            location: location ? location : schoolData.location,
            division: division ? division : schoolData.division,
            zone: zone ? zone : schoolData.zone,
            latitude: latitude ? latitude : schoolData.latitude,
            longitude: longitude ? longitude : schoolData.longitude,
          };

          this.schoolsService.updateSchool(
            { _id: schoolData._id },
            schoolParams,
            (err: any, updatedSchoolData: ISchools | any) => {
              if (err) {
                logger.error({ message: err, service: 'SchoolsService' });
                CommonService.mongoError(err, res);
              } else {
                return CommonService.successResponse(
                  'user update successfull',
                  { ...updatedSchoolData },
                  res
                );
              }
            }
          );
        } else {
          CommonService.failureResponse('invalid school', null, res);
        }
      });
    } else {
      CommonService.insufficientParameters(res);
    }
  }
  public deteleSchool(req: Request, res: Response) {
    if (req.params.id) {
      this.schoolsService.deleteSchool(req.params.id, (err: any, deleteDetails) => {
        if (err) {
          logger.error({ message: err, service: 'SchoolsService' });
          CommonService.mongoError(err, res);
        } else if (deleteDetails.deletedCount) {
          CommonService.successResponse('School deleted successfully', null, res);
        } else {
          CommonService.failureResponse('Invalid school, Unable to delete', null, res);
        }
      });
    } else {
      CommonService.insufficientParameters(res);
    }
  }

  public getUsersFromAParticularSchool(req: Request, res: Response) {
    const schoolFilter = { _id: req.params.id };
    if (req.params.id) {
      this.schoolsService.findUsersInASchool(schoolFilter, (err: any, schoolData: ISchools) => {
        if (err) {
          logger.error({ message: err, service: 'JobsService' });
          CommonService.mongoError(err, res);
        }
        CommonService.successResponse('Teachers retrieved successfully', schoolData, res);
      });
    } else {
      CommonService.insufficientParameters(res);
    }
  }
}
