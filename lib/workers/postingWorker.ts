import dotenv from 'dotenv';
dotenv.config();

import { Worker } from 'bullmq';
import mongoose from 'mongoose';
import { redisClient } from '../config/ioRedis';
import { StaffPostingController } from '../controllers/nonTeachingStaffController'; // adjust path
import { ISchools } from '../modules/schools/model';
import CommonService from 'modules/common/service';
import { Response } from 'express';

mongoose.set('strictQuery', false);
mongoose.set('bufferCommands', false);

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
} as any);

mongoose.connection.on('connected', () => console.log('Worker: MongoDB connected'));
mongoose.connection.on('error', (err) => console.error(`MongoDB error: ${err.message}`));

// Import your modules
import {SchoolsController} from '../controllers/schoolsController'; // adjust path
import '../modules/schools/schema';
import UserService from '../modules/users/service';


const staffPostingController = new StaffPostingController();

export const staffPostingWorker = new Worker(
  'staffPostingQueue',
  async (job, ) => {
    await mongoConnectPromise;

    const { updates } = job.data as {
      updates: {
        schoolId: string;
        previousSchoolId?: string;
        nameOfSchool?: string;
        category?: string;
        address?: string;
        location?: string;
        zone?: string;
        division?: string;
        latitude?: number;
        longitude?: number;
        staff?: any; // could be IUser or string
        cadre?: string;
      }[];
    };

    if (!Array.isArray(updates) || updates.length === 0) {
      throw new Error('Invalid job data: "updates" must be a non-empty array');
    }

    const results = [];

    for (const update of updates) {
      const {
        schoolId,
        previousSchoolId,
        nameOfSchool,
        category,
        address,
        location,
        zone,
        division,
        latitude,
        longitude,
        staff,
        cadre,
      } = update;

      try {
        console.log(`Processing school ${schoolId}`);

        // Prepare school update data
        const updateData: Partial<ISchools> = {};
        if (nameOfSchool) updateData.nameOfSchool = nameOfSchool;
        if (category) updateData.category = category;
        if (address !== undefined) updateData.address = address;
        if (location) updateData.location = location;
        if (zone) updateData.zone = zone;
        if (division) updateData.division = division;
   

        // Fetch current school
        const currentSchool = await staffPostingController.schoolsService.filterSchool({ _id: schoolId });
        if (!currentSchool) {
          results.push({ schoolId, status: 'failed', error: 'School not found' });
          continue;
        }

        // Ensure staff list is unique
        const makeStaffListUnique = (staffList) => {
          const seen = new Set();
          return staffList.filter((s) => {
            const id = s.toString();
            return id && !seen.has(id) && seen.add(id);
          });
        };

        let currentStaffList = currentSchool.listOfStaff || [];
        if (currentStaffList.length > 0) {
          updateData.listOfStaff = makeStaffListUnique(currentStaffList);
          await staffPostingController.schoolsService.updateSchool({ _id: schoolId }, updateData);
        }

        // Update staff if provided
        let updatedSchool;
        if (staff) {
          updatedSchool = await staffPostingController.updateExistingStaff(
            staff,
            schoolId,
            previousSchoolId || '',
            cadre || ''
          );
         
        }

        results.push({ schoolId, status: 'success', updatedSchool });
        console.log(results)
        // CommonService.successResponse("Susseccfully processed", results, res )
      } catch (err: any) {
        console.error(`❌ Error processing school ${schoolId}:`, err.message);
        results.push({ schoolId, status: 'failed', error: err.message });
      }
    }

    return results;
  },
  { connection: redisClient, concurrency: 3 }
);

staffPostingWorker.on('completed', (job) => {
  console.log(`✅ Job ${job.id} completed:`, job.returnvalue);
});

staffPostingWorker.on('failed', (job, err) => {
  console.error(`❌ Job ${job?.id} failed:`, err);
});
