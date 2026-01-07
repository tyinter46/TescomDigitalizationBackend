// // CRITICAL: Load environment variables FIRST before any other imports
// // CRITICAL: Load environment variables FIRST before any other imports
// import dotenv from 'dotenv';
// import path from 'path';

// // Try to load .env from multiple possible locations
// const possiblePaths = [
//   path.resolve(process.cwd(), '.env'), // Project root
//   path.resolve(__dirname, '../../.env'), // Two levels up from dist/workers
//   path.resolve(__dirname, '../../../.env'), // Three levels up
//   path.resolve(__dirname, '.env'), // Current directory
// ];

// let envLoaded = false;
// for (const envPath of possiblePaths) {
//   const result = dotenv.config({ path: envPath });
//   if (!result.error) {
//     console.log(`✅ Loaded .env from: ${envPath}`);
//     envLoaded = true;
//     break;
//   }
// }

// if (!envLoaded) {
//   console.log('⚠️  No .env file found, using process environment variables');
// }

// // Debug: Log current environment
// console.log('\n🔍 Environment Check:');
// console.log(`   CWD: ${process.cwd()}`);
// console.log(`   __dirname: ${__dirname}`);
// console.log(`   NODE_ENV: ${process.env.NODE_ENV || 'not set'}`);

// // Verify critical environment variables
// console.log('\n🔐 Required Environment Variables:');
// const requiredEnvVars = {
//   MONGO_DB_URI: process.env.MONGO_DB_URI,
//   CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_NAME,
//   CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
//   CLOUDINARY_API_SECRET: process.env.CLOUDINARY_SECRET,
// };

// let hasAllVars = true;
// for (const [key, value] of Object.entries(requiredEnvVars)) {
//   const status = value ? '✅' : '❌ MISSING';
//   const displayValue =
//     key.includes('SECRET') || key.includes('KEY')
//       ? value
//         ? '***hidden***'
//         : 'not set'
//       : value || 'not set';
//   if (!value) hasAllVars = false;
// }

// if (!hasAllVars) {
//   console.error('\n❌ Missing required environment variables!');
//   console.error(
//     'Available env variables containing "CLOUD":',
//     Object.keys(process.env).filter((k) => k.includes('CLOUD'))
//   );
//   console.error('\nWorker cannot proceed without all required environment variables.');
//   process.exit(1);
// }

// console.log('\n✅ All required environment variables are present\n');

// import { Worker, Job } from 'bullmq';
// import mongoose from 'mongoose';
// import { redisClient } from '../config/ioRedis';
// import logger from '../config/logger';
// import UserService from '../modules/users/service';
// import SchoolService from '../modules/schools/service';
// import PostingReportService from '../modules/postingReports/service';
// import { IUser } from '../modules/users/model';
// import { ISchools } from '../modules/schools/model';
// import { generateAndUploadStaffPostingLetter } from '../utils/staffPostingPdfGenerator';

// // CRITICAL: Explicitly configure Cloudinary for the worker process
// import { v2 as cloudinary } from 'cloudinary';

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_SECRET,
//   secure: true,
// });

// console.log('☁️  Cloudinary configured for worker process');

// // MongoDB connection setup
// const mongoUri = process.env.MONGO_DB_URI;
// if (!mongoUri) {
//   console.error('Worker: MONGO_DB_URI is not set. Aborting.');
//   process.exit(1);
// }

// const mongoConnectPromise = mongoose.connect(mongoUri, {
//   serverSelectionTimeoutMS: 10000,
//   connectTimeoutMS: 10000,
//   socketTimeoutMS: 45000,
//   maxPoolSize: 5,
//   heartbeatFrequencyMS: 10000,
//   family: 4,
// } as any) as unknown as Promise<typeof mongoose>;

// mongoose.connection.on('connected', () => console.log('Worker: MongoDB connected'));
// mongoose.connection.on('error', (err) => console.error(`MongoDB error: ${err.message}`));

// // Initialize services
// const userService = new UserService();
// const schoolService = new SchoolService();
// const postingReportService = new PostingReportService();

// // Define the job data interface
// interface StaffPostingJobData {
//   staffId: string;
//   currentSchoolId: string;
//   previousSchoolId?: string;
//   cadre: string;
// }

// console.log('Staff posting Worker initializing...');

// // CRITICAL: Verify Redis connection and version before starting worker
// redisClient.on('ready', async () => {
//   console.log('✅ Worker: Redis connection ready');
// });

// redisClient.on('error', (err) => {
//   console.error('❌ Worker: Redis connection error:', err.message);
// });

// // Check if Redis is connected
// if (redisClient.status !== 'ready' && redisClient.status !== 'connect') {
//   console.log('⏳ Worker: Waiting for Redis connection...');
// }

// // Worker setup
// const worker = new Worker(
//   'staffPostingQueue',
//   async (job: Job<StaffPostingJobData>) => {

//    const user = await  userService.filterUser({_id:job.data.staffId})
//     console.log(`Worker: Processing job ${job.id} for staff ${user.staffName.firstName} in  ${user.schoolOfPresentPosting.nameOfSchool} ${job.data.staffId}`);
//     logger.info({
//       message: `Started processing job ${job.id} ${user } `,
//       service: 'StaffPostingWorker',
//       jobData: job.data,
//     });

//     const { staffId, currentSchoolId, previousSchoolId, cadre } = job.data;

//     try {
//       if (!staffId || !currentSchoolId) {
//         throw new Error('Missing required fields: staffId or currentSchoolId');
//       }

//       console.log(`Worker: Validating staff ${staffId}...`);
//       // Verify staff exists
//       const staff = await userService.filterUser({ _id: staffId });
//       if (!staff) {
//         throw new Error(`Staff with ID ${staffId} not found`);
//       }

//       console.log(`Worker: Validating current school ${currentSchoolId}...`);
//       // Verify current school exists
//       const currentSchool = await schoolService.filterSchool({ _id: currentSchoolId });
//       if (!currentSchool) {
//         throw new Error(`Current school with ID ${currentSchoolId} not found`);
//       }

