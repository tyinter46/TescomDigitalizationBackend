import { Request, Response } from 'express';
import CommonService from '../modules/common/service';
import ExistingStaffService from '../modules/existingStaff/service';
import logger from '../config/logger';
import { IExistingStaff } from '../modules/existingStaff/model';

export class ExistingStaffController {
  private existingStaffService: ExistingStaffService = new ExistingStaffService();
 
  public getAllExistingStaff(req: any, res: Response) {
   
    const {
      pageNumber = 1,
      pageSize = 20,
      ogNum = '',
      nameOfOfficer = '',
      gradeLevel = '',
      dateOfBirth = '',
      dateOfFirstAppointment = '',
      dateOfRetirement = '',
      sort = '',
      id = '',
    } = req.query;

    const query = {
      nameOfOfficer: { $regex: nameOfOfficer, $options: 'i' },
      $or: [
        { ogNum: { $regex: ogNum, $options: 'i' } },
        { gradeLevel: { $regex: gradeLevel, $options: 'i' } },
        { dateOfBirth: { $regex: dateOfBirth, $options: 'i' } },
        { dateOfFirstAppointment: { $regex: dateOfFirstAppointment, $options: 'i' } },
        { dateOfRetirement: { $regex: dateOfRetirement, $options: 'i' } },
      ],
    };
    if (id) {
      query['_id'] = { $eq: id };
    }

    const sortQuery = {
      ogNum: sort === 'desc' ? -1 : 1,
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
      // populate: [],
      customLabels,
    };

    this.existingStaffService.getAllStaff(
      {},
      options,
      (err: any, existingStaffData: IExistingStaff) => {
        if (err) {
          logger.error({ message: err, service: 'ExistingStaffService' });
          return CommonService.mongoError(err, res);
        } else {
          logger.info(existingStaffData)
          CommonService.successResponse(
            'Existing Staff retrieved  successfully',
            existingStaffData,
            res
          );
        }
      }
    );
  }

  public getExistingStaffById(req: Request, res: Response) {
    if (req.params.existingStaffId) {
      const existingStaffFilter = { _id: req.params.existingStaffId };
      this.existingStaffService.filterStaff(
        existingStaffFilter,
        (err: any, existingStaffData: IExistingStaff) => {
          if (err) {
            logger.error({ message: err, service: 'ExistingStaffService' });
            return CommonService.mongoError(err, res);
          }
          CommonService.successResponse(
            'Existing Staff Retrieved Successfully',
            existingStaffData,
            res
          );
        }
      );
    } else {
      CommonService.insufficientParameters(res);
    }
   }
}
