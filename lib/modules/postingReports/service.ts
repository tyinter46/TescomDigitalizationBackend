import PostingReportModel from './schema';
import { IPostingReport } from './model';
import { FilterQuery, UpdateQuery } from 'mongoose';
import { ISchools } from 'modules/schools/model';

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
            select: 'nameOfSchool',
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
     // Step 1: Create and save the document
const createdReport = await PostingReportModel.create(params);

// Step 2: Fetch it back populated
const populatedReport = await PostingReportModel.findById(createdReport._id)
  .populate({
    path: 'staffDetails',
    select:
      'staffName  dateOfRetirement',
  })
  .populate({
    path: 'sourceSchool',
    select: 'nameOfSchool',
  }).
  populate({
    path: 'destinationSchool',
    select: 'nameOfSchool',
  });
// console.log(populatedReport)
return populatedReport;

    } catch (err) {
      console.log(err.message)
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
