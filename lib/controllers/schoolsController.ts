import dotenv from 'dotenv';
import { Request, Response } from 'express';
import CommonService from '../modules/common/service';
import SchoolsService from '../modules/schools/service';
import PostingReportService from '../modules/postingReports/service';
import UserService from '../modules/users/service';
import logger from '../config/logger';
import { ISchools } from '../modules/schools/model';
import { IUser } from '../modules/users/model';
import { generateAndUploadPostingLetter } from '../utils/pdfGenerator';
import cryptoJs from 'crypto-js';
import redisCache from '../config/redisCache';
import UsersModel from '../modules/users/schema';
import { IPostingReport } from '../modules/postingReports/model';
import { error } from 'console';
import type { estypes } from '@elastic/elasticsearch';
import { esClient } from '../config/elasticsearch';
// import { ModificationNote } from 'modules/common/model';

dotenv.config();

export class SchoolsController {
  private schoolsService: SchoolsService = new SchoolsService();

  private userService: UserService = new UserService();
  // private postingReportService: PostingReportService = new PostingReportService();
  public async getAllSchools(req: Request, res: Response) {
    const {
      pageNumber = 1,
      pageSize = 1000,
      nameOfSchool = '',
      category = '',
      address = '',
      location = '',
      zone = '',
      division = '',
      listOfStaff = '',
      principal = '',
      vicePrincipalAdmin = '',
      vicePrincipalAcademics = '',
      latitude = '',
      longitude = '',
      sort = '',
      id = '',
    } = req.query;

  const must: estypes.QueryDslQueryContainer[] = [];

  const  schoolName = String(nameOfSchool ?? '');
  const  schoolType = String(category ?? '');
  const schoolAddress = String(address ?? '');
  const schoolLcation = String(location ?? '');
  const schoolZone = String(zone ?? '');

  const schoolDivision = String(division ?? '');
  const schoolListOfStaff = String(listOfStaff ?? '');
  const schoolPrincipal = String(principal ?? '');
  const schoolVicePrincipalAdmin = String(vicePrincipalAdmin ?? '');
  const schoolVicePrincipalAcademics = String(vicePrincipalAcademics ?? '');
  const schoolLatitude = String(latitude ?? '');
  const schoolLongitude = String(longitude ?? '');
  const schoolSort = String(sort ?? '');
  const schoolId = String(id ?? '');


    if (schoolName) must.push({match : { 'nameOfSchool': { query: schoolName} }});
    if (schoolType) must.push({ match: { 'category':  {query: schoolType} } });
    if (schoolAddress) must.push({ match: { 'address': {query: schoolAddress}} });
    if (schoolLcation) must.push({ match: { 'location': {query: schoolLcation} } });
    if (schoolZone) must.push({match : { 'zone': {query: schoolLcation} }});
    if (schoolListOfStaff) must.push({match : { 'listOfStaff':  {query:  schoolListOfStaff} }});
    if (schoolPrincipal) must.push({ match : {'principal': { query: schoolPrincipal} } });
    if (schoolDivision) must.push({ match :{ 'division': { query: schoolDivision} } });
    if (schoolVicePrincipalAdmin) must.push ({ match: {'vicePrincipalAdmin': {query: schoolVicePrincipalAdmin}}})
    
    if (schoolVicePrincipalAcademics)
      must.push({match: { 'vicePrincipalAcademics': {query: schoolVicePrincipalAcademics} } });

const query : estypes.QueryDslQueryContainer =
must.length > 0 ? { bool: { must } } : { match_all: {} };


const scrollSearch = esClient.helpers.scrollSearch<Record<string, any>>({
  index: 'schools',
  size: parseInt(pageSize as string, 10),
  query,
});
const results: any[] = [];
for await (const response of scrollSearch) {
  results.push(...response.documents);
}



    // Step 1: Generate cache key
    // const cacheKeyRaw = JSON.stringify(req.query);
    // const cacheKey = `getAllSchools:${cryptoJs.MD5(cacheKeyRaw).toString()}`;
    // const page = parseInt(pageNumber as string, 10);
    // const limit = parseInt(pageSize as string, 10);

    // const query: any = {};
    // const orConditions: any[] = [];

    // if (nameOfSchool) orConditions.push({ nameOfSchool: { $regex: nameOfSchool, $options: 'i' } });
    // if (category) orConditions.push({ category: { $regex: category, $options: 'i' } });
    // if (address) orConditions.push({ address: { $regex: address, $options: 'i' } });
    // if (location) orConditions.push({ location: { $regex: location, $options: 'i' } });
    // if (zone) orConditions.push({ zone: { $regex: zone, $options: 'i' } });
    // if (listOfStaff) orConditions.push({ listOfStaff: { $regex: listOfStaff, $options: 'i' } });
    // if (principal) orConditions.push({ principal: { $regex: principal, $options: 'i' } });
    // if (division) orConditions.push({ zone: { $regex: division, $options: 'i' } });
    // if (vicePrincipalAdmin)
    //   orConditions.push({ zone: { $regex: vicePrincipalAdmin, $options: 'i' } });
    // if (vicePrincipalAcademics)
    //   orConditions.push({ zone: { $regex: vicePrincipalAcademics, $options: 'i' } });

    // if (id) query._id = { $eq: id };
    // if (orConditions.length > 0) query.$or = orConditions;

    // const sortQuery = {
    //   nameOfSchool: sort === 'desc' ? -1 : 1,
    // };

    // const customLabels = {
    //   totalDocs: 'itemsCount',
    //   docs: 'programs',
    //   limit: 'pageSize',
    //   nextPage: 'next',
    //   prevPage: 'prev',
    //   totalPages: 'pageCount',
    // };

    // const options = {
    //   page,
    //   limit,
    //   sort: sortQuery,
    //   populate: [
    //     {
    //       path: 'principal',
    //       select:
    //         'staffName position ogNumber phoneNumber  dateOfPresentPosting gradeLevel dateOfRetirement',
    //     },
    //     {
    //       path: 'listOfStaff',
    //       select:
    //         'staffName gender position phoneNumber ogNumber   dateOfPresentPosting gradeLevel dateOfRetirement',
    //     },
    //     {
    //       path: 'vicePrincipalAdmin',
    //       select:
    //         'staffName gender position phoneNumber ogNumber   dateOfPresentPosting  gradeLevel dateOfRetirement',
    //     },
    //     {
    //       path: 'vicePrincipalAcademics',
    //       select:
    //         'staffName gender position phoneNumber ogNumber dateOfPresentPosting gradeLevel dateOfRetirement',
    //     },
    //   ],
    //   customLabels,
    // };

    try {
      // Build the options object as done in the commented-out code above
      const page = parseInt(pageNumber as string, 10);
      const limit = parseInt(pageSize as string, 10);
      const sortQuery = {
        nameOfSchool: sort === 'desc' ? -1 : 1,
      };

      const customLabels = {
        totalDocs: 'itemsCount',
        docs: 'programs',
        limit: 'pageSize',
        nextPage: 'next',
        prevPage: 'prev',
        totalPages: 'pageCount',
      };

      const options = {
        page,
        limit,
        sort: sortQuery,
        populate: [
          {
            path: 'principal',
            select:
              'staffName position ogNumber phoneNumber  dateOfPresentPosting gradeLevel dateOfRetirement',
          },
          {
            path: 'listOfStaff',
            select:
              'staffName gender position phoneNumber ogNumber   dateOfPresentPosting gradeLevel dateOfRetirement',
          },
          {
            path: 'vicePrincipalAdmin',
            select:
              'staffName gender position phoneNumber ogNumber   dateOfPresentPosting  gradeLevel dateOfRetirement',
          },
          {
            path: 'vicePrincipalAcademics',
            select:
              'staffName gender position phoneNumber ogNumber dateOfPresentPosting gradeLevel dateOfRetirement',
          },
        ],
        customLabels,
      };

       const schoolsData = await this.schoolsService.getAllSchools(query, options);

      CommonService.successResponse('All Schools Retrieved Successfully', schoolsData, res);
    } catch (err: any) {
      logger.error({ message: err.message, service: 'Get All SchoolsService' });
      CommonService.mongoError(err, res);

      const customLabels = {
        totalDocs: 'itemsCount',
        docs: 'programs',
        limit: 'pageSize',
        nextPage: 'next',
        prevPage: 'prev',
        totalPages: 'pageCount',
      };
      const page = parseInt(pageNumber as string, 10);
      const limit = parseInt(pageSize as string, 10);
      const sortQuery = {
        nameOfSchool: sort === 'desc' ? -1 : 1,
      };
      const options = {
        page,
        limit,
        sort: sortQuery,
        populate: [
          {
            path: 'principal',
            select:
              'staffName position ogNumber phoneNumber  dateOfPresentPosting gradeLevel dateOfRetirement',
          },
          {
            path: 'listOfStaff',
            select:
              'staffName gender position phoneNumber ogNumber   dateOfPresentPosting gradeLevel dateOfRetirement',
          },
          {
            path: 'vicePrincipalAdmin',
            select:
              'staffName gender position phoneNumber ogNumber   dateOfPresentPosting  gradeLevel dateOfRetirement',
          },
          {
            path: 'vicePrincipalAcademics',
            select:
              'staffName gender position phoneNumber ogNumber dateOfPresentPosting gradeLevel dateOfRetirement',
          },
        ],
        customLabels,
      };
      console.error('ElasticSearch error:', error);
      // Fallback to MongoDB
      this.schoolsService.getAllSchools({}, options)
    }
    }
  

