// import { Request, Response } from 'express';
// import fs from 'fs';
// import Papa from 'papaparse';
// import UserService from '../modules/users/service';
// import CommonService from '../modules/common/service';
// import { IUser } from '../modules/users/model';
// import { usersQueue } from '../queues/usersQueue';

// export class CsvUploadController {
//   private userService: UserService = new UserService();
//   public async uploadCsv(req: Request, res: Response) {
//     try {
//       if (!req.file) {
//       return CommonService.UnprocessableResponse('No file uploaded', res);
//     }
// const file = req.file.buffer.toString("utf8");
//     // const file = fs.readFileSync(req.file?.path, 'utf8');
//  console.log (file);
//     Papa.parse<IUser>(file, {
//   header: true,
//   skipEmptyLines: true,
//   transformHeader: (header) =>
//     header
//       .trim(),
//   complete: async (results) => {
//     try {
//       const mappedData  : IUser[] = results.data;

//       console.log("Mapped Data:", mappedData[0].ogNumber);
//       console.log("Mapped Data:", mappedData[1].ogNumber);

//       await usersQueue.add('processUsers', {  ogNumbers: mappedData.map(user => user.ogNumber.toString().trim())});
//       // this.userService.getAllUser({ogNumber: mappedData.map(user => user.ogNumber.toString())}, {}, (err: any, userData: IUser | null) => {
//       //   if (err) return CommonService.UnprocessableResponse('Error checking existing user', res);
//       //   console.log("User Data:", userData);
//       //  CommonService.successResponse('CSV processed successfully', {userData}, res);
//       // });

//       if (!mappedData.length) {
//         return CommonService.UnprocessableResponse(
//           "Invalid CSV format",
//           res
//         );
//       }

//        return CommonService.successResponse(
//               'CSV job uploaded and queued successfully',
//               { count: mappedData.length },
//               res
//             );
//     } catch (err) {
//       return CommonService.UnprocessableResponse("Error processing CSV", res);
//     }
//   },
// });

//   } catch (error) {
//     return CommonService.UnprocessableResponse('Failed to upload CSV', res);
//   }
// }
// }

import { Request, Response } from 'express';
import Papa from 'papaparse';
import CommonService from '../modules/common/service';
import { redisClient } from '../config/ioRedis';
import { Queue } from 'bullmq';
import UserService from '../modules/users/service';
import SchoolsService from '../modules/schools/service';
import { callbackPromise } from 'nodemailer/lib/shared';
// import { staffPostingQueue} from '../queues/usersQueue';

const schoolUpdateQueue = new Queue('schoolUpdatesQueue', { connection: redisClient });
const staffPostingQueue = new Queue('staffPostingQueue', { connection: redisClient });
export class CsvUploadController {
  private userService = new UserService();
  private schoolsService = new SchoolsService();