//       // Verify previous school exists if provided
//       let previousSchool: ISchools | null = null;
//       if (previousSchoolId) {
//         console.log(`Worker: Validating previous school ${previousSchoolId}...`);
//         previousSchool = await schoolService.filterSchool({ _id: previousSchoolId });
//         if (!previousSchool) {
//           throw new Error(`Previous school with ID ${previousSchoolId} not found`);
//         }
//       }

//       console.log(`Worker: Updating staff posting...`);
//       // Implement updateExistingStaff logic
//       const updatedSchool = await updateExistingStaff(
//         staffId,
//         currentSchoolId,
//         previousSchoolId || '',
//         cadre
//       );
      
//       const newSchool = await schoolService.filterSchool({_id:currentSchoolId})
      
//       // ✅ CORRECTED: Create posting report with actual names (string format)
//       try {
//         console.log('📝 Creating posting report log...');
        
//         // Format staff name to match your pattern: "LASTNAME, Firstname Middlename."
        
//       } catch (reportError: any) {
//         // Log the error but don't fail the entire job
//         console.error('⚠️  Failed to create posting report:', reportError.message);
//         logger.error({
//           message: `Failed to create posting report for staff ${staffId}: ${reportError.message}`,
//           service: 'StaffPostingWorker',
//           stack: reportError.stack,
//         });
//         // Note: We continue execution even if report creation fails
//       }

//       logger.info({
//         message: `Successfully processed posting for staff ${staffId} ${staff}  to school ${newSchool.nameOfSchool} ${currentSchoolId}`,
//         service: 'StaffPostingWorker',
//         jobId: job.id,
//       });

//       console.log(`Worker: Job ${job.id} completed successfully`);
//       return { status: 'success', staffId, staff, currentSchoolId, updatedSchool };
//     } catch (error: any) {
//       const failedUserPosting = await userService.filterUser({_id:job.data.staffId})
//       const failedPreviousSchool = await schoolService.filterSchool({_id:job.data.previousSchoolId})
//       const failedNewSchool = await schoolService.filterSchool({_id:job.data.currentSchoolId})
//       const failedPostings = []
//       failedPostings.push(`${failedUserPosting.staffName.firstName} from ${failedPreviousSchool.nameOfSchool} to ${failedNewSchool.nameOfSchool}` )
      
//       // ✅ CORRECTED: Create failed posting report with actual names
//       try {
//         console.log('📝 Creating failed posting report log...');
        
//         const staffFullName = `${failedUserPosting.staffName.lastName.toUpperCase()}, ${failedUserPosting.staffName.firstName} ${failedUserPosting.staffName.middleName || ''}.`.trim();
        
//         const failedPostingReportData = {
//           staffDetails: staffFullName, // ✅ String, not ObjectId
//           sourceSchool: failedPreviousSchool ? failedPreviousSchool.nameOfSchool : null, // ✅ String
//           destinationSchool: failedNewSchool ? failedNewSchool.nameOfSchool : null, // ✅ String
//           dateOfPreviousSchoolPosting: failedUserPosting.dateOfPresentSchoolPosting || null,
//           dateOfNewSchoolPosting: new Date(),
//           previousPosition: failedUserPosting.position || null,
//           newPosition: failedUserPosting.position || null,
//           staleOrNew: null,
//           ModificationNotes: [{
//             note: `Failed: ${error.message}`,
//             date: new Date()
//           }]
//         };

//         await postingReportService.createPostingReport(failedPostingReportData);
//         console.log('✅ Failed posting report logged');
//       } catch (reportError: any) {
//         console.error('⚠️  Could not log failed posting report:', reportError.message);
//       }

//       logger.error({
//         message: `Error processing job ${job.id}: ${error.message} ${failedPostings}`,
//         service: 'StaffPostingWorker',
//         stack: error.stack,
//         jobData: job.data,
//       });
//       console.error(`Worker: Job ${job.id} failed:`, error.message);
//       console.error(`Jobs ${failedPostings} failed`)
//       throw error;
//     }
//   },
//   {
//     connection: redisClient,
//     concurrency: 5,
//     limiter: {
//       max: 100,
//       duration: 60000,
//     },
//   }
// );

// async function updateStaff(
//   schoolId: string,
//   staffId: any,
//   cadre: string,
//   previousSchoolId: string
// ): Promise<ISchools> {
//   try {
//     const result = await schoolService.filterSchool({ _id: schoolId });
//     if (!result) {
//       throw new Error(`School ${schoolId} not found`);
//     }

//     // ✅ CRITICAL FIX: Initialize listOfStaff if null/undefined
//     if (!Array.isArray(result.listOfStaff)) {
//       result.listOfStaff = [];
//       logger.warn({
//         message: `Initialized empty listOfStaff array for school ${schoolId}`,
//         service: 'updateStaff',
//         schoolId,
//         schoolName: result.nameOfSchool
//       });
//       console.log(`⚠️  Warning: School ${schoolId} (${result.nameOfSchool}) had null/undefined listOfStaff - initialized as empty array`);
//     }

//     // Ensure uniqueness of the staff list
//     const makeStaffListUnique = (staffList: any[]) => {
//       const seen = new Set();
//       return staffList.filter((staff: string) => {
//         const id = staff.toString();
//         return id && !seen.has(id) && seen.add(id);
//       });
//     };

//     // Now safe to use includes and push
//     if (!result.listOfStaff.includes(staffId)) {
//       result.listOfStaff.push(staffId);
//     }

//     const uniqueStaffList = makeStaffListUnique(result.listOfStaff);
//     await schoolService.updateSchool({ _id: schoolId }, { listOfStaff: uniqueStaffList });
//     logger.info(`Updated school ${schoolId} with staff ${staffId}`);

//     // Update user record
//     const userUpdate = {
//       schoolOfPreviousPosting: previousSchoolId || null,
//       schoolOfPresentPosting: schoolId,
//       cadre: cadre,
//       dateOfPresentSchoolPosting: new Date().toISOString(),
//     };

//     const userData = await new Promise<IUser>((resolve, reject) => {
//       userService.updateUser({ _id: staffId }, userUpdate, (err: any, updatedUser: IUser) => {
//         if (err) {
//           reject(new Error(`Failed to update user: ${updatedUser.staffName.firstName} ${err.message}`));
//         } else {
//           resolve(updatedUser);
//         }
//       });
//     });

