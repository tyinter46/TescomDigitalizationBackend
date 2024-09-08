import { IUser } from './model';
import UsersModel from './schema';
import { FilterQuery, UpdateQuery } from 'mongoose';

export default class UserService {
  public createUser(params: IUser, callback: any) {
    const newUser = new UsersModel(params);
    newUser.save(callback);
  }

  public filterUser(query: FilterQuery<IUser>, callback: any, selectPassword?: boolean) {
    if (selectPassword)
      UsersModel.findOne(query, callback).select('+password').populate({
        path: 'schoolOfPresentPosting schoolOfPreviousPosting', // You can combine the two paths here
        strictPopulate: false, // Disable strictPopulate to avoid the StrictPopulateError
      });
    else
      UsersModel.findOne(query, callback).populate({
        path: 'schoolOfPresentPosting schoolOfPreviousPosting', // You can combine the two paths here
        strictPopulate: false, // Disable strictPopulate to avoid the StrictPopulateError
      });
  }

  public deleteUser(query: FilterQuery<IUser>, callback: any) {
    UsersModel.deleteOne(query, callback);
  }
  public updateUser(query: FilterQuery<IUser>, updateQuery: UpdateQuery<IUser>, callback: any) {
    UsersModel.findOneAndUpdate(
      query,
      updateQuery,
      { new: true, strict: false }, // Add strict: false to allow adding new fields
      callback
    ).populate({
      path: 'schoolOfPresentPosting schoolOfPreviousPosting', // You can combine the two paths here
      strictPopulate: false, // Disable strictPopulate to avoid the StrictPopulateError
    });
  }

  public getAllUser(query: any, options: any, callback: any) {
    UsersModel.paginate(
      query,
      {
        ...options,
        populate: [
          {
            path: 'schoolOfPresentPosting',
            select:
              'staffName gender position residentialAddress phoneNumber ogNumber tscFileNumber dateOfFirstAppointment dateOfBirth gradeLevel dateOfRetirement',
            strictPopulate: false, // Add this line to disable strict population for this path
          },
          {
            path: 'schoolOfPreviousPosting',
            select:
              'staffName gender position residentialAddress phoneNumber ogNumber tscFileNumber dateOfFirstAppointment dateOfBirth gradeLevel dateOfRetirement',
            strictPopulate: false, // Add this line to disable strict population for this path
          },
        ],
      },
      callback
    );
  }

  public async updateUsers(query: object, update: object) {
    UsersModel.updateMany(query, update).populate({
      path: 'schoolOfPresentPosting schoolOfPreviousPosting', // You can combine the two paths here
      strictPopulate: false, // Disable strictPopulate to avoid the StrictPopulateError
    });
    console.log('Users updated successfully.');
  }
}