  public async getAllBasicSchools(req: Request, res: Response) {
    const {
      pageNumber = 1,
      pageSize = 1000,
      nameOfSchool = '',
      category = '',
      address = '',
      location = '',
      zone = '',
      division = '',
      listOfStaff = '',
      principal = '',
      vicePrincipalAdmin = '',
      vicePrincipalAcademics = '',
      latitude = '',
      longitude = '',
      sort = '',
      id = '',
    } = req.query;

    const page = parseInt(pageNumber as string, 10);
    const limit = parseInt(pageSize as string, 10);

    const query: any = {};
    const orConditions: any[] = [];

    if (nameOfSchool) orConditions.push({ nameOfSchool: { $regex: nameOfSchool, $options: 'i' } });
    if (category) orConditions.push({ category: { $regex: category, $options: 'i' } });
    if (address) orConditions.push({ address: { $regex: address, $options: 'i' } });
    if (location) orConditions.push({ location: { $regex: location, $options: 'i' } });
    if (zone) orConditions.push({ zone: { $regex: zone, $options: 'i' } });
    if (listOfStaff) orConditions.push({ listOfStaff: { $regex: listOfStaff, $options: 'i' } });
    if (principal) orConditions.push({ principal: { $regex: principal, $options: 'i' } });
    if (division) orConditions.push({ zone: { $regex: division, $options: 'i' } });
    if (vicePrincipalAdmin)
      orConditions.push({ zone: { $regex: vicePrincipalAdmin, $options: 'i' } });
    if (vicePrincipalAcademics)
      orConditions.push({ zone: { $regex: vicePrincipalAcademics, $options: 'i' } });

    if (id) query._id = { $eq: id };
    if (orConditions.length > 0) query.$or = orConditions;

    const sortQuery = {
      nameOfSchool: sort === 'desc' ? -1 : 1,
    };

    const customLabels = {
      totalDocs: 'itemsCount',
      docs: 'programs',
      limit: 'pageSize',
      nextPage: 'next',
      prevPage: 'prev',
      totalPages: 'pageCount',
    };

    const options = {
      page,
      limit,
      sort: sortQuery,
      customLabels,
    };

    try {
       this.schoolsService.getAllschoolsWithoutPopulation(
        query,
        options,
        (err: any, basicSchoolsData: ISchools) => {
          if (err)
            return CommonService.failureResponse(
              'unable to retrieve schools, kindly reload',
              basicSchoolsData,
              res
            );
          // console.log(basicSchoolsData);
          CommonService.successResponse(
            'Basic schools retrieved successfully',
            basicSchoolsData,
            res
          );
        }
      );

      //  CommonService.successResponse("Basic schools retrieved successfully", basicSchoolsData, res);
    } catch (err) {
      logger.error({ message: err.message, service: 'Get All SchoolsService' });
      CommonService.mongoError(err, res);
    }
  }

