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
//   // console.log(
//   //   `   ${key}: ${status} ${key.includes('SECRET') || key.includes('KEY') ? '' : displayValue}`
//   // );
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
// // console.log(`   Cloud Name: ${cloudinary.config().cloud_name}`);
// // console.log(`   API Key: ${cloudinary.config().api_key ? '***configured***' : '❌ not set'}`);
// // console.log(
// //   `   API Secret: ${cloudinary.config().api_secret ? '***configured***' : '❌ not set'}\n`
// // );

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
  
//   // Check Redis version - BullMQ requires Redis 5.0+
//   // try {
//   //   const info = await redisClient.info('server');
//   //   const versionMatch = info.match(/redis_version:([\d.]+)/);
//   //   if (versionMatch) {
//   //     const version = versionMatch[1];
//   //     const [major, minor] = version.split('.').map(Number);
//   //     console.log(`📊 Redis version detected: ${version}`);
      
//   //     if (major < 5) {
//   //       console.error(`\n❌ CRITICAL ERROR: Redis version ${version} is incompatible!`);
//   //       console.error('   BullMQ requires Redis 5.0.0 or higher.');
//   //       console.error('   Please upgrade your Redis server to version 5.0+ or connect to a compatible Redis instance.');
//   //       console.error(`   Current Redis host: ${process.env.REDIS_HOST}:${process.env.REDIS_PORT}\n`);
//   //       process.exit(1);
//   //     }
//   //   }
//   // } catch (err: any) {
//   //   console.warn(`⚠️  Could not check Redis version: ${err.message}`);
//   // }
// });

// redisClient.on('error', (err) => {
//   console.error('❌ Worker: Redis connection error:', err.message);
// });

// // Check if Redis is connected
// if (redisClient.status !== 'ready' && redisClient.status !== 'connect') {
//   console.log('⏳ Worker: Waiting for Redis connection...');
// }

// // Worker setup - FIXED: Use connection options instead of client instance
// const worker = new Worker(
//   'staffPostingQueue',
//   async (job: Job<StaffPostingJobData>) => {

//    const user = await  userService.filterUser({_id:job.data.staffId})
//     console.log(`Worker: Processing job ${job.id} for staff ${user} in  ${user.schoolOfPresentPosting} ${job.data.staffId}`);
//     logger.info({
//       message: `Started processing job ${job.id} ${user } `,
//       service: 'StaffPostingWorker',
//       jobData: job.data,
//     });

//     const { staffId, currentSchoolId, previousSchoolId, cadre } = job.data;

//     try {
//       // FIXED: Removed previousSchoolId from required validation since it's optional
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
//    const newSchool = await schoolService.filterSchool({_id:currentSchoolId})
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

//     // Ensure uniqueness of the staff list
//     const makeStaffListUnique = (staffList: any[]) => {
//       const seen = new Set();
//       return staffList.filter((staff: string) => {
//         const id = staff.toString();
//         return id && !seen.has(id) && seen.add(id);
//       });
//     };

//     if (!result.listOfStaff?.includes(staffId)) {
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

//     return result;
//   } catch (err: any) {
//     logger.error({ message: `Failed to update staff: ${err.message}`, service: 'updateStaff' });
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
//     logger.error({
//       message: `Failed to update existing staff: ${err.message}`,
//       service: 'updateExistingStaff',
//     });
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

//   const failedUserProcess = await userService.filterUser({_id:job.data.staffId})
//   const failedPreviousSchoolProcess = await schoolService.filterSchool({_id:job.data.previousSchoolId})
//   const failedNewSchoolProcess = await schoolService.filterSchool({_id:job.data.currentSchoolId})
  
//   failedProcesses.push(`${failedUserProcess.staffName.firstName} from ${failedPreviousSchoolProcess.nameOfSchool} to ${failedNewSchoolProcess.nameOfSchool}` )

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

// // ADDED: Listen for active event to confirm worker is ready
// worker.on('active', (job: Job) => {
//   console.log(`🔄 Job ${job.id} is now active and being processed`);
// });

// // ADDED: Listen for ready event
// worker.on('ready', () => {
//   console.log('✅ Worker is ready and listening for jobs');
// });

// // ADDED: Listen for stalled event
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

//     // CRITICAL: Check if worker is actually connected and ready
//     const isRunning = await worker.isRunning();
//     console.log(`🔍 Worker running status: ${isRunning}`);