//     // Generate and upload posting letter
//     let pdfDownloadLink: string | null = null;
//     try {
//       console.log('📄 Generating posting letter...');
//       console.log(`   Staff ID: ${staffId}`);
//       console.log(`   Cloudinary configured: ${!!process.env.CLOUDINARY_API_KEY}`);

//       pdfDownloadLink = await generateAndUploadStaffPostingLetter(userData._id);

//       if (!pdfDownloadLink) {
//         throw new Error('Failed to generate posting letter: No download link returned');
//       }
//       logger.info(`Generated posting letter for staff ${staffId}: ${pdfDownloadLink}`);
//       console.log(`✅ Posting letter generated: ${pdfDownloadLink}`);
//     } catch (letterError: any) {
//       console.error('❌ Letter generation failed:', letterError.message);
//       console.error('Stack:', letterError.stack);
//       logger.error({
//         message: `Failed to generate posting letter for staff ${staffId}: ${letterError.message}`,
//         service: 'generateAndUploadStaffPostingLetter',
//         stack: letterError.stack,
//       });
//       throw letterError;
//     }

//     // Update user with the posting letter link
//     await new Promise<void>((resolve, reject) => {
//       userService.updateUser(
//         { _id: userData._id },
//         { letters: { ...userData.letters, postingLetter: pdfDownloadLink } },
//         (err: any) => {
//           if (err) {
//             reject(new Error(`Failed to update user with letter: ${err.message}`));
//           } else {
//             logger.info(`Updated user ${userData._id} with posting letter: ${pdfDownloadLink}`);
//             resolve();
//           }
//         }
//       );
//     });
//     const staffFullName = `${userData.staffName.firstName}.`.trim();
        
//     const postingReportData = {
//       staffDetails: staffFullName, // ✅ String, not ObjectId
//       sourceSchool: userData.schoolOfPreviousPosting.nameOfSchool , // ✅ String, not ObjectId
//       destinationSchool: userData.schoolOfPresentPosting.nameOfSchool, // ✅ String, not ObjectId
//       dateOfPreviousSchoolPosting: userData.dateOfPresentSchoolPosting || null,
//       dateOfNewSchoolPosting: new Date(),
//       previousPosition: userData.letters.postingLetter || null, // Adjust field name as needed
//       newPosition: userData.position || null, // This might need to be updated if position changes
//       staleOrNew: null, // You can add logic to determine this
//       ModificationNotes: []
//     };

//     const postingReport = await postingReportService.createPostingReport(postingReportData);
    
//     console.log(`✅ Posting report created: ${postingReport._id}`);
//     logger.info({
//       message: `Created posting report ${postingReport._id} for staff ${staffFullName}`,
//       service: 'StaffPostingWorker',
//       reportId: postingReport._id,
//       staffName: staffFullName,
//       sourceSchool: userData.schoolOfPreviousPosting.nameOfSchool || 'N/A',
//       destinationSchool: userData.schoolOfPresentPosting.nameOfSchool,
//     });
//     return result;
//   } catch (err: any) {
//     logger.error({ 
//       message: `Failed to update staff in school ${schoolId}: ${err.message}`, 
//       service: 'updateStaff',
//       schoolId,
//       staffId,
//       stack: err.stack
//     });
//     throw err;
//   }
// }

// // Independent updateExistingStaff logic
// async function updateExistingStaff(
//   staffId: string,
//   currentSchoolId: string,
//   previousSchoolId: string,
//   cadre: string
// ): Promise<ISchools> {
//   try {
//     // Find the school where the staff is currently assigned
//     const existingSchool = await schoolService.filterSchool({ listOfStaff: staffId });
//     if (existingSchool) {
//       // ✅ DEFENSIVE: Ensure listOfStaff is an array before filtering
//       if (!Array.isArray(existingSchool.listOfStaff)) {
//         existingSchool.listOfStaff = [];
//         logger.warn({
//           message: `Existing school ${existingSchool._id} had null listOfStaff during removal`,
//           service: 'updateExistingStaff',
//           schoolId: existingSchool._id
//         });
//       }
      
//       const updatedStaffList = existingSchool.listOfStaff.filter(
//         (staff) => staff.toString() !== staffId.toString()
//       );
//       await schoolService.updateSchool(
//         { _id: existingSchool._id },
//         { listOfStaff: updatedStaffList }
//       );
//       logger.info(`Removed staff ${staffId} from existing school ${existingSchool._id}`);
//     }

//     // Update staff in the current school
//     const updatedSchool = await updateStaff(currentSchoolId, staffId, cadre, previousSchoolId);
//     return updatedSchool;
//   } catch (err: any) {
//     // ✅ Enhanced error context
//     let errorContext = {
//       message: `Failed to update existing staff: ${err.message}`,
//       service: 'updateExistingStaff',
//       staffId,
//       currentSchoolId,
//       previousSchoolId,
//       cadre,
//       error: err.message,
//       stack: err.stack
//     };

//     // Try to get additional context without failing
//     try {
//       const staff = await userService.filterUser({ _id: staffId });
//       const currentSchool = await schoolService.filterSchool({ _id: currentSchoolId });
//       errorContext = {
//         ...errorContext,
//         staffName: staff?.staffName,
//         currentSchoolName: currentSchool?.nameOfSchool
//       } as any;
//     } catch (contextErr) {
//       // Context retrieval failed, but we still log the main error
//     }

//     logger.error(errorContext);
//     throw new Error(`Failed to update existing staff: ${err.message}`);
//   }
// }

// console.log('Staff posting Worker running');

// // Handle worker events
// worker.on('completed', (job: Job) => {
//   console.log(`✅ Job ${job.id} completed successfully for staff ${job.data.staffId}`);
//   logger.info({
//     message: `Job completed: ${job.id}`,
//     service: 'StaffPostingWorker',
//     returnValue: job.returnvalue,
//   });
// });

// worker.on('failed', async (job: Job | undefined, err: Error) => {
//   const failedProcesses = []