  public async getSchoolById(req: Request, res: Response) {
    if (req.params.id) {
      const schoolFilter = { _id: req.params.id };

      try {
        const schoolData = await this.schoolsService.filterSchool(schoolFilter);
        CommonService.successResponse('School Retrieved Successfully', schoolData, res);
      } catch (err) {
        logger.error({ message: err.message, service: 'Get School by ID SchoolsService' });
        CommonService.mongoError(err, res);
      }
    } else {
      CommonService.insufficientParameters(res);
    }
  }

  // ########################################################################

  public async createSchool(req: Request | any, res: Response) {
    const {
      nameOfSchool,
      category,
      address = null,
      location,
      zone,
      // principal,
      // vicePrincipalAdmin,
      // vicePrincipalAcademics,
      division,
      latitude,
      longitude,
    } = req.body;

    if (!nameOfSchool || !category || !location || !zone || !division) {
      return CommonService.insufficientParameters(res);
    }

    const query = { $and: [{ nameOfSchool }, { category }] };

    try {
      const existingSchool = await this.schoolsService.filterSchool(query);
      if (existingSchool) {
        return CommonService.forbiddenResponse('Duplicate School', res);
      }

      const staff = [];

      //  create the new school
      const schoolParams: Partial<ISchools> = {
        nameOfSchool,
        category,
        address,
        location,
        zone,
        principal: null,
        vicePrincipalAdmin: null,
        vicePrincipalAcademics: null,
        division,
        latitude,
        listOfStaff: staff,
        longitude,
        modificationNotes: [
          {
            modifiedOn: new Date(Date.now()),
            modifiedBy: `${req.user?.staffName?.firstName} ${req.user?.staffName?.lastName}`,
            modificationNote: 'New School created',
          },
        ],
      };

      const newSchoolData = await this.schoolsService.createSchool(schoolParams);

      const updatedSchool = await this.schoolsService.filterSchool({ _id: newSchoolData._id });
      CommonService.successResponse('School Successfully Created!', updatedSchool, res);
    } catch (err) {
      logger.error({ message: err.message, service: 'createSchool SchoolsService' });
      CommonService.mongoError(err, res);
    }
  }

