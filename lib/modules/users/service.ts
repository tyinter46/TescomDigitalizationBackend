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
      UsersModel.findOne(query, callback).populate('schoolOfPresentPosting' || null);
    else UsersModel.findOne(query, callback).populate('schoolOfPresentPosting' || null);
  }

  public deleteUser(query: FilterQuery<IUser>, callback: any) {
    UsersModel.deleteOne(query, callback);
  }

  public updateUser(query: FilterQuery<IUser>, updateQuery: UpdateQuery<IUser>, callback: any) {
    UsersModel.findOneAndUpdate(query, updateQuery, { new: true }, callback).populate(
      'schoolOfPresentPosting' || null
    );
  }

  public getAllUser(query: any, options: any, callback: any) {
    UsersModel.paginate(query, options, callback);
  }

  public async updateUsers(query: object, update: object) {
    UsersModel.updateMany(query, update);
    console.log('Users updated successfully.');
  }
}
