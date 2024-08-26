import PostingReportModel from './schema';
import { IPostingReport } from './model';
import { FilterQuery, UpdateQuery } from 'mongoose';

export default class PostingReportService {
  public async getPostingReport(query: any, options: any): Promise<any> {
    try {
      return await PostingReportModel.paginate(query, {
        ...options,
        populate: [
          {
            path: 'staffDetails',
            select:
              'staffName gender position qualifications phoneNumber ogNumber tscFileNumber dateOfFirstAppointment dateOfBirth gradeLevel dateOfRetirement',
          },
        ],
      });
    } catch (err) {
      throw new Error(`Error getting report: ${err.message}`);
    }
  }

  public async createPostingReport(params: any): Promise<IPostingReport> {
    try {
      const postingReport = new PostingReportModel(params);
      return await postingReport.save();
    } catch (err) {
      throw new Error(`Error creating posting report : ${err.message}`);
    }
  }
}
