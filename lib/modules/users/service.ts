import { IUser } from './model';
import UsersModel from './schema';
import { FilterQuery, UpdateQuery } from 'mongoose';

export default class UserService {
  public createUser(params: IUser, callback: any) {
    const newUser = new UsersModel(params);
    newUser.save(callback);
  }
  // public async updateUser(query: FilterQuery<IUser>, update: UpdateQuery<IUser>) {
  //   return await UsersModel.findOneAndUpdate(query, update, { new: true }).populate({
  //     path: 'schoolOfPresentPosting schoolOfPreviousPosting', // You can combine the two paths here
  //     strictPopulate: false, // Disable strictPopulate to avoid the StrictPopulateError
  //   }).lean();
  // }

  // public filterUser(query: FilterQuery<IUser>, callback: any, selectPassword?: boolean) {
  //   if (selectPassword) {
  //     UsersModel.findOne(query, callback).select('+password').populate({
  //       path: 'schoolOfPresentPosting schoolOfPreviousPosting profilePhoto', // You can combine the two paths here
  //       strictPopulate: false, // Disable strictPopulate to avoid the StrictPopulateError
  //     });
  //   }

  //   else UsersModel.findOne(query, callback).populate({
  //       path: 'schoolOfPresentPosting schoolOfPreviousPosting', // You can combine the two paths here
  //       strictPopulate: false, // Disable strictPopulate to avoid the StrictPopulateError
  //     }).lean();
  // }

  public async filterUser(
    query: FilterQuery<IUser>,
    callback?: (err: any, user?: IUser | null) => void,
    selectPassword?: boolean
  ): Promise<IUser | null> {
    try {
      const queryBuilder = UsersModel.findOne(query).populate({
        path: 'schoolOfPresentPosting schoolOfPreviousPosting profilePhoto',
        strictPopulate: false,
      });

      if (selectPassword) queryBuilder.select('+password');

      const result = await queryBuilder.lean<IUser>().exec();

      if (callback) callback(null, result);
      return result;
    } catch (err) {
      if (callback) callback(err);
      throw err;
    }
  }

  // public filterUser(query: FilterQuery<IUser>, callback: any, selectPassword?: boolean) {
  //   const queryBuilder = UsersModel.findOne(query, callback).populate({
  //     path: 'schoolOfPresentPosting schoolOfPreviousPosting profilePhoto',
  //     strictPopulate: false,
  //   });

  //   if (selectPassword) {
  //     queryBuilder.select('+password');
  //   }

  //   return queryBuilder.lean(); // Ensure we return a plain object
  // }

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
  public getAllUsersWithoutPopulation(query: any, options: any, callback: any) {
    UsersModel.paginate(
      query,
      {
        ...options,
        select: '_id staffName',
      },
      callback
    );
  }

  public getUsersWithUpdatedProfiles(query: any, options: any, callback: any) {
    UsersModel.paginate(
      query,
      {
        ...options,
        select: '_id staffName',
      },
      callback
    );
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
              'staffName listOfStaff gender position phoneNumber ogNumber tscFileNumber dateOfBirth gradeLevel dateOfRetirement',
            strictPopulate: false,
          },
          // {
          //   path: 'schoolOfPreviousPosting',
          //   select:
          //     'staffName listOfStaff gender position phoneNumber ogNumber tscFileNumber dateOfBirth gradeLevel dateOfRetirement',
          //   strictPopulate: false,
          // },
        ],
      },
      callback
    );
  }

  public async updateUsers(query: object, update: object) {
    const result = await UsersModel.updateMany(query, update).populate({
      path: 'schoolOfPresentPosting schoolOfPreviousPosting', // You can combine the two paths here
      strictPopulate: false,
    });
  }



  public async addFieldsToAllUsers() {
    try {
     const result = await this.getAllUser({},{}, () =>{
 
     })


      
      // const result = await UsersModel.updateMany(
      //   {},
      //   {
      //     $set: {
      //       nameOfSchoolOfPresentPosting: null,
      //       nameOfSchoolOfPreviousPosting: null
      //     }
      //   }
      // );
      console.log(result)
  
      // console.log(`Updated ${result.modifiedCount} users`);
      
  
      // process.exit(0);
    } catch (error) {
      console.error('Error:', error);
      process.exit(1);
    }
  }
  

}