//   const failedUserProcess = await userService.filterUser({_id:job.data?.staffId})
//   const failedPreviousSchoolProcess = await schoolService.filterSchool({_id:job.data?.previousSchoolId})
//   const failedNewSchoolProcess = await schoolService.filterSchool({_id:job.data?.currentSchoolId})
  
//   failedProcesses.push(`${failedUserProcess.staffName.firstName} from ${failedPreviousSchoolProcess?.nameOfSchool} to ${failedNewSchoolProcess?.nameOfSchool}` )

//   console.error(`❌ Job ${job?.id || 'unknown'} failed: ${failedProcesses} ${err.message}`);
//   logger.error({
//     message: `Job failed: ${job?.id || 'unknown'}  ${failedProcesses} `,
//     service: 'StaffPostingWorker',
//     error: err.message,
//   });
// });

// worker.on('error', (err: Error) => {
//   console.error(`⚠️  Worker error: ${err.message}`);
//   logger.error({
//     message: 'Worker error',
//     service: 'StaffPostingWorker',
//     error: err.message,
//   });
// });

// worker.on('active', (job: Job) => {
//   console.log(`🔄 Job ${job.id} is now active and being processed`);
// });

// worker.on('ready', () => {
//   console.log('✅ Worker is ready and listening for jobs');
// });

// worker.on('stalled', (jobId: string) => {
//   console.log(`⚠️  Job ${jobId} has stalled`);
// });

// // Graceful shutdown
// process.on('SIGTERM', async () => {
//   console.log('Worker: Received SIGTERM, closing...');
//   await worker.close();
//   await mongoose.connection.close();
//   process.exit(0);
// });

// process.on('SIGINT', async () => {
//   console.log('Worker: Received SIGINT, closing...');
//   await worker.close();
//   await mongoose.connection.close();
//   process.exit(0);
// });

// // Start worker after MongoDB connection
// mongoConnectPromise
//   .then(async () => {
//     console.log('✅ Worker: MongoDB connected successfully');
//     console.log('✅ Worker: Started processing staff posting jobs');
//     console.log(`🔍 Worker: Listening to queue "staffPostingQueue" on Redis`);

//     const isRunning = await worker.isRunning();
//     console.log(`🔍 Worker running status: ${isRunning}`);

//     const queueHealth = await redisClient.ping();
//     console.log(`✅ Redis connection health: ${queueHealth}`);

//     console.log('⏳ Worker process will stay alive and listen for jobs...');
//     console.log('   Press Ctrl+C to stop\n');

//     // Optional: Set up a heartbeat to show worker is alive
//     setInterval(() => {
//       console.log(`💓 Worker heartbeat - ${new Date().toISOString()}`);
//     }, 30000); // Every 30 seconds
//   })
//   .catch((err) => {
//     console.error(`❌ Worker: Failed to connect to MongoDB: ${err.message}`);
//     process.exit(1);
//   });

// src/workers/staffPostingWorker.ts

// CRITICAL: Load environment variables FIRST before any other imports
import dotenv from 'dotenv';
import path from 'path';

// Try to load .env from multiple possible locations
const possiblePaths = [
  path.resolve(process.cwd(), '.env'),
  path.resolve(__dirname, '../../.env'),
  path.resolve(__dirname, '../../../.env'),
  path.resolve(__dirname, '.env'),
];

let envLoaded = false;
for (const envPath of possiblePaths) {
  const result = dotenv.config({ path: envPath });
  if (!result.error) {
    console.log(`✅ Loaded .env from: ${envPath}`);
    envLoaded = true;
    break;
  }
}

if (!envLoaded) {
  console.log('⚠️  No .env file found, using process environment variables');
}

// Debug: Log current environment
console.log('\n🔍 Environment Check:');
console.log(`   CWD: ${process.cwd()}`);
console.log(`   __dirname: ${__dirname}`);
console.log(`   NODE_ENV: ${process.env.NODE_ENV || 'not set'}`);

// Verify critical environment variables
console.log('\n🔐 Required Environment Variables:');
const requiredEnvVars = {
  MONGO_DB_URI: process.env.MONGO_DB_URI,
  REDIS_HOST: process.env.REDIS_HOST || 'localhost',
  REDIS_PORT: process.env.REDIS_PORT || '6379',
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_SECRET,
};

let hasAllVars = true;
for (const [key, value] of Object.entries(requiredEnvVars)) {
  const status = value ? '✅' : '❌ MISSING';
  if (!value) hasAllVars = false;
  
  // Log with masking for sensitive data
  if (key.includes('SECRET') || key.includes('KEY') || key.includes('URI')) {
    console.log(`   ${key}: ${status}`);
  } else {
    console.log(`   ${key}: ${status} ${value ? `(${value})` : ''}`);
  }
}

if (!hasAllVars) {
  console.error('\n❌ Missing required environment variables!');
  console.error('\nWorker cannot proceed without all required environment variables.');
  process.exit(1);
}

console.log('\n✅ All required environment variables are present\n');

// Now import dependencies
import { Worker, Job } from 'bullmq';
import mongoose from 'mongoose';
import { redisClient } from '../config/ioRedis';
import logger from '../config/logger';
import UserService from '../modules/users/service';
import SchoolService from '../modules/schools/service';
import PostingReportService from '../modules/postingReports/service';
import { IUser } from '../modules/users/model';
import { ISchools } from '../modules/schools/model';
import { generateAndUploadStaffPostingLetter } from '../utils/staffPostingPdfGenerator';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
  secure: true,
});

console.log('☁️  Cloudinary configured for worker process');

// MongoDB connection setup
const mongoUri = process.env.MONGO_DB_URI;
if (!mongoUri) {
  console.error('Worker: MONGO_DB_URI is not set. Aborting.');
  process.exit(1);
}

const mongoConnectPromise = mongoose.connect(mongoUri, {
  serverSelectionTimeoutMS: 10000,
  connectTimeoutMS: 10000,
  socketTimeoutMS: 45000,
  maxPoolSize: 5,
  heartbeatFrequencyMS: 10000,
  family: 4,
} as any) as unknown as Promise<typeof mongoose>;

