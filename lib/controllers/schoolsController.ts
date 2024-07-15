import { ModificationNote } from '../modules/common/model';
import { Request, Response } from 'express';
import CommonService from '../modules/common/service';
import SchoolsService from '../modules/schools/service';
import logger from '../config/logger';
import { ISchools } from '../modules/schools/model';

export class SchoolsController {
  private schoolsService: SchoolsService = new SchoolsService();
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
      page: parseInt(pageNumber as string, 10),
      limit: parseInt(pageSize as string, 10),
      srt: sortQuery,
      //  populate: [],
      customLabels,
    };

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
    if (req.params.schoolId) {
      const schoolFilter = { _id: req.params.existingStaffId };
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
  public updateSchool(req: Request | any, res: Response) {
    const { nameOfSchool, category, address, location, zone, division, latitude, longitude } =
      req.body;

    if (
      nameOfSchool ||
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
            modificationNote: 'User Profile Updated Successfully',
          });

          const schoolParams: Partial<ISchools> = {
            // _id: req.params.id,

            nameOfSchool: nameOfSchool ? nameOfSchool : schoolData.nameOfSchool,
            category: category ? category : schoolData.category,
            address: address ? address : schoolData.address,
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
}