//     // Check queue connection
//     const queueHealth = await redisClient.ping();
//     console.log(`✅ Redis connection health: ${queueHealth}`);

//     // Keep the process alive - this is CRITICAL
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


// CRITICAL: Load environment variables FIRST before any other imports
// CRITICAL: Load environment variables FIRST before any other imports
import dotenv from 'dotenv';
import path from 'path';

// Try to load .env from multiple possible locations
const possiblePaths = [
  path.resolve(process.cwd(), '.env'), // Project root
  path.resolve(__dirname, '../../.env'), // Two levels up from dist/workers
  path.resolve(__dirname, '../../../.env'), // Three levels up
  path.resolve(__dirname, '.env'), // Current directory
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
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_SECRET,
};

let hasAllVars = true;
for (const [key, value] of Object.entries(requiredEnvVars)) {
  const status = value ? '✅' : '❌ MISSING';
  const displayValue =
    key.includes('SECRET') || key.includes('KEY')
      ? value
        ? '***hidden***'
        : 'not set'
      : value || 'not set';
  if (!value) hasAllVars = false;
}

if (!hasAllVars) {
  console.error('\n❌ Missing required environment variables!');
  console.error(
    'Available env variables containing "CLOUD":',
    Object.keys(process.env).filter((k) => k.includes('CLOUD'))
  );
  console.error('\nWorker cannot proceed without all required environment variables.');
  process.exit(1);
}

console.log('\n✅ All required environment variables are present\n');

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

// CRITICAL: Explicitly configure Cloudinary for the worker process
import { v2 as cloudinary } from 'cloudinary';

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

mongoose.connection.on('connected', () => console.log('Worker: MongoDB connected'));
mongoose.connection.on('error', (err) => console.error(`MongoDB error: ${err.message}`));

// Initialize services
const userService = new UserService();
const schoolService = new SchoolService();
const postingReportService = new PostingReportService();

// Define the job data interface
interface StaffPostingJobData {
  staffId: string;
  currentSchoolId: string;
  previousSchoolId?: string;
  cadre: string;
}

console.log('Staff posting Worker initializing...');

// CRITICAL: Verify Redis connection and version before starting worker
redisClient.on('ready', async () => {
  console.log('✅ Worker: Redis connection ready');
});

redisClient.on('error', (err) => {
  console.error('❌ Worker: Redis connection error:', err.message);
});

// Check if Redis is connected
if (redisClient.status !== 'ready' && redisClient.status !== 'connect') {
  console.log('⏳ Worker: Waiting for Redis connection...');
}

