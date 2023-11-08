import {IUser} from "./model";
import UsersModel from "./schema";
import { FilterQuery, UpdateQuery } from "mongoose"; 

export default class UserService {
 public createUser(params: IUser,  callback:any){
    const newUser = new UsersModel (params)
    newUser.save(callback)
 }

 public filterUser(query: FilterQuery<IUser>, callback: any, selectPassword?: boolean){
    if (selectPassword) UsersModel.findOne(query, callback).select('password');
    UsersModel.findOne(query, callback);
 }

 public deleteUser(query: FilterQuery<IUser>, callback: any){
    UsersModel.deleteOne(query, callback);
 }

 public updateUser(useParams: IUser, callback: any) {
   const query = { _id: useParams._id };
   UsersModel.findOneAndUpdate(query, useParams, callback);
 }

 public getAllUser (query: any, options: any, callback: any){
     UsersModel.paginate(query, options, callback)
 }
}