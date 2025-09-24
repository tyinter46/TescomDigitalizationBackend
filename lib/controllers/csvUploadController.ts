import { Request, Response } from 'express';
import fs from 'fs';
import Papa from 'papaparse';
import UserService from '../modules/users/service';
import CommonService from '../modules/common/service';
import { IUser } from '../modules/users/model';
import { usersQueue } from '../queues/usersQueue';


export class CsvUploadController {
  private userService: UserService = new UserService();
  public async uploadCsv(req: Request, res: Response) {
    try {
      if (!req.file) {
      return CommonService.UnprocessableResponse('No file uploaded', res);
    }
const file = req.file.buffer.toString("utf8");
    // const file = fs.readFileSync(req.file?.path, 'utf8');
 console.log (file);
    Papa.parse<IUser>(file, {
  header: true,
  skipEmptyLines: true,
  transformHeader: (header) =>
    header
      .trim(),
  complete: async (results) => {
    try {
      const mappedData  : IUser[] = results.data;

      console.log("Mapped Data:", mappedData[0].ogNumber);
      console.log("Mapped Data:", mappedData[1].ogNumber);
       
      await usersQueue.add('processUsers', {  ogNumbers: mappedData.map(user => user.ogNumber.toString().trim())});
      // this.userService.getAllUser({ogNumber: mappedData.map(user => user.ogNumber.toString())}, {}, (err: any, userData: IUser | null) => {
      //   if (err) return CommonService.UnprocessableResponse('Error checking existing user', res);
      //   console.log("User Data:", userData);
      //  CommonService.successResponse('CSV processed successfully', {userData}, res);
      // });


      if (!mappedData.length) {
        return CommonService.UnprocessableResponse(
          "Invalid CSV format",
          res
        );
      }

       return CommonService.successResponse(
              'CSV job uploaded and queued successfully',
              { count: mappedData.length },
              res
            );
    } catch (err) {
      return CommonService.UnprocessableResponse("Error processing CSV", res);
    }
  },
});

  } catch (error) {
    return CommonService.UnprocessableResponse('Failed to upload CSV', res);
  }
}
}
