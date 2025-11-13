import {Queue} from 'bullmq';
import IORedis from 'ioredis'; 
import { redisClient } from '../config/ioRedis';

const connection = redisClient
export const usersQueue = new Queue('usersQueue', { connection });
export const staffPostingQueue = new Queue('staffPostingQueue', {connection})

// (async () => {
//   await usersQueue.add('check-users', {
//     ogNumbers: ['48720', '12345']
//   });
//   console.log('Test job added');

// })();