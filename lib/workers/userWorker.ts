// import dotenv from 'dotenv';
// dotenv.config();

// import { Worker } from 'bullmq';
// import { redisClient } from '../config/ioRedis';
// import mongoose from 'mongoose';

// // Import your modules
// import {SchoolsController} from '../controllers/schoolsController'; // adjust path
// import '../modules/schools/schema';
// import UserService from '../modules/users/service';

// mongoose.set('strictQuery', false);
// mongoose.set('bufferCommands', false);

// const mongoUri = process.env.MONGO_DB_URI;
// if (!mongoUri || mongoUri.trim().length === 0) {
//   console.error('Worker: MONGO_DB_URI is not set. Aborting.');
//   process.exit(1);
// }

// // connect to mongo
// const mongoConnectPromise = mongoose.connect(mongoUri, {
//   serverSelectionTimeoutMS: 10000,
//   connectTimeoutMS: 10000,
//   socketTimeoutMS: 45000,
//   maxPoolSize: 5,
//   heartbeatFrequencyMS: 10000,
//   family: 4,
// } as any);

// mongoose.connection.on('connected', () => {
//   console.log('Worker: MongoDB connection established');
// });
// mongoose.connection.on('error', (err) => {
//   console.error(`Worker: MongoDB connection error: ${err.message}`);
// });

// // ------------------- Worker ----------------------
// export const staffPostingWorker = new Worker(
//   'schoolUpdatesQueue',
//   async (job) => {
//     await mongoConnectPromise;

//     const schoolsController = new SchoolsController();
//     const userService = new UserService();

//     const { updates } = job.data as {
//       updates: {
//         schoolId: string;
//         previousSchoolId?: string;
//         principal?: string;
//         vicePrincipalAdmin?: string;
//         vicePrincipalAcademics?: string;
//         staleOrNew?: string;
//       }[];
//     };

//     if (!Array.isArray(updates) || updates.length === 0) {
//       throw new Error('Invalid job data: "updates" must be a non-empty array');
//     }

//     console.log(`Worker received batch with ${updates.length} school updates`);

//     const results = [];

//     for (const update of updates) {
//       const {
//         schoolId,
//         previousSchoolId,
//         principal,
//         vicePrincipalAdmin,
//         vicePrincipalAcademics,
//         staleOrNew,
//       } = update;

//       try {
//         console.log(`Processing school: ${schoolId}`);

//         if (principal) {
//           await schoolsController.updateExistingPrincipal(principal, schoolId, previousSchoolId || '', staleOrNew);
//           const principalPdf = await schoolsController.updatePrincipal(schoolId, principal, 'Principal', previousSchoolId || '', staleOrNew);
//           results.push({ schoolId, principalPdf, status: 'success' });
//         }

//         if (vicePrincipalAdmin) {
//           await schoolsController.updateExistingVicePrincipalAdmin(vicePrincipalAdmin, schoolId, previousSchoolId || '', staleOrNew);
//           const vpAdminPdf = await schoolsController.updateVicePrincipalAdmin(schoolId, vicePrincipalAdmin, 'Vice-Principal Admin', previousSchoolId || '', staleOrNew);
//           results.push({ schoolId, vpAdminPdf, status: 'success' });
//         }

//         if (vicePrincipalAcademics) {
//           await schoolsController.updateExistingVicePrincipalAcademics(vicePrincipalAcademics, schoolId, previousSchoolId || '', staleOrNew);
//           const vpAcadPdf = await schoolsController.updateVicePrincipalAcademics(schoolId, vicePrincipalAcademics, 'Vice-Principal Academics', previousSchoolId || '', staleOrNew);
//           results.push({ schoolId, vpAcadPdf, status: 'success' });
//         }
//       } catch (error: any) {
//         console.error(`❌ Error processing school ${schoolId}:`, error.message);
//         results.push({ schoolId, status: 'failed', error: error.message });
//       }

//   //     try {
//   //       console.log(`Processing school: ${schoolId}`);

//   //       // Perform each staff update if applicable
//   //       if (principal) {
//   //         await schoolsController.updateExistingPrincipal(
//   //           principal,
//   //           schoolId,
//   //           previousSchoolId || '',
//   //           staleOrNew
//   //         );

//   //  await schoolsController.updatePrincipal(schoolId, principal,'Principal',  previousSchoolId, staleOrNew)

//   //     results.push({ schoolId,  status: 'success' });
//   //       }

//   //       if (vicePrincipalAdmin) {
//   //         await schoolsController.updateExistingVicePrincipalAdmin(
//   //           vicePrincipalAdmin,
//   //           schoolId,
//   //           previousSchoolId || '',
//   //           staleOrNew
//   //         );

//   //   const vicePrincipalAdminPdfUrl =    await schoolsController.updateVicePrincipalAdmin(schoolId, vicePrincipalAdmin,'Vice-Principal Admin',  previousSchoolId, staleOrNew)
//   //   console.log(vicePrincipalAdminPdfUrl)
//   //   results.push({ schoolId,  vicePrincipalAdminPdfUrl, status: 'success' });
//   //       }

//   //       if (vicePrincipalAcademics) {
//   //         await schoolsController.updateExistingVicePrincipalAcademics(
//   //           vicePrincipalAcademics,
//   //           schoolId,
//   //           previousSchoolId || '',
//   //           staleOrNew
//   //         );
//   //       }
//   //     await schoolsController.updateVicePrincipalAcademics(schoolId, vicePrincipalAcademics,'Vice-Principal Academics',  previousSchoolId, staleOrNew)

//   //       results.push({ schoolId,  status: 'success' });
//   //     } catch (error) {
//   //       console.error(`Error processing school ${schoolId}:`, error);
//   //       results.push({

//   //         schoolId,
//   //         status: 'failed',
//   //         error: (error as Error).message || 'Unknown error',
//   //       });
//   //     }
//     }

//     console.log(`Batch completed. Processed ${results.length} schools.`);
//     return results;
//   },
//   { connection: redisClient, concurrency: 3 }
// );

// // Event listeners
// staffPostingWorker.on('completed', (job) => {
//   console.log(`✅ Job ${job.id} completed with result:`, job.returnvalue);
// });

// staffPostingWorker.on('failed', (job, err) => {
//   console.error(`❌ Job ${job?.id} failed:`, err);
// });