  //UPDATE SCHOOL ######################### UPDATE SCHOOL
  public async updateSchool(req: Request, res: Response) {
    const { id } = req.params;
    const {
      previousSchoolId,
      nameOfSchool,
      category,
      address = null,
      location,
      zone,
      principal,
      vicePrincipalAdmin,
      vicePrincipalAcademics,
      division,
      latitude,
      longitude,
      staleOrNew,
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

      // Helper function to update principal or vice principal
      const updateStaffRole = async (roleId, currentRoleId, updateFunction, roleName) => {
        if (roleId && roleId !== currentRoleId) {
          currentStaffList = currentStaffList.filter(
            (staff) => staff?._id?.toString() !== roleId.toString()
          );

          await updateFunction(roleId, id);

          if (!currentStaffList.some((staff) => staff?._id?.toString() === roleId.toString())) {
            currentStaffList.push({ _id: roleId });
          }
        } else if (roleId && !currentRoleId) {
          // Handle case where the staff does not currently belong to any school
          await updateFunction(roleId, id);
          currentStaffList.push({ _id: roleId });
        }
      };

      await updateStaffRole(
        principal,
        currentSchoolToBeUpdated.principal,
        this.updateExistingPrincipal.bind(this),
        'Principal'
      );
      await updateStaffRole(
        vicePrincipalAdmin,
        currentSchoolToBeUpdated.vicePrincipalAdmin,
        this.updateExistingVicePrincipalAdmin.bind(this),
        'Vice-Principal Admin'
      );
      await updateStaffRole(
        vicePrincipalAcademics,
        currentSchoolToBeUpdated.vicePrincipalAcademics,
        this.updateExistingVicePrincipalAcademics.bind(this),
        'Vice-Principal Academics'
      );

      // Ensure uniqueness of the staff list
      const makeStaffListUnique = (staffList) => {
        const seen = new Set();
        return staffList.filter((staff) => {
          const id = staff?._id?.toString();
          return id && !seen.has(id) && seen.add(id);
        });
      };

      updateData.listOfStaff = makeStaffListUnique(currentStaffList);
      const updatedSchool = await this.schoolsService.updateSchool(query, updateData);

      if (principal) {
        await this.updatePrincipal(
          updatedSchool._id,
          principal,
          'Principal',
          previousSchoolId,
          staleOrNew
        );
      }

      if (vicePrincipalAdmin) {
        await this.updateVicePrincipalAdmin(
          updatedSchool._id,
          vicePrincipalAdmin,
          'Vice-Principal',
          previousSchoolId,
          staleOrNew
        );
      }

      if (vicePrincipalAcademics) {
        await this.updateVicePrincipalAcademics(
          updatedSchool._id,
          vicePrincipalAcademics,
          'Vice-Principal',
          previousSchoolId,
          staleOrNew
        );
      }

      return CommonService.successResponse('School updated successfully', updatedSchool, res);
    } catch (error) {
      return CommonService.mongoError(error.message, res);
    }
  }