mongoose.connection.on('connected', () => console.log('✅ Worker: MongoDB connected'));
mongoose.connection.on('error', (err) => console.error(`❌ MongoDB error: ${err.message}`));
mongoose.connection.on('disconnected', () => console.log('⚠️  Worker: MongoDB disconnected'));

// Define interfaces
interface StaffPostingJobData {
  staffId: string;
  currentSchoolId: string;
  previousSchoolId?: string;
  cadre: string;
}

interface FailedPosting {
  staffId: string;
  staffName: string;
  previousSchool: string;
  newSchool: string;
  error: string;
  timestamp: Date;
}

// Global tracking
const failedPostings: FailedPosting[] = [];

console.log('📋 Staff posting Worker initializing...');

// Redis connection handlers
redisClient.on('connect', () => {
  console.log('🔄 Worker: Redis connecting...');
});

redisClient.on('ready', () => {
  console.log('✅ Worker: Redis connection ready');
});

redisClient.on('error', (err) => {
  console.error('❌ Worker: Redis connection error:', err.message);
});

redisClient.on('close', () => {
  console.log('⚠️  Worker: Redis connection closed');
});

redisClient.on('reconnecting', () => {
  console.log('🔄 Worker: Redis reconnecting...');
});

// Test Redis connection function
async function testRedisConnection(): Promise<boolean> {
  try {
    console.log('\n🔍 Testing Redis connection...');
    console.log(`   Redis Host: ${process.env.REDIS_HOST || 'localhost'}`);
    console.log(`   Redis Port: ${process.env.REDIS_PORT || '6379'}`);
    
    const result = await redisClient.ping();
    console.log('✅ Redis PING successful:', result);
    
    // Test set and get
    await redisClient.set('worker-test-key', 'test-value', 'EX', 10);
    const value = await redisClient.get('worker-test-key');
    await redisClient.del('worker-test-key');
    
    console.log('✅ Redis read/write test passed\n');
    return true;
  } catch (err: any) {
    console.error('❌ Redis connection failed:', err.message);
    console.error('\n📋 Troubleshooting checklist:');
    console.error('1. Is Redis running? Try: redis-cli ping');
    console.error('2. Check REDIS_HOST and REDIS_PORT in .env file');
    console.error('3. Start Redis with: redis-server (or brew services start redis)');
    console.error('4. Or use Docker: docker run -d -p 6379:6379 redis:latest');
    console.error('5. Verify firewall/network settings\n');
    return false;
  }
}

// Helper function to safely get staff name
function getStaffFullName(staff: IUser | null): string {
  if (!staff || !staff.staffName) return 'Unknown Staff';
  
  const lastName = staff.staffName.lastName?.toUpperCase() || '';
  const firstName = staff.staffName.firstName || '';
  const middleName = staff.staffName.middleName || '';
  
  return `${lastName}${lastName ? ', ' : ''}${firstName}${middleName ? ' ' + middleName : ''}`.trim();
}

// Helper function to update staff in a school
async function updateStaff(
  schoolId: string,
  staffId: string,
  cadre: string,
  previousSchoolId: string,
  userService: UserService,
  schoolService: SchoolService,
  postingReportService: PostingReportService
): Promise<ISchools> {
  try {
    const result = await schoolService.filterSchool({ _id: schoolId });
    if (!result) {
      throw new Error(`School ${schoolId} not found`);
    }

    // Initialize listOfStaff if null/undefined
    if (!Array.isArray(result.listOfStaff)) {
      result.listOfStaff = [];
      logger.warn({
        message: `Initialized empty listOfStaff array for school ${schoolId}`,
        service: 'updateStaff',
        schoolId,
        schoolName: result.nameOfSchool
      });
      console.log(`⚠️  Warning: School ${schoolId} (${result.nameOfSchool}) had null/undefined listOfStaff`);
    }

    // Ensure uniqueness of the staff list
    const makeStaffListUnique = (staffList: any[]) => {
      const seen = new Set();
      return staffList.filter((staff: any) => {
        const id = staff?.toString();
        return id && !seen.has(id) && seen.add(id);
      });
    };

    // Add staff if not already present
    const staffIdString = staffId.toString();
    const isStaffPresent = result.listOfStaff.some(
      (staff) => staff?.toString() === staffIdString
    );
    
    if (!isStaffPresent) {
      (result.listOfStaff as any[]).push(staffId);
      console.log(`➕ Adding staff ${staffId} to school ${result.nameOfSchool}`);
    } else {
      console.log(`ℹ️  Staff ${staffId} already in school ${result.nameOfSchool}`);
    }

    const uniqueStaffList = makeStaffListUnique(result.listOfStaff);
    await schoolService.updateSchool({ _id: schoolId }, { listOfStaff: uniqueStaffList });
    logger.info(`Updated school ${schoolId} with staff ${staffId}`);

    // Update user record
    const userUpdate: any = {
      schoolOfPresentPosting: schoolId,
      cadre: cadre,
      dateOfPresentSchoolPosting: new Date().toISOString(),
    };

    if (previousSchoolId) {
      userUpdate.schoolOfPreviousPosting = previousSchoolId;
    }

    const userData = await new Promise<IUser>((resolve, reject) => {
      userService.updateUser({ _id: staffId }, userUpdate, (err: any, updatedUser: IUser) => {
        if (err) {
          reject(new Error(`Failed to update user: ${err.message}`));
        } else if (!updatedUser) {
          reject(new Error(`User not found after update: ${staffId}`));
        } else {
          resolve(updatedUser);
        }
      });
    });

    console.log(`✅ Updated user ${staffId} posting details`);

    // Generate and upload posting letter
    let pdfDownloadLink: string | null = null;
    try {
      console.log('📄 Generating posting letter...');
      console.log(`   Staff: ${getStaffFullName(userData)}`);

      pdfDownloadLink = await generateAndUploadStaffPostingLetter(userData._id);

      if (!pdfDownloadLink) {
        throw new Error('Failed to generate posting letter: No download link returned');
      }
      
      logger.info(`Generated posting letter for staff ${staffId}: ${pdfDownloadLink}`);
      console.log(`✅ Posting letter generated successfully`);
    } catch (letterError: any) {
      console.error('❌ Letter generation failed:', letterError.message);
      logger.error({
        message: `Failed to generate posting letter for staff ${staffId}: ${letterError.message}`,
        service: 'generateAndUploadStaffPostingLetter',
        stack: letterError.stack,
      });
      throw letterError;
    }

    // Update user with the posting letter link
    await new Promise<void>((resolve, reject) => {
      const updatedLetters = {
        ...userData.letters,
        postingLetter: pdfDownloadLink
      };
      
      userService.updateUser(
        { _id: userData._id },
        { letters: updatedLetters },
        (err: any) => {
          if (err) {
            reject(new Error(`Failed to update user with letter: ${err.message}`));
          } else {
            logger.info(`Updated user ${userData._id} with posting letter`);
            resolve();
          }
        }
      );
    });

    console.log(`✅ User updated with posting letter link`);

    // Create posting report
    try {
      const staffFullName = getStaffFullName(userData);
      
      // Safely get school names
      const previousSchool = previousSchoolId 
        ? await schoolService.filterSchool({ _id: previousSchoolId })
        : null;
      const currentSchool = await schoolService.filterSchool({ _id: schoolId });
      
      const postingReportData = {
        staffDetails: staffFullName,
        sourceSchool: previousSchool?.nameOfSchool || 'N/A',
        destinationSchool: currentSchool?.nameOfSchool || 'N/A',
        dateOfPreviousSchoolPosting: userData.dateOfPresentSchoolPosting || null,
        dateOfNewSchoolPosting: new Date(),
        previousPosition: userData.position || null,
        newPosition: userData.position || null,
        staleOrNew: null,
        ModificationNotes: []
      };

      const postingReport = await postingReportService.createPostingReport(postingReportData);
      
      console.log(`✅ Posting report created: ${postingReport._id}`);
      logger.info({
        message: `Created posting report ${postingReport._id} for staff ${staffFullName}`,
        service: 'updateStaff',
        reportId: postingReport._id,
        staffName: staffFullName,
        sourceSchool: postingReportData.sourceSchool,
        destinationSchool: postingReportData.destinationSchool,
      });
    } catch (reportError: any) {
      console.error('⚠️  Failed to create posting report:', reportError.message);
      logger.error({
        message: `Failed to create posting report: ${reportError.message}`,
        service: 'updateStaff',
        stack: reportError.stack,
      });
      // Don't throw - posting report is not critical
    }

    return result;
  } catch (err: any) {
    logger.error({ 
      message: `Failed to update staff in school ${schoolId}: ${err.message}`, 
      service: 'updateStaff',
      schoolId,
      staffId,
      stack: err.stack
    });
    throw err;
  }
}

