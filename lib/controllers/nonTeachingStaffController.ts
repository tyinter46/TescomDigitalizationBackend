import dotenv from 'dotenv';
import { Request, response, Response } from 'express';
import CommonService from '../modules/common/service';
import SchoolsService from '../modules/schools/service';
import PostingReportService from '../modules/postingReports/service';
import UserService from '../modules/users/service';
import logger from '../config/logger';
import { ISchools } from '../modules/schools/model';
import { IUser } from '../modules/users/model';
import { generateAndUploadStaffPostingLetter } from '../utils/staffPostingPdfGenerator';
import UsersModel from '../modules/users/schema';


dotenv.config();

export class StaffPostingController {
  private schoolsService: SchoolsService = new SchoolsService();

  private userService: UserService = new UserService();
  private postingReportService: PostingReportService = new PostingReportService();
 

  //UPDATE SCHOOL ######################### UPDATE SCHOOL
  public async updateStaffSchool(req: Request, res: Response) {
    const { id } = req.params;
    const {
      previousSchoolId,
      nameOfSchool,
      category,
      address = null,
      location,
      zone,
      cadre, 
      staff,
      division,
      latitude,
      longitude,
    
    } = req.body;

    if (!id) {
      return CommonService.insufficientParameters(res);
    }

    const updateData: Partial<ISchools> = {};
    if (nameOfSchool) updateData.nameOfSchool = nameOfSchool;
    if (category) updateData.category = category;
    if (address !== undefined) updateData.address = address;
    if (location) updateData.location = location;
    if (zone) updateData.zone = zone;
    if (division) updateData.division = division;
    if (latitude) updateData.latitude = latitude;
    if (longitude) updateData.longitude = longitude;
    

    if (Object.keys(updateData).length === 0) {
      return CommonService.insufficientParameters(res);
    }

    try {
      const query = { _id: id };
      const currentSchoolToBeUpdated = await this.schoolsService.filterSchool(query);
      if (!currentSchoolToBeUpdated) {
        return CommonService.failureResponse('School not found', null, res);
      }

      let currentStaffList = currentSchoolToBeUpdated?.listOfStaff || [];
      let updatedSchool : any
     if (currentStaffList.length > 0){

      // Ensure uniqueness of the staff list
      const makeStaffListUnique = (staffList) => {
        const seen = new Set();
        return staffList.filter((staff) => {
          const id = staff.toString();
          return id && !seen.has(id) && seen.add(id);
        });
      };
      

       updateData.listOfStaff = makeStaffListUnique(currentStaffList)
       await this.schoolsService.updateSchool(query, updateData);
    
      if (staff) {
      updatedSchool =  await this.updateExistingStaff(
          staff,
          id,
          previousSchoolId,
          cadre,      
           
        );
      }
    }
    if (staff) {
      updatedSchool =  await this.updateExistingStaff(
        staff,
         id,
        previousSchoolId,
        cadre,      
         
      );
    }
    // updateData.listOfStaff = currentStaffList
    //  updatedSchool = await this.schoolsService.updateSchool(query, updateData);

      // if (vicePrincipalAdmin) {
      //   await this.updateVicePrincipalAdmin(
      //     updatedSchool._id,
      //     vicePrincipalAdmin,
      //     'Vice-Principal',
      //     previousSchoolId,
      //     staleOrNew
      //   );
      // }

      // if (vicePrincipalAcademics) {
      //   await this.updateVicePrincipalAcademics(
      //     updatedSchool._id,
      //     vicePrincipalAcademics,
      //     'Vice-Principal',
      //     previousSchoolId,
      //     staleOrNew
      //   );
      // }

      return CommonService.successResponse('School updated successfully', updatedSchool, res);
    } catch (error) {
      return CommonService.mongoError(error.message, res);
    }
  }

  public async updateExistingStaff(
    staff: IUser,
    currentSchoolId: string,
    previousSchoolId: string,
    cadre: string
   
  ) {
    // console.log(principal);
    try {
      // Find the school where the staff is currently being assigned
      const existingSchool = await this.schoolsService.filterSchool(
       
           { listOfStaff: staff} 
           
      );

      // Check if the school is found
      if (existingSchool ) {
        // console.log(`Existing School: ${existingSchool.nameOfSchool}`);
        // Remove the principal from the staff list
        console.log('found')
        const updatedStaffList = existingSchool?.listOfStaff.filter(
          (staffId) => staffId.toString() !== staff.toString()
         
        );    
        await this.schoolsService.updateSchool({_id: existingSchool}, {listOfStaff: updatedStaffList})
           console.log('removed from existing school');
           this.updateStaff(currentSchoolId, staff, cadre, previousSchoolId)
        } 
          this.updateStaff(currentSchoolId, staff, cadre, previousSchoolId)
      
      
    } catch (err) {
      logger.error({ message: err.message, service: 'updateExistingStaff SchoolsService' });
      throw new Error('existing school is the same with current school');
    }
  }

  public async updateStaff(
    schoolId: string,  
    staff: IUser,
    cadre: string,
    previousSchoolId: string,
   
  ) {
    try {
     const result =  await this.schoolsService.filterSchool({ _id: schoolId }) 
    //  console.log(result)
    //  let newListOfStaff =   result.listOfStaff.push(staff)
     // Ensure uniqueness of the staff list
     const makeStaffListUnique = (staffList) => {
      const seen = new Set();
      return staffList.filter((staff : string) => {
        const id = staff.toString();
        return id && !seen.has(id) && seen.add(id);
      });
    };
    
   result.listOfStaff.push(staff)
   makeStaffListUnique(result.listOfStaff)
     console.log(result.listOfStaff)
     await this.schoolsService.updateSchool({_id:schoolId}, {listOfStaff:  result.listOfStaff} )
      

      this.userService.updateUser(
        { _id: staff },

        {
          schoolOfPreviousPosting: previousSchoolId,
          schoolOfPresentPosting: schoolId,
          cadre: cadre,
          dateOfPresentSchoolPosting: Date.now().toString(),
        },
        async (err: any, userData: IUser) => {
          // if (err) console.log(err);
          if (err) throw new Error(err);
          const pdfDownloadLink = await generateAndUploadStaffPostingLetter(userData._id);
          console.log(pdfDownloadLink);
        }
      );
    
    } catch (err) {
      logger.error({ message: err.message, service: 'updateStaff SchoolsService' });
      throw err;
    }
  }


}