  public async updateExistingPrincipal(
    principal: string | null,
    currentSchoolId: string,
    previousSchoolId: string,
    staleOrNew: string
  ) {
    // console.log(principal);
    try {
      // Find the school where the principal is currently assigned
      const existingSchool = await this.schoolsService.filterSchool({
        $and: [
          {
            $or: [
              { principal: principal },
              { vicePrincipalAdmin: principal },
              { vicePrincipalAcademics: principal },
            ],
          },
          // { _id: { $ne: currentSchoolId } }, // Exclude the current school from the results
        ],
      });

      // Check if the school is found
      if (existingSchool) {
        // console.log(`Existing School: ${existingSchool.nameOfSchool}`);
        // Remove the principal from the staff list
        const updatedStaffList = existingSchool.listOfStaff.filter(
          (staffId) => staffId.toString() !== principal.toString()
        );

        if (existingSchool.principal?._id?.toString() === principal.toString()) {
          await this.schoolsService.updateSchool(
            { _id: existingSchool._id },
            { listOfStaff: updatedStaffList, principal: null }
          );
        }
        if (existingSchool.vicePrincipalAdmin?._id?.toString() === principal.toString()) {
          await this.schoolsService.updateSchool(
            { _id: existingSchool?._id },
            { listOfStaff: updatedStaffList, vicePrincipalAdmin: null }
          );
        }
        if (existingSchool.vicePrincipalAcademics?._id?.toString() === principal.toString()) {
          await this.schoolsService.updateSchool(
            { _id: existingSchool?._id },
            { listOfStaff: updatedStaffList, vicePrincipalAcademics: null }
          );
        }

        // Update the school to remove the principal
        // await this.schoolsService.updateSchool({ _id: existingSchool._id }, updateData);

        // Update the user's school and position to null
        this.userService.updateUser(
          { _id: principal },
          { schoolOfPresentPosting: null, position: null },
          (err: any) => {
            if (err) return CommonService.failureResponse;
          }
        );
      } else {
        // const updatePrincipalWithNoSchoolData: Partial<ISchools> = {};
        if (principal) {
          await this.schoolsService.updateSchool(
            { _id: currentSchoolId },
            {
              pincipal: principal,
            }
          );

          this.updatePrincipal(
            currentSchoolId,
            principal,
            'Principal',
            previousSchoolId,
            staleOrNew
          );
          console.log('posted');
        }
      }
    } catch (err) {
      logger.error({ message: err.message, service: 'updateExistingPrincipal SchoolsService' });
      throw new Error('existing school is the same with current school');
    }
  }

  public async updateExistingVicePrincipalAcademics(
    vicePrincipalAcademics: string | null,
    currentSchoolId: string,
    previousSchoolId: string,
    staleOrNew: string
  ) {
    try {
      const existingSchool = await this.schoolsService.filterSchool({
        $and: [
          {
            $or: [
              { vicePrincipalAcademics },
              { vicePrincipalAdmin: vicePrincipalAcademics },
              { principal: vicePrincipalAcademics },
            ],
          },
          // { _id: { $ne: currentSchoolId } }, // Exclude the current school from the results
        ],
      });
      if (existingSchool) {
        const staffList = existingSchool?.listOfStaff?.filter(
          (staff) => staff?.toString() !== vicePrincipalAcademics
        );
        if (existingSchool?.principal?._id?.toString() === vicePrincipalAcademics) {
          await this.schoolsService.updateSchool(
            { _id: existingSchool._id },
            { listOfStaff: staffList, principal: null }
          );
        }
        if (existingSchool?.vicePrincipalAcademics?._id?.toString() === vicePrincipalAcademics) {
          await this.schoolsService.updateSchool(
            { _id: existingSchool?._id },
            { listOfStaff: staffList, vicePrincipalAcademics: null }
          );
        }
        if (existingSchool?.vicePrincipalAdmin?._id?.toString() === vicePrincipalAcademics) {
          await this.schoolsService.updateSchool(
            { _id: existingSchool?._id },
            { listOfStaff: staffList, vicePrincipalAdmin: null }
          );
        }

        this.userService.updateUser(
          { _id: existingSchool?.vicePrincipalAcademics },
          { schoolOfPresentPosting: null, position: null },
          (err) => {
            if (err) CommonService.UnprocessableResponse;
          }
        );
      } else {
        console.log('No existing school found for the provided principal academics ID.');
        // const updatevicePrincipalAcademicsWithNoSchoolData: Partial<ISchools> = {};

        if (vicePrincipalAcademics)
          // updatevicePrincipalAcademicsWithNoSchoolData.vicePrincipalAcademics._id =
          //   vicePrincipalAcademics;
          await this.schoolsService.updateSchool(
            { _id: currentSchoolId },
            {
              vicePrincipalAcademics: vicePrincipalAcademics,
            }
          );
        this.updateVicePrincipalAcademics(
          currentSchoolId,
          vicePrincipalAcademics,
          'Vice-Principal',
          previousSchoolId,
          staleOrNew
        );

        console.log('vice pincipal acad posted');
      }
    } catch (err) {
      logger.error({
        message: err.message,
        service: 'updateExistingVicePrincipalAcademics SchoolsService',
      });
      throw err;
    }
  }