  public async uploadCsv(req: Request, res: Response) {
    try {
      if (!req.file) {
        return CommonService.UnprocessableResponse('No file uploaded', res);
      }

      const file = req.file.buffer.toString('utf8');

      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        transformHeader: (header) => header.trim(),
        complete: async (results) => {
          try {
            const rows = results.data;
            if (!rows.length) {
              return CommonService.UnprocessableResponse('Invalid or empty CSV file', res);
            }

            const updates = [];

            for (const row of rows) {
              // 1️⃣ Find current and previous schools
              const school = await this.schoolsService.filterSchool({
                nameOfSchool: row['School Name']?.trim(),
              });

              const previousSchool = await this.schoolsService.filterSchool({
                nameOfSchool: row['Previous School']?.trim(),
              });

              if (!school) {
                console.warn(`⚠️ School not found: ${row['School Name']}`);
                continue;
              }

              // 2️⃣ Find principal and vice principals by name
              const principal = await this.userService.filterUser({
                'staffName.firstName': row['Principal Name']?.trim(),
              });

              const vicePrincipalAdmin = await this.userService.filterUser({
                'staffName.firstName': row['Vice Principal (Admin)']?.trim(),
              });

              const vicePrincipalAcademics = await this.userService.filterUser({
                'staffName.firstName': row['Vice Principal (Academics)']?.trim(),
              });

              // 3️⃣ Build update payload for each school
              updates.push({
                schoolId: school._id.toString(),
                previousSchoolId: previousSchool?._id?.toString() || null,
                principal: principal?._id?.toString() || null,
                vicePrincipalAdmin: vicePrincipalAdmin?._id?.toString() || null,
                vicePrincipalAcademics: vicePrincipalAcademics?._id?.toString() || null,
                staleOrNew: 'new', // could be dynamic from CSV if needed
              });
            }

            if (!updates.length) {
              return CommonService.UnprocessableResponse('No valid records found', res);
            }

            // 4️⃣ Add batch job to the school update queue
            await schoolUpdateQueue.add('bulkSchoolUpdate', { updates });

            return CommonService.successResponse(
              'CSV processed and job queued successfully',
              { totalQueued: updates.length },
              res
            );
          } catch (error) {
            console.error('❌ CSV Processing Error:', error);
            return CommonService.UnprocessableResponse('Error processing CSV data', res);
          }
        },
      });
    } catch (error) {
      console.error('❌ Upload Error:', error);
      return CommonService.UnprocessableResponse('Failed to upload CSV', res);
    }
  }

  public async postingCSVUpload(req: Request, res: Response) {
    try {
      if (!req.file) {
        return CommonService.UnprocessableResponse('No file uploaded', res);
      }

      const csvContent = req.file.buffer.toString('utf8');

      Papa.parse(csvContent, {
        header: true,
        skipEmptyLines: true,
        transformHeader: (header) => header.trim(),
        complete: async (results) => {
          try {
            const rows = results.data as Record<string, string>[];
            if (!rows.length) {
              return CommonService.UnprocessableResponse('Invalid or empty CSV file', res);
            }

            const updates: any[] = [];
            let queuedJobs = 0;

            for (const row of rows) {
              const schoolName = row['School Name']?.trim();
              const previousSchoolName = row['Previous School']?.trim();
              const staffName = row['Staff Name']?.trim();
              // const cadre = row['Cadre']?.trim() || 'default'; // Add Cadre to CSV or use default

              if (!schoolName || !staffName || !previousSchoolName) {
                console.warn(`⚠️ Missing required fields in row:`, { row });
                continue;
              }

              // Find current and previous schools
              const currentSchool = await this.schoolsService.filterSchool({
                nameOfSchool: schoolName,
              });

              const previousSchool = await this.schoolsService.filterSchool({
                nameOfSchool: previousSchoolName,
              });

              if (!currentSchool) {
                console.warn(`⚠️ School not found: ${schoolName}`);
                continue;
              }

              // Find staff by name
              const staff = await this.userService.filterUser({
                'staffName.firstName': staffName,
              });

              if (!staff) {
                console.warn(`⚠️ Staff not found: ${staffName}`);
                continue;
              }

              // Build worker job payload
              const jobData = {
                staffId: staff._id.toString(),
                currentSchoolId: currentSchool._id.toString(),
                previousSchoolId: previousSchool?._id?.toString(),
              };

              // Add individual job to queue
              const jobId = `staff-posting-${jobData.staffId}-${jobData.currentSchoolId}`;
              await staffPostingQueue.add('staffPostingQueue', jobData);
              queuedJobs++;
              updates.push(jobData);
              console.log(jobData);
            }

            if (!queuedJobs) {
              return CommonService.UnprocessableResponse(
                'No valid staff-school matches found',
                res
              );
            }

            console.info(`Queued ${queuedJobs} staff posting jobs`);
            return CommonService.successResponse(
              'CSV processed and posting jobs queued successfully',
              { totalQueued: queuedJobs },
              res
            );
          } catch (error: any) {
            console.error({
              message: 'CSV Processing Error',
              error: error.message,
              stack: error.stack,
            });
            return CommonService.UnprocessableResponse('Error processing CSV data', res);
          }
        },
        error: (error) => {
          console.error({ message: 'CSV Parsing Error', error: error.message });
          return CommonService.UnprocessableResponse('Failed to parse CSV', res);
        },
      });
    } catch (error: any) {
      console.error({ message: 'Upload Error', error: error.message, stack: error.stack });
      return CommonService.UnprocessableResponse('Failed to upload CSV', res);
    }
  }

  // public async postingCSVUpload(req: Request, res: Response) {
  //   try {
  //     if (!req.file) {
  //       return CommonService.UnprocessableResponse('No file uploaded', res);
  //     }

  //     const csvContent = req.file.buffer.toString('utf8');

  //     Papa.parse(csvContent, {
  //       header: true,
  //       skipEmptyLines: true,
  //       transformHeader: (header) => header.trim(),
  //       complete: async (results) => {
  //         try {
  //           const rows = results.data as Record<string, string>[];
  //           if (!rows.length) {
  //             return CommonService.UnprocessableResponse('Invalid or empty CSV file', res);
  //           }

  //           const updates: any[] = [];

  //           for (const row of rows) {
  //             const schoolName = row['School Name']?.trim();
  //             const previousSchoolName = row['Previous School']?.trim();
  //             const staffName = row['Staff Name']?.trim();

  //             if (!schoolName || !staffName) {
  //               console.warn(`⚠️ Missing required fields in row:`, row);
  //               continue;
  //             }

  //             // Find current and previous schools
  //             const currentSchool = await this.schoolsService.filterSchool({
  //               nameOfSchool: schoolName,
  //             });

  //             const previousSchool = previousSchoolName
  //               ? await this.schoolsService.filterSchool({ nameOfSchool: previousSchoolName })
  //               : null;

  //             if (!currentSchool) {
  //               console.warn(`⚠️ School not found: ${schoolName}`);
  //               continue;
  //             }

  //             // Find staff by name
  //             const staff = await this.userService.filterUser({
  //               'staffName.firstName': staffName,
  //             });

  //             if (!staff) {
  //               console.warn(`⚠️ Staff not found: ${staffName}`);
  //               continue;
  //             }

  //             // Build worker job payload
  //             updates.push({
  //               staffId: staff._id.toString(),
  //               schoolId: currentSchool._id.toString(),
  //               previousSchoolId: previousSchool?._id?.toString() || '',
  //             });
  //           }

  //           if (!updates.length) {
  //             return CommonService.UnprocessableResponse('No valid staff-school matches found', res);
  //           }

  //           // Add to BullMQ worker queue
  //           await staffPostingQueue.add('bulkStaffPosting', { updates });

  //           return CommonService.successResponse(
  //             'CSV processed and posting job queued successfully',
  //             { totalQueued: updates.length },
  //             res
  //           );
  //         } catch (error) {
  //           console.error('❌ CSV Processing Error:', error);
  //           return CommonService.UnprocessableResponse('Error processing CSV data', res);
  //         }
  //       },
  //     });
  //   } catch (error) {
  //     console.error('❌ Upload Error:', error);
  //     return CommonService.UnprocessableResponse('Failed to upload CSV', res);
  //   }
  // }
}