// Worker setup
const worker = new Worker(
  'staffPostingQueue',
  async (job: Job<StaffPostingJobData>) => {

   const user = await  userService.filterUser({_id:job.data.staffId})
    console.log(`Worker: Processing job ${job.id} for staff ${user} in  ${user.schoolOfPresentPosting} ${job.data.staffId}`);
    logger.info({
      message: `Started processing job ${job.id} ${user } `,
      service: 'StaffPostingWorker',
      jobData: job.data,
    });

    const { staffId, currentSchoolId, previousSchoolId, cadre } = job.data;

    try {
      if (!staffId || !currentSchoolId) {
        throw new Error('Missing required fields: staffId or currentSchoolId');
      }

      console.log(`Worker: Validating staff ${staffId}...`);
      // Verify staff exists
      const staff = await userService.filterUser({ _id: staffId });
      if (!staff) {
        throw new Error(`Staff with ID ${staffId} not found`);
      }

      console.log(`Worker: Validating current school ${currentSchoolId}...`);
      // Verify current school exists
      const currentSchool = await schoolService.filterSchool({ _id: currentSchoolId });
      if (!currentSchool) {
        throw new Error(`Current school with ID ${currentSchoolId} not found`);
      }

      // Verify previous school exists if provided
      let previousSchool: ISchools | null = null;
      if (previousSchoolId) {
        console.log(`Worker: Validating previous school ${previousSchoolId}...`);
        previousSchool = await schoolService.filterSchool({ _id: previousSchoolId });
        if (!previousSchool) {
          throw new Error(`Previous school with ID ${previousSchoolId} not found`);
        }
      }

      console.log(`Worker: Updating staff posting...`);
      // Implement updateExistingStaff logic
      const updatedSchool = await updateExistingStaff(
        staffId,
        currentSchoolId,
        previousSchoolId || '',
        cadre
      );
      
      const newSchool = await schoolService.filterSchool({_id:currentSchoolId})
      
      // ✅ CORRECTED: Create posting report with actual names (string format)
      try {
        console.log('📝 Creating posting report log...');
        
        // Format staff name to match your pattern: "LASTNAME, Firstname Middlename."
        const staffFullName = `${staff.staffName.firstName}.`.trim();
        
        const postingReportData = {
          staffDetails: staffFullName, // ✅ String, not ObjectId
          sourceSchool: previousSchool ? previousSchool.nameOfSchool : null, // ✅ String, not ObjectId
          destinationSchool: currentSchool.nameOfSchool, // ✅ String, not ObjectId
          dateOfPreviousSchoolPosting: staff.dateOfPresentSchoolPosting || null,
          dateOfNewSchoolPosting: new Date(),
          previousPosition: staff.letters.postingLetter || null, // Adjust field name as needed
          newPosition: staff.position || null, // This might need to be updated if position changes
          staleOrNew: null, // You can add logic to determine this
          ModificationNotes: []
        };

        const postingReport = await postingReportService.createPostingReport(postingReportData);
        
        console.log(`✅ Posting report created: ${postingReport._id}`);
        logger.info({
          message: `Created posting report ${postingReport._id} for staff ${staffFullName}`,
          service: 'StaffPostingWorker',
          reportId: postingReport._id,
          staffName: staffFullName,
          sourceSchool: previousSchool?.nameOfSchool || 'N/A',
          destinationSchool: currentSchool.nameOfSchool,
        });
      } catch (reportError: any) {
        // Log the error but don't fail the entire job
        console.error('⚠️  Failed to create posting report:', reportError.message);
        logger.error({
          message: `Failed to create posting report for staff ${staffId}: ${reportError.message}`,
          service: 'StaffPostingWorker',
          stack: reportError.stack,
        });
        // Note: We continue execution even if report creation fails
      }

      logger.info({
        message: `Successfully processed posting for staff ${staffId} ${staff}  to school ${newSchool.nameOfSchool} ${currentSchoolId}`,
        service: 'StaffPostingWorker',
        jobId: job.id,
      });

      console.log(`Worker: Job ${job.id} completed successfully`);
      return { status: 'success', staffId, staff, currentSchoolId, updatedSchool };
    } catch (error: any) {
      const failedUserPosting = await userService.filterUser({_id:job.data.staffId})
      const failedPreviousSchool = await schoolService.filterSchool({_id:job.data.previousSchoolId})
      const failedNewSchool = await schoolService.filterSchool({_id:job.data.currentSchoolId})
      const failedPostings = []
      failedPostings.push(`${failedUserPosting.staffName.firstName} from ${failedPreviousSchool.nameOfSchool} to ${failedNewSchool.nameOfSchool}` )
      
      // ✅ CORRECTED: Create failed posting report with actual names
      try {
        console.log('📝 Creating failed posting report log...');
        
        const staffFullName = `${failedUserPosting.staffName.lastName.toUpperCase()}, ${failedUserPosting.staffName.firstName} ${failedUserPosting.staffName.middleName || ''}.`.trim();
        
        const failedPostingReportData = {
          staffDetails: staffFullName, // ✅ String, not ObjectId
          sourceSchool: failedPreviousSchool ? failedPreviousSchool.nameOfSchool : null, // ✅ String
          destinationSchool: failedNewSchool ? failedNewSchool.nameOfSchool : null, // ✅ String
          dateOfPreviousSchoolPosting: failedUserPosting.dateOfPresentSchoolPosting || null,
          dateOfNewSchoolPosting: new Date(),
          previousPosition: failedUserPosting.position || null,
          newPosition: failedUserPosting.position || null,
          staleOrNew: null,
          ModificationNotes: [{
            note: `Failed: ${error.message}`,
            date: new Date()
          }]
        };

        await postingReportService.createPostingReport(failedPostingReportData);
        console.log('✅ Failed posting report logged');
      } catch (reportError: any) {
        console.error('⚠️  Could not log failed posting report:', reportError.message);
      }

      logger.error({
        message: `Error processing job ${job.id}: ${error.message} ${failedPostings}`,
        service: 'StaffPostingWorker',
        stack: error.stack,
        jobData: job.data,
      });
      console.error(`Worker: Job ${job.id} failed:`, error.message);
      console.error(`Jobs ${failedPostings} failed`)
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

async function updateStaff(
  schoolId: string,
  staffId: any,
  cadre: string,
  previousSchoolId: string
): Promise<ISchools> {
  try {
    const result = await schoolService.filterSchool({ _id: schoolId });
    if (!result) {
      throw new Error(`School ${schoolId} not found`);
    }

    // ✅ CRITICAL FIX: Initialize listOfStaff if null/undefined
    if (!Array.isArray(result.listOfStaff)) {
      result.listOfStaff = [];
      logger.warn({
        message: `Initialized empty listOfStaff array for school ${schoolId}`,
        service: 'updateStaff',
        schoolId,
        schoolName: result.nameOfSchool
      });
      console.log(`⚠️  Warning: School ${schoolId} (${result.nameOfSchool}) had null/undefined listOfStaff - initialized as empty array`);
    }

    // Ensure uniqueness of the staff list
    const makeStaffListUnique = (staffList: any[]) => {
      const seen = new Set();
      return staffList.filter((staff: string) => {
        const id = staff.toString();
        return id && !seen.has(id) && seen.add(id);
      });
    };

    // Now safe to use includes and push
    if (!result.listOfStaff.includes(staffId)) {
      result.listOfStaff.push(staffId);
    }

    const uniqueStaffList = makeStaffListUnique(result.listOfStaff);
    await schoolService.updateSchool({ _id: schoolId }, { listOfStaff: uniqueStaffList });
    logger.info(`Updated school ${schoolId} with staff ${staffId}`);

    // Update user record
    const userUpdate = {
      schoolOfPreviousPosting: previousSchoolId || null,
      schoolOfPresentPosting: schoolId,
      cadre: cadre,
      dateOfPresentSchoolPosting: new Date().toISOString(),
    };

    const userData = await new Promise<IUser>((resolve, reject) => {
      userService.updateUser({ _id: staffId }, userUpdate, (err: any, updatedUser: IUser) => {
        if (err) {
          reject(new Error(`Failed to update user: ${updatedUser.staffName.firstName} ${err.message}`));
        } else {
          resolve(updatedUser);
        }
      });
    });

    // Generate and upload posting letter
    let pdfDownloadLink: string | null = null;
    try {
      console.log('📄 Generating posting letter...');
      console.log(`   Staff ID: ${staffId}`);
      console.log(`   Cloudinary configured: ${!!process.env.CLOUDINARY_API_KEY}`);

      pdfDownloadLink = await generateAndUploadStaffPostingLetter(userData._id);

      if (!pdfDownloadLink) {
        throw new Error('Failed to generate posting letter: No download link returned');
      }
      logger.info(`Generated posting letter for staff ${staffId}: ${pdfDownloadLink}`);
      console.log(`✅ Posting letter generated: ${pdfDownloadLink}`);
    } catch (letterError: any) {
      console.error('❌ Letter generation failed:', letterError.message);
      console.error('Stack:', letterError.stack);
      logger.error({
        message: `Failed to generate posting letter for staff ${staffId}: ${letterError.message}`,
        service: 'generateAndUploadStaffPostingLetter',
        stack: letterError.stack,
      });
      throw letterError;
    }

    // Update user with the posting letter link
    await new Promise<void>((resolve, reject) => {
      userService.updateUser(
        { _id: userData._id },
        { letters: { ...userData.letters, postingLetter: pdfDownloadLink } },
        (err: any) => {
          if (err) {
            reject(new Error(`Failed to update user with letter: ${err.message}`));
          } else {
            logger.info(`Updated user ${userData._id} with posting letter: ${pdfDownloadLink}`);
            resolve();
          }
        }
      );
    });

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

// Independent updateExistingStaff logic
async function updateExistingStaff(
  staffId: string,
  currentSchoolId: string,
  previousSchoolId: string,
  cadre: string
): Promise<ISchools> {
  try {
    // Find the school where the staff is currently assigned
    const existingSchool = await schoolService.filterSchool({ listOfStaff: staffId });
    if (existingSchool) {
      // ✅ DEFENSIVE: Ensure listOfStaff is an array before filtering
      if (!Array.isArray(existingSchool.listOfStaff)) {
        existingSchool.listOfStaff = [];
        logger.warn({
          message: `Existing school ${existingSchool._id} had null listOfStaff during removal`,
          service: 'updateExistingStaff',
          schoolId: existingSchool._id
        });
      }
      
      const updatedStaffList = existingSchool.listOfStaff.filter(
        (staff) => staff.toString() !== staffId.toString()
      );
      await schoolService.updateSchool(
        { _id: existingSchool._id },
        { listOfStaff: updatedStaffList }
      );
      logger.info(`Removed staff ${staffId} from existing school ${existingSchool._id}`);
    }

    // Update staff in the current school
    const updatedSchool = await updateStaff(currentSchoolId, staffId, cadre, previousSchoolId);
    return updatedSchool;
  } catch (err: any) {
    // ✅ Enhanced error context
    let errorContext = {
      message: `Failed to update existing staff: ${err.message}`,
      service: 'updateExistingStaff',
      staffId,
      currentSchoolId,
      previousSchoolId,
      cadre,
      error: err.message,
      stack: err.stack
    };

    // Try to get additional context without failing
    try {
      const staff = await userService.filterUser({ _id: staffId });
      const currentSchool = await schoolService.filterSchool({ _id: currentSchoolId });
      errorContext = {
        ...errorContext,
        staffName: staff?.staffName,
        currentSchoolName: currentSchool?.nameOfSchool
      } as any;
    } catch (contextErr) {
      // Context retrieval failed, but we still log the main error
    }

    logger.error(errorContext);
    throw new Error(`Failed to update existing staff: ${err.message}`);
  }
}

console.log('Staff posting Worker running');

// Handle worker events
worker.on('completed', (job: Job) => {
  console.log(`✅ Job ${job.id} completed successfully for staff ${job.data.staffId}`);
  logger.info({
    message: `Job completed: ${job.id}`,
    service: 'StaffPostingWorker',
    returnValue: job.returnvalue,
  });
});

worker.on('failed', async (job: Job | undefined, err: Error) => {
  const failedProcesses = []

  const failedUserProcess = await userService.filterUser({_id:job.data.staffId})
  const failedPreviousSchoolProcess = await schoolService.filterSchool({_id:job.data.previousSchoolId})
  const failedNewSchoolProcess = await schoolService.filterSchool({_id:job.data.currentSchoolId})
  
  failedProcesses.push(`${failedUserProcess.staffName.firstName} from ${failedPreviousSchoolProcess.nameOfSchool} to ${failedNewSchoolProcess.nameOfSchool}` )

  console.error(`❌ Job ${job?.id || 'unknown'} failed: ${failedProcesses} ${err.message}`);
  logger.error({
    message: `Job failed: ${job?.id || 'unknown'}  ${failedProcesses} `,
    service: 'StaffPostingWorker',
    error: err.message,
  });
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

// Graceful shutdown
process.on('SIGTERM', async () => {
  console.log('Worker: Received SIGTERM, closing...');
  await worker.close();
  await mongoose.connection.close();
  process.exit(0);
});

process.on('SIGINT', async () => {
  console.log('Worker: Received SIGINT, closing...');
  await worker.close();
  await mongoose.connection.close();
  process.exit(0);
});

// Start worker after MongoDB connection
mongoConnectPromise
  .then(async () => {
    console.log('✅ Worker: MongoDB connected successfully');
    console.log('✅ Worker: Started processing staff posting jobs');
    console.log(`🔍 Worker: Listening to queue "staffPostingQueue" on Redis`);

    const isRunning = await worker.isRunning();
    console.log(`🔍 Worker running status: ${isRunning}`);

    const queueHealth = await redisClient.ping();
    console.log(`✅ Redis connection health: ${queueHealth}`);

    console.log('⏳ Worker process will stay alive and listen for jobs...');
    console.log('   Press Ctrl+C to stop\n');

    // Optional: Set up a heartbeat to show worker is alive
    setInterval(() => {
      console.log(`💓 Worker heartbeat - ${new Date().toISOString()}`);
    }, 30000); // Every 30 seconds
  })
  .catch((err) => {
    console.error(`❌ Worker: Failed to connect to MongoDB: ${err.message}`);
    process.exit(1);
  });