// Update existing staff logic
async function updateExistingStaff(
  staffId: string,
  currentSchoolId: string,
  previousSchoolId: string,
  cadre: string,
  userService: UserService,
  schoolService: SchoolService,
  postingReportService: PostingReportService
): Promise<ISchools> {
  try {
    // Find and remove staff from existing school
    const existingSchool = await schoolService.filterSchool({ listOfStaff: staffId });
    
    if (existingSchool) {
      console.log(`🔄 Removing staff ${staffId} from existing school: ${existingSchool.nameOfSchool}`);
      
      // Ensure listOfStaff is an array
      if (!Array.isArray(existingSchool.listOfStaff)) {
        existingSchool.listOfStaff = [];
        logger.warn({
          message: `Existing school ${existingSchool._id} had null listOfStaff during removal`,
          service: 'updateExistingStaff',
          schoolId: existingSchool._id
        });
      }
      
      const updatedStaffList = existingSchool.listOfStaff.filter(
        (staff) => staff?.toString() !== staffId.toString()
      );
      
      await schoolService.updateSchool(
        { _id: existingSchool._id },
        { listOfStaff: updatedStaffList }
      );
      
      logger.info(`Removed staff ${staffId} from existing school ${existingSchool._id}`);
      console.log(`✅ Removed from previous school`);
    } else {
      console.log(`ℹ️  Staff ${staffId} not found in any existing school`);
    }

    // Add staff to new school
    console.log(`➡️  Adding staff to new school...`);
    const updatedSchool = await updateStaff(
      currentSchoolId, 
      staffId, 
      cadre, 
      previousSchoolId, 
      userService, 
      schoolService, 
      postingReportService
    );
    
    return updatedSchool;
  } catch (err: any) {
    let errorContext: any = {
      message: `Failed to update existing staff: ${err.message}`,
      service: 'updateExistingStaff',
      staffId,
      currentSchoolId,
      previousSchoolId,
      cadre,
      error: err.message,
      stack: err.stack
    };

    // Try to get additional context
    try {
      const staff = await userService.filterUser({ _id: staffId });
      const currentSchool = await schoolService.filterSchool({ _id: currentSchoolId });
      
      errorContext.staffName = staff?.staffName;
      errorContext.currentSchoolName = currentSchool?.nameOfSchool;
    } catch (contextErr) {
      // Context retrieval failed, continue with basic error
    }

    logger.error(errorContext);
    throw new Error(`Failed to update existing staff: ${err.message}`);
  }
}

