import {IUser} from "./model";
import UsersModel from "./schema";
import { FilterQuery, UpdateQuery } from "mongoose"; 

export default class UserService {
 public createUser(params: IUser,  callback:any){
    const newUser = new UsersModel (params)
    newUser.save(callback)
 }

 public filterUser(query: FilterQuery<IUser>, callback: any, selectPassword?: boolean){
    if (selectPassword) UsersModel.findOne(query, callback).select('+password');
   else  UsersModel.findOne(query, callback);
 }

 public deleteUser(query: FilterQuery<IUser>, callback: any){
    UsersModel.deleteOne(query, callback);
 }

 public updateUser(query: FilterQuery<IUser>, updateQuery: UpdateQuery<IUser>, callback: any) {
   UsersModel.findOneAndUpdate(query, updateQuery, { new: true }, callback);
 }
//  public updateUser(userParams: any, callback: any) {
//    let query = {};
//    if (userParams.query) {
//      query = userParams.query;
//      delete userParams.query;
//    } else query = { _id: userParams._id };

//    UsersModel.findOneAndUpdate(
//      query,
//      userParams,
//      {
//        new: true,
//      },
//      callback
//    );
//  }

 public getAllUser (query: any, options: any, callback: any){
     UsersModel.paginate(query, options, callback)
 }
}