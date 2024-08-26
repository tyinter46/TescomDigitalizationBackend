import SchoolsModel from './schema';
import { ISchools } from './model';
import { FilterQuery, UpdateQuery } from 'mongoose';

export default class SchoolService {
  public async getAllSchools(query: any, options: any): Promise<any> {
    try {
      return await SchoolsModel.paginate(query, {
        ...options,
        populate: [
          {
            path: 'principal',
            select:
              'staffName gender position residentialAddress phoneNumber ogNumber tscFileNumber dateOfFirstAppointment dateOfBirth gradeLevel dateOfRetirement',
          },
          {
            path: 'vicePrincipalAdmin',
            select:
              'staffName gender position residentialAddress phoneNumber ogNumber tscFileNumber dateOfFirstAppointment dateOfBirth gradeLevel dateOfRetirement',
          },

          {
            path: 'vicePrincipalAcademics',
            select:
              'staffName gender position residentialAddress phoneNumber ogNumber tscFileNumber dateOfFirstAppointment dateOfBirth gradeLevel dateOfRetirement',
          },
          {
            path: 'listOfStaff',
            select:
              'staffName gender position residentialAddress phoneNumber ogNumber tscFileNumber dateOfFirstAppointment dateOfPresentPosting dateOfBirth gradeLevel dateOfRetirement',
          },
        ],
      });
    } catch (err) {
      throw new Error(`Error getting all schools: ${err.message}`);
    }
  }
  public async filterSchool(query: any): Promise<ISchools | null> {
    try {
      return await SchoolsModel.findOne(query)
        .populate('principal')
        .populate('vicePrincipalAdmin')
        .populate('vicePrincipalAcademics')
        .exec();
    } catch (err) {
      throw new Error(`Error filtering school: ${err.message}`);
    }
  }

  public async createSchool(params: Partial<ISchools>): Promise<ISchools> {
    try {
      const newSchool = new SchoolsModel(params);
      return await newSchool.save();
    } catch (err) {
      throw new Error(`Error creating school: ${err.message}`);
    }
  }

  public async updateSchool(
    query: FilterQuery<ISchools>,
    updateQuery: UpdateQuery<ISchools>
  ): Promise<ISchools | null> {
    try {
      const updatedSchool = await SchoolsModel.findOneAndUpdate(query, updateQuery, {
        new: true,
      }).exec();
      // console.log('Update Result:', updatedSchool);
      return updatedSchool;
    } catch (err) {
      throw new Error(`Error updating school: ${err.message}`);
    }
  }

  public async deleteSchool(_id: string): Promise<any> {
    try {
      const query = { _id };
      return await SchoolsModel.deleteOne(query).exec();
    } catch (err) {
      throw new Error(`Error deleting school: ${err.message}`);
    }
  }

  public async findUsersInASchool(query: any): Promise<ISchools[]> {
    try {
      return await SchoolsModel.find(query).populate('listOfStaff').exec();
    } catch (err) {
      throw new Error(`Error finding users in a school: ${err.message}`);
    }
  }

  public async filterSchools(query: any): Promise<ISchools[]> {
    try {
      return await SchoolsModel.find(query)
        .populate('principal')
        .populate('vicePrincipalAdmin')
        .populate('vicePrincipalAcademics')
        .exec();
    } catch (err) {
      throw new Error(`Error filtering schools: ${err.message}`);
    }
  }

  public async findSchoolsByRole(
    role: 'principal' | 'vicePrincipalAdmin' | 'vicePrincipalAcademics' | string,
    staffId: string
  ): Promise<ISchools[]> {
    const query: any = {};
    query[role] = staffId;
    return await SchoolsModel.find(query).exec(); // Adjust according to your model
  }
}
