import {Worker} from 'bullmq';
import { redisClient } from '../config/ioRedis';
import UserService from '../modules/users/service';
import { IUser } from '../modules/users/model';

const userService = new UserService();

export const userWorker = new Worker('usersQueue', async (job) => {
  const { ogNumbers } = job.data;
  console.log('Worker received job with OG numbers:', ogNumbers);

  if (!ogNumbers || !Array.isArray(ogNumbers)) {
    throw new Error('Invalid job data');
  }

  for (const ogNumber of ogNumbers) {
  try {
    const user = await new Promise<IUser | null>((resolve, reject) => {
      userService.filterUser({ ogNumber }, (err: any, userData: IUser | null) => {
        if (err) return reject(err);
        console.log('User Data from Worker:', userData);
        resolve(userData);
      });
    });

    console.log(`Processing user: ${user?.staffName?.firstName || 'Unknown'}`);
  } catch (error) {
    console.error(`Error processing user with OG number ${ogNumber}:`, error);
  }
}
}, { connection: redisClient, concurrency: 3 });



userWorker.on('completed', job => {
  console.log(`Job ${job.id} completed with result:`, job.returnvalue);
});

userWorker.on('failed', (job, err) => {
  console.error(`Job ${job?.id} failed:`, err);
});
