import { Request, Response } from 'express';
import CommonService from '../modules/common/service';
import PostingReportService from '../modules/postingReports/service';
import UserService from '../modules/users/service';
import logger from '../config/logger';
import { IPostingReport } from '../modules/postingReports/model';
import { IUser } from '../modules/users/model';
import { timeStamp } from 'console';

export class PostingsReportController {
  private PostingReportService: PostingReportService = new PostingReportService();
  //   private userService: UserService = new UserService();

  public async getPostingReport(req: Request, res: Response) {
    const {
      pageNumber = 1,
      pageSize = 10000,
      staffDetails = '',
      sourceSchool = '',
      destinationSchool = '',
      dateOfPreviousSchoolPosting = '',
      dateOfNewSchoolPosting = '',
      previousPosition = '',
      newPosition = '',
      sort = '',
      id = '',
    } = req.query;

    const page = parseInt(pageNumber as string, 10) ;
    const limit = parseInt(pageSize as string, 10) ;

    const query: any = {};
    const orConditions: any[] = [];

    if (staffDetails) orConditions.push({ staffDetails: { $regex: staffDetails, $options: 'i' } });
    if (sourceSchool) orConditions.push({ sourceSchool: { $regex: sourceSchool, $options: 'i' } });
    if (destinationSchool)
      orConditions.push({ destinationSchool: { $regex: destinationSchool, $options: 'i' } });
    if (previousPosition)
      orConditions.push({ previousPosition: { $regex: previousPosition, $options: 'i' } });
    if (newPosition) orConditions.push({ newPosition: { $regex: newPosition, $options: 'i' } });
    if (dateOfPreviousSchoolPosting) orConditions.push({ dateOfPreviousSchoolPosting });
    if (dateOfNewSchoolPosting) orConditions.push({ dateOfNewSchoolPosting });
    if (id) query._id = { $eq: id };
    if (orConditions.length > 0) query.$or = orConditions;

    const sortQuery = {
      timeStamp: sort === 'desc' ? -1 : 1,
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
          path: 'staffDetails',
          select:
            'staffName gender position qualifications phoneNumber ogNumber tscFileNumber dateOfFirstAppointment dateOfBirth gradeLevel dateOfRetirement',
        },
      ],
      customLabels,
    };

    try {
      const postingsReport = await this.PostingReportService.getPostingReport(query, options);

      CommonService.successResponse('Postings Report Retrieved Successfully', postingsReport, res);
    } catch (err) {
      logger.error({ message: err.message, service: 'PostingReportService' });
      CommonService.mongoError(err, res);
    }
  }

  // public async createPostingReport (req: Request, res:Response) {

  // }

  // ########################################################################
}
