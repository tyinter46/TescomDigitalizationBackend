import { Request, Response } from 'express';
import CommonService from '../modules/common/service';
import UserService from '../modules/users/service';
import SchoolService from '../modules/schools/service';
import UserController from './userController';
import logger from '../config/logger';
import { ISchools } from '../modules/schools/model';
import { IUser } from '../modules/users/model';
import { generateCsv } from '../utils/csvGenerator';

export class PostingController {
  private schoolService: SchoolService = new SchoolService();
  private userService: UserService = new UserService();
  private userController: UserController = new UserController();

  public async getQueriedUsersAndExportToCSV(req: Request, res: Response) {
    try {
      const getStaffForPosting: any = this.userController.getAllUsers(req, res);
      const fields = [
        '_id',
        'staffName',
        'dateOfPresentPosting',
        'residentialAddress',
        'schoolOfPresentPosting',
        'newSchool',
      ];
    } catch (error) {
      CommonService.UnprocessableResponse(error, res);
    }
  }

  //   import express from 'express';
  // import { generateCsv } from './csvUtils';
  // import Teacher from './models/Teacher'; // Adjust path as needed

  // const router = express.Router();

  // router.get('/api/export-teachers', async (req, res) => {
  //   try {
  //     const teachers = await Teacher.find().lean().exec(); // Fetch data from database
  //     const fields = ['_id', 'name', 'hireDate', 'currentSchool']; // Define CSV fields
  //     generateCsv({ data: teachers, fields, filename: 'teachers.csv' }, res);
  //   } catch (error) {
  //     res.status(500).json({ error: 'Failed to export teachers' });
  //   }
  // });

  // export default router;
}