// Worker setup
const worker = new Worker(
  'staffPostingQueue',
  async (job: Job<StaffPostingJobData>) => {
    // Await MongoDB connection
    await mongoConnectPromise;
    
    // Instantiate services
    const userService = new UserService();
    const schoolService = new SchoolService();
    const postingReportService = new PostingReportService();
    
    const { staffId, currentSchoolId, previousSchoolId, cadre } = job.data;
    
    let staff: IUser | null = null;
    let currentSchool: ISchools | null = null;
    let previousSchool: ISchools | null = null;

    console.log(`\n${'='.repeat(80)}`);
    console.log(`🔄 Processing Job ${job.id}`);
    console.log(`${'='.repeat(80)}`);

    try {
      // Validate required fields
      if (!staffId || !currentSchoolId) {
        throw new Error('Missing required fields: staffId or currentSchoolId');
      }

      // Fetch staff details
      console.log(`1️⃣  Validating staff ${staffId}...`);
      staff = await userService.filterUser({ _id: staffId });
      if (!staff) {
        throw new Error(`Staff with ID ${staffId} not found`);
      }

      const staffName = staff.staffName?.firstName || 'Unknown';
      console.log(`   ✅ Staff found: ${getStaffFullName(staff)}`);
      
      logger.info({
        message: `Started processing job ${job.id} for ${staffName}`,
        service: 'StaffPostingWorker',
        jobData: job.data,
      });

      // Verify current school
      console.log(`2️⃣  Validating destination school ${currentSchoolId}...`);
      currentSchool = await schoolService.filterSchool({ _id: currentSchoolId });
      if (!currentSchool) {
        throw new Error(`Current school with ID ${currentSchoolId} not found`);
      }
      console.log(`   ✅ Destination school: ${currentSchool.nameOfSchool}`);

      // Verify previous school if provided
      if (previousSchoolId) {
        console.log(`3️⃣  Validating source school ${previousSchoolId}...`);
        previousSchool = await schoolService.filterSchool({ _id: previousSchoolId });
        if (!previousSchool) {
          throw new Error(`Previous school with ID ${previousSchoolId} not found`);
        }
        console.log(`   ✅ Source school: ${previousSchool.nameOfSchool}`);
      } else {
        console.log(`3️⃣  No previous school specified (new posting)`);
      }

      // Update staff posting
      console.log(`4️⃣  Updating staff posting...`);
      const updatedSchool = await updateExistingStaff(
        staffId,
        currentSchoolId,
        previousSchoolId || '',
        cadre,
        userService,
        schoolService,
        postingReportService
      );

      logger.info({
        message: `Successfully processed posting for staff ${staffName} to school ${currentSchool.nameOfSchool}`,
        service: 'StaffPostingWorker',
        jobId: job.id,
      });

      console.log(`\n✅ Job ${job.id} completed successfully!`);
      console.log(`   Staff: ${getStaffFullName(staff)}`);
      console.log(`   From: ${previousSchool?.nameOfSchool || 'N/A'}`);
      console.log(`   To: ${currentSchool.nameOfSchool}`);
      console.log(`${'='.repeat(80)}\n`);
      
      return { 
        status: 'success', 
        staffId, 
        staffName,
        currentSchoolId, 
        updatedSchool 
      };

    } catch (error: any) {
      // Comprehensive error logging
      const failedStaffName = staff?.staffName?.firstName || 'Unknown Staff';
      const failedPreviousSchoolName = previousSchool?.nameOfSchool || 'N/A';
      const failedNewSchoolName = currentSchool?.nameOfSchool || 'Unknown New School';

      const failedPostingInfo: FailedPosting = {
        staffId,
        staffName: failedStaffName,
        previousSchool: failedPreviousSchoolName,
        newSchool: failedNewSchoolName,
        error: error.message,
        timestamp: new Date()
      };

      // Track failed posting
      failedPostings.push(failedPostingInfo);

      console.error(`\n${'❌'.repeat(40)}`);
      console.error(`❌ FAILED POSTING:`);
      console.error(`   Job ID: ${job.id}`);
      console.error(`   Staff: ${failedStaffName}`);
      console.error(`   From: ${failedPreviousSchoolName}`);
      console.error(`   To: ${failedNewSchoolName}`);
      console.error(`   Error: ${error.message}`);
      console.error(`   Time: ${new Date().toISOString()}`);
      console.error(`${'❌'.repeat(40)}\n`);

      // Create failed posting report
      try {
        const staffFullName = getStaffFullName(staff);

        const failedPostingReportData = {
          staffDetails: staffFullName,
          sourceSchool: failedPreviousSchoolName,
          destinationSchool: failedNewSchoolName,
          dateOfPreviousSchoolPosting: staff?.dateOfPresentSchoolPosting || null,
          dateOfNewSchoolPosting: new Date(),
          previousPosition: staff?.position || null,
          newPosition: staff?.position || null,
          staleOrNew: 'failed',
          ModificationNotes: [{
            note: `Failed: ${error.message}`,
            date: new Date()
          }]
        };

        await postingReportService.createPostingReport(failedPostingReportData);
        console.log('✅ Failed posting report logged to database');
      } catch (reportError: any) {
        console.error('⚠️  Could not log failed posting report:', reportError.message);
      }

      logger.error({
        message: `Error processing job ${job.id}: ${failedStaffName} from ${failedPreviousSchoolName} to ${failedNewSchoolName}`,
        service: 'StaffPostingWorker',
        error: error.message,
        stack: error.stack,
        jobData: job.data,
        failedPosting: failedPostingInfo
      });

      throw error;
    }
  },
  {
    connection: redisClient,
    concurrency: 5,
    limiter: {
      max: 100,
      duration: 60000,
    },
  }
);

// Worker event handlers
worker.on('completed', (job: Job) => {
  console.log(`✅ Job ${job.id} completed successfully`);
  logger.info({
    message: `Job completed: ${job.id}`,
    service: 'StaffPostingWorker',
    returnValue: job.returnvalue,
  });
});

worker.on('failed', async (job: Job | undefined, err: Error) => {
  if (!job) {
    console.error(`❌ Job failed but job object is undefined: ${err.message}`);
    return;
  }

  try {
    await mongoConnectPromise;
    
    const userService = new UserService();
    const schoolService = new SchoolService();
    
    const failedUser = job.data?.staffId 
      ? await userService.filterUser({ _id: job.data.staffId }).catch(() => null)
      : null;
      
    const failedPreviousSchool = job.data?.previousSchoolId 
      ? await schoolService.filterSchool({ _id: job.data.previousSchoolId }).catch(() => null)
      : null;
      
    const failedNewSchool = job.data?.currentSchoolId
      ? await schoolService.filterSchool({ _id: job.data.currentSchoolId }).catch(() => null)
      : null;

    const failedStaffName = failedUser?.staffName?.firstName || 'Unknown';
    const fromSchool = failedPreviousSchool?.nameOfSchool || 'N/A';
    const toSchool = failedNewSchool?.nameOfSchool || 'Unknown';

    console.error(`\n❌❌❌ JOB FAILED (Event Handler) ❌❌❌`);
    console.error(`   Job ID: ${job.id}`);
    console.error(`   Staff: ${failedStaffName}`);
    console.error(`   From: ${fromSchool}`);
    console.error(`   To: ${toSchool}`);
    console.error(`   Error: ${err.message}\n`);

    logger.error({
      message: `Job failed: ${job.id} - ${failedStaffName} from ${fromSchool} to ${toSchool}`,
      service: 'StaffPostingWorker',
      error: err.message,
      jobData: job.data,
    });
  } catch (logError: any) {
    console.error(`⚠️  Error in failed event handler: ${logError.message}`);
  }
});