  public async updateExistingVicePrincipalAdmin(
    vicePrincipalAdmin: string | null,
    currentSchoolId: string,
    previousSchoolId: string,
    staleOrNew: string
  ) {
    try {
      const existingSchool = await this.schoolsService.filterSchool({
        $and: [
          {
            $or: [
              { vicePrincipalAdmin },
              { principal: vicePrincipalAdmin },
              { vicePrincipalAcademics: vicePrincipalAdmin },
            ],
          },
          // { _id: { $ne: currentSchoolId } }, // Exclude the current school from the results
        ],
      });
      // console.log(existingSchool);
      if (existingSchool) {
        // console.log(existingSchool.principal, vicePrincipalAdmin);
        const staffList = existingSchool?.listOfStaff?.filter(
          (staff) => staff.toString() !== vicePrincipalAdmin
        );
        if (existingSchool?.principal?._id?.toString() === vicePrincipalAdmin) {
          await this.schoolsService.updateSchool(
            { _id: existingSchool._id },
            { listOfStaff: staffList, principal: null }
          );
        }
        if (existingSchool.vicePrincipalAcademics?._id?.toString() === vicePrincipalAdmin) {
          await this.schoolsService.updateSchool(
            { _id: existingSchool?._id },
            { listOfStaff: staffList, vicePrincipalAcademics: null }
          );
        }
        if (existingSchool.vicePrincipalAdmin?._id?.toString() === vicePrincipalAdmin) {
          await this.schoolsService.updateSchool(
            { _id: existingSchool._id },
            { listOfStaff: staffList, vicePrincipalAdmin: null }
          );
        }

        this.userService.updateUser(
          { _id: existingSchool?.vicePrincipalAdmin },
          { schoolOfPresentPosting: null, position: null },
          (err) => {
            if (err) CommonService.UnprocessableResponse;
          }
        );
      } else {
        console.log('No existing school found for the provided vice principal admin  ID.');
        // const updatevicePrincipalAdminWithNoSchoolData: Partial<ISchools> = {};
        if (vicePrincipalAdmin)
          // updatevicePrincipalAdminWithNoSchoolData.vicePrincipalAdmin._id = vicePrincipalAdmin;
          await this.schoolsService?.updateSchool(
            { _id: currentSchoolId },
            {
              vicePrincipalAdmin,
            }
          );
        this.updateVicePrincipalAdmin(
          currentSchoolId,
          vicePrincipalAdmin,
          'Vice-Principal',
          previousSchoolId,
          staleOrNew
        );
        console.log('vicePrincipalAdmin posted');
      }
    } catch (err) {
      logger.error({
        message: err.message,
        service: 'updateExistingVicePrincipalAdmin SchoolsService',
      });
      throw err;
    }
  }

