import SchoolsModel from './schema';
import { ISchools } from './model';
import { FilterQuery, UpdateQuery } from 'mongoose';

export default class SchoolService {
  public async getAllSchools(query: any, options: any, callback: any) {
    SchoolsModel.paginate(query, options, callback);
  }

  public filterSchool(query: any, callback: any) {
    SchoolsModel.findOne(query, callback);
  }

  public createSchool(params: ISchools, callback: any) {
    const newSchool = new SchoolsModel(params);
    newSchool.save(callback);
  }

  public updateSchool(
    query: FilterQuery<ISchools>,
    updateQuery: UpdateQuery<ISchools>,
    callback: any
  ) {
    SchoolsModel.findOneAndUpdate(query, updateQuery, { new: true }, callback);
  }

  public deleteSchool(_id: string, callback?: any) {
    const query = { _id };
    SchoolsModel.deleteOne(query, callback);
  }

  public findSchoolsWithUsers(query: any, callback: any) {
    SchoolsModel.find(query, callback).populate('listOfStaff').exec();
  }
}
