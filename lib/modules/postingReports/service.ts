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
              'staffName gender schoolOfPresentPosting position qualifications phoneNumber ogNumber tscFileNumber dateOfFirstAppointment dateOfBirth gradeLevel dateOfRetirement',
          },
          {
            path: 'destinationSchool',
          },
          {
            path: 'sourceSchool',
            select: 'nameOfSchool',
          },
        ],
      });
    } catch (err) {
      throw new Error(`Error getting report: ${err.message}`);
    }
  }
  public async getPostingReportById(query: FilterQuery<IPostingReport>): Promise<IPostingReport> {
    try {
      return await PostingReportModel.findById(query);
      // .populate({
      //   path: 'staffDetails',
      //   select:
      //     'staffName gender position qualifications phoneNumber ogNumber tscFileNumber dateOfFirstAppointment dateOfBirth gradeLevel dateOfRetirement',
      // });
    } catch (err) {
      throw new Error(`Error getting report by ID: ${err.message}`);
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
  public async updatePostingReport(
    id: string,
    params: Partial<IPostingReport>
  ): Promise<IPostingReport | null> {
    try {
      return await PostingReportModel.findByIdAndUpdate(id, params, { new: true });
    } catch (err) {
      throw new Error(`Error updating posting report: ${err.message}`);
    }
  }
}