  public async updatePrincipal(
    schoolId: string,
    principal: string,
    position: string,
    previousSchoolId: string,
    staleOrNew: string
  ) {
    try {
      // Update school with principal reference
      const newSchool = await this.schoolsService.updateSchool({ _id: schoolId }, { principal });

      // Update user with new posting info
      const updatedUser = await this.userService.updateUser(
        { _id: principal },
        {
          schoolOfPreviousPosting: previousSchoolId,
          staleOrNew,
          schoolOfPresentPosting: schoolId,
          position,
          dateOfPresentSchoolPosting: new Date().toISOString(),
        },
        (err) => {
          if (err) CommonService.UnprocessableResponse;
        }
      );

      // Generate posting letter PDF and upload
      const pdfDownloadLink = await generateAndUploadPostingLetter(principal);
      console.log('📄 Principal Posting Letter:', pdfDownloadLink);

      // Optionally log or record posting report
      // await this.postingReportService.createPostingReport(...);

      return pdfDownloadLink;
    } catch (err: any) {
      logger.error({ message: err.message, service: 'updatePrincipal SchoolsService' });
      throw err;
    }
  }
  public async updateVicePrincipalAcademics(
    schoolId: string,
    vicePrincipalAcademics: string,
    position: string,
    previousSchoolId: string,
    staleOrNew: string
  ) {
    try {
      await this.schoolsService.updateSchool({ _id: schoolId }, { vicePrincipalAcademics });

      await this.userService.updateUser(
        { _id: vicePrincipalAcademics },
        {
          schoolOfPreviousPosting: previousSchoolId,
          schoolOfPresentPosting: schoolId,
          position,
          dateOfPresentSchoolPosting: new Date().toISOString(),
          staleOrNew,
        },
        (err) => {
          if (err) CommonService.UnprocessableResponse;
        }
      );

      const pdfDownloadLink = await generateAndUploadPostingLetter(vicePrincipalAcademics);
      console.log('📄 VP Academics Posting Letter:', pdfDownloadLink);

      return pdfDownloadLink;
    } catch (err: any) {
      logger.error({
        message: err.message,
        service: 'updateVicePrincipalAcademics SchoolsService',
      });
      throw err;
    }
  }

  public async updateVicePrincipalAdmin(
    schoolId: string,
    vicePrincipalAdmin: string,
    position: string,
    previousSchoolId: string,
    staleOrNew: string
  ) {
    try {
      await this.schoolsService.updateSchool({ _id: schoolId }, { vicePrincipalAdmin });

      await this.userService.updateUser(
        { _id: vicePrincipalAdmin },
        {
          schoolOfPreviousPosting: previousSchoolId,
          schoolOfPresentPosting: schoolId,
          position,
          dateOfPresentSchoolPosting: new Date().toISOString(),
          staleOrNew,
        },
        (err) => {
          if (err) CommonService.UnprocessableResponse;
        }
      );

      const pdfDownloadLink = await generateAndUploadPostingLetter(vicePrincipalAdmin);
      console.log('📄 VP Admin Posting Letter:', pdfDownloadLink);

      return pdfDownloadLink;
    } catch (err: any) {
      logger.error({ message: err.message, service: 'updateVicePrincipalAdmin SchoolsService' });
      throw err;
    }
  }

  public async deleteSchool(req: Request, res: Response) {
    if (req.params.id) {
      try {
        const deleteDetails = await this.schoolsService.deleteSchool(req.params.id);
        if (deleteDetails.deletedCount) {
          await this.userService.updateUsers(
            { schoolOfPresentPosting: req.params.id },
            { schoolOfPresentPosting: null }
          );

          console.log(
            `School with ID ${req.params.id} has been deleted and associated users have been updated.`
          );
          CommonService.successResponse('School deleted successfully', null, res);
        } else {
          CommonService.failureResponse('Invalid school, Unable to delete', null, res);
        }
      } catch (err) {
        logger.error({ message: err.message, service: 'SchoolsService' });
        CommonService.mongoError(err, res);
      }
    } else {
      CommonService.insufficientParameters(res);
    }
  }

  public async getUsersFromAParticularSchool(req: Request, res: Response) {
    const schoolFilter = { _id: req.params.id };
    if (req.params.id) {
      try {
        const schoolData = await this.schoolsService.findUsersInASchool(schoolFilter);
        // console.log(schoolData[0].listOfStaff);
        CommonService.successResponse(
          'Teachers retrieved successfully',
          schoolData[0].listOfStaff,
          res
        );
      } catch (err) {
        logger.error({ message: err.message, service: 'SchoolsService' });
        CommonService.mongoError(err, res);
      }
    } else {
      CommonService.insufficientParameters(res);
    }
  }
}