worker.on('error', (err: Error) => {
  console.error(`⚠️  Worker error: ${err.message}`);
  logger.error({
    message: 'Worker error',
    service: 'StaffPostingWorker',
    error: err.message,
  });
});

worker.on('active', (job: Job) => {
  console.log(`🔄 Job ${job.id} is now active and being processed`);
});

worker.on('ready', () => {
  console.log('✅ Worker is ready and listening for jobs');
});

worker.on('stalled', (jobId: string) => {
  console.log(`⚠️  Job ${jobId} has stalled`);
});

// Periodic summary logger
setInterval(() => {
  if (failedPostings.length > 0) {
    console.log(`\n📊 FAILED POSTINGS SUMMARY (${failedPostings.length} total):`);
    console.log('═══════════════════════════════════════════════════════════');
    
    failedPostings.forEach((posting, index) => {
      console.log(`\n${index + 1}. ${posting.staffName}`);
      console.log(`   From: ${posting.previousSchool}`);
      console.log(`   To: ${posting.newSchool}`);
      console.log(`   Error: ${posting.error}`);
      console.log(`   Time: ${posting.timestamp.toISOString()}`);
    });
    
    console.log('\n═══════════════════════════════════════════════════════════\n');
    
    logger.error({
      message: 'Failed postings summary',
      service: 'StaffPostingWorker',
      totalFailed: failedPostings.length,
      failedPostings: failedPostings
    });
  }
}, 60000); // Every 60 seconds

// Export failed postings function
function exportFailedPostings(): string | null {
  if (failedPostings.length === 0) {
    console.log('ℹ️  No failed postings to export');
    return null;
  }

  const timestamp = new Date().toISOString().replace(/:/g, '-').replace(/\./g, '-');
  const filename = `failed-postings-${timestamp}.json`;
  
  const exportData = {
    exportDate: new Date().toISOString(),
    totalFailed: failedPostings.length,
    failedPostings: failedPostings.map(p => ({
      staffName: p.staffName,
      from: p.previousSchool,
      to: p.newSchool,
      error: p.error,
      timestamp: p.timestamp
    }))
  };
  
  try {
    const logsDir = path.join(process.cwd(), 'logs');
    
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
    
    const exportPath = path.join(logsDir, filename);
    fs.writeFileSync(exportPath, JSON.stringify(exportData, null, 2), 'utf-8');
    
    console.log(`\n✅ Failed postings exported to: ${exportPath}\n`);
    return exportPath;
  } catch (err: any) {
    console.error(`❌ Failed to export failed postings: ${err.message}`);
    return null;
  }
}

// Graceful shutdown
async function gracefulShutdown(signal: string) {
  console.log(`\n⚠️  Worker: Received ${signal}, shutting down gracefully...`);
  
  try {
    // Export failed postings if any
    if (failedPostings.length > 0) {
      console.log(`\n⚠️  Found ${failedPostings.length} failed postings. Exporting...`);
      exportFailedPostings();
    }
    
    // Close worker
    console.log('🔄 Closing worker...');
    await worker.close();
    
    // Close MongoDB connection
    console.log('🔄 Closing MongoDB connection...');
    await mongoose.connection.close();
    
    // Close Redis connection
    console.log('🔄 Closing Redis connection...');
    await redisClient.quit();
    
    console.log('✅ Graceful shutdown complete');
    process.exit(0);
  } catch (err: any) {
    console.error(`❌ Error during shutdown: ${err.message}`);
    process.exit(1);
  }
}

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

// Handle uncaught errors
process.on('uncaughtException', (err) => {
  console.error('❌ Uncaught Exception:', err);
  logger.error({
    message: 'Uncaught Exception',
    service: 'StaffPostingWorker',
    error: err.message,
    stack: err.stack
  });
  gracefulShutdown('uncaughtException');
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
  logger.error({
    message: 'Unhandled Rejection',
    service: 'StaffPostingWorker',
    reason: String(reason)
  });
});

// Start worker
async function startWorker() {
  try {
    console.log('\n🚀 Starting Staff Posting Worker...\n');
    
    // Test Redis connection first
    const redisConnected = await testRedisConnection();
    if (!redisConnected) {
      console.error('❌ Cannot start worker without Redis connection');
      console.error('\n💡 Quick fix:');
      console.error('   1. Start Redis: redis-server');
      console.error('   2. Or with Docker: docker run -d -p 6379:6379 redis:latest');
      console.error('   3. Verify .env has REDIS_HOST and REDIS_PORT\n');
      process.exit(1);
    }

    // Connect to MongoDB
    await mongoConnectPromise;
    console.log('✅ Worker: MongoDB connected successfully');
    
    // Verify worker is running
    console.log('✅ Worker: Started processing staff posting jobs');
    console.log(`🔍 Worker: Listening to queue "staffPostingQueue" on Redis`);

    const isRunning = await worker.isRunning();
    console.log(`🔍 Worker running status: ${isRunning}`);

    const queueHealth = await redisClient.ping();
    console.log(`✅ Redis connection health: ${queueHealth}`);

    console.log('\n⏳ Worker process is active and listening for jobs...');
    console.log('   Press Ctrl+C to stop gracefully\n');
    console.log(`${'='.repeat(80)}\n`);

    // Heartbeat
    setInterval(() => {
      const timestamp = new Date().toISOString();
      console.log(`💓 Worker heartbeat - ${timestamp} - Waiting for jobs...`);
    }, 30000); // Every 30 seconds
  } catch (err: any) {
    console.error(`❌ Worker startup failed: ${err.message}`);
    console.error('Stack:', err.stack);
    process.exit(1);
  }
}

// Start the worker
startWorker();