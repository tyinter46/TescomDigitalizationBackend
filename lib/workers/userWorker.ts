import { Worker } from 'bullmq';
import { redisClient } from '../config/ioRedis';
import UserService from '../modules/users/service';
import { IUser } from '../modules/users/model';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
// Ensure the 'schools' model is registered in this worker process
import '../modules/schools/schema';

dotenv.config();

mongoose.set('strictQuery', false);
mongoose.set('bufferCommands', false);

const mongoUri = process.env.MONGO_DB_URI;
if (!mongoUri || mongoUri.trim().length === 0) {
  console.error('Worker: MONGO_DB_URI is not set. Aborting.');
  process.exit(1);
}

const mongoConnectPromise = (mongoose as any).connect(mongoUri, {
  serverSelectionTimeoutMS: 10000,
  connectTimeoutMS: 10000,
  socketTimeoutMS: 45000,
  maxPoolSize: 5,
  heartbeatFrequencyMS: 10000,
  family: 4,
} as any);

mongoose.connection.on('connected', () => {
  console.log('Worker: MongoDB connection established');
});
mongoose.connection.on('error', (err) => {
  console.error(`Worker: MongoDB connection error: ${err.message}`);
});

export const userWorker = new Worker(
  'usersQueue',
  async (job) => {
    // Ensure DB is ready before any model queries
    await mongoConnectPromise;

    // Instantiate after connection to avoid buffering timeouts
    const userService = new UserService();

    const { ogNumbers } = job.data as { ogNumbers: string[] };
    console.log('Worker received job with OG numbers:', ogNumbers);

    if (!Array.isArray(ogNumbers) || ogNumbers.length === 0) {
      throw new Error('Invalid job data: ogNumbers must be a non-empty array');
    }

    for (const ogNumber of ogNumbers) {
      try {
        const query = userService.filterUser({  ogNumber } as any, undefined);
        const userData = (await (query as any).exec()) as IUser | null;
        console.log('User Data from Worker:', userData?.staffName?.firstName || 'UNKNOWN');

        const displayName = userData?.staffName?.firstName ?? 'Unknown';
        console.log(`Processing user: ${displayName}`);
      } catch (error) {
        console.error(`Error processing user with OG number ${ogNumber}:`, error);
      }
    }

    return { processed: ogNumbers.length };
  },
  { connection: redisClient, concurrency: 3 }
);

userWorker.on('completed', (job) => {
  console.log(`Job ${job.id} completed with result:`, job.returnvalue);
});

userWorker.on('failed', (job, err) => {
  console.error(`Job ${job?.id} failed:`, err);
});