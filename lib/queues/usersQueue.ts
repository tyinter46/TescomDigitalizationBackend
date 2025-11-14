import {Queue} from 'bullmq';
import { redisClient } from '../config/ioRedis';

const connection = redisClient;
export const staffPostingQueue = new Queue('staffPostingQueue', {connection});
//   export const usersQueue = new Queue('usersQueue', { connection });


// (async () => {
//   await staffPostingQueue.addBulk( [
//     {
//       name: "staff-posting",
//       data: {
//         staffId: '675ff81d3f8a0725f567461e',
//         currentSchoolId: '66a6382ea19cd9ad1a0b26c4',
//         previousSchoolId: '66a6382ea19cd9ad1a0b26c4',
//       },
//     },
//     {
//       name: "staff-posting",
//       data: {
//         staffId: '67c043c67733df530dbdaacf',
//         currentSchoolId: '66a6382ea19cd9ad1a0b26c4',
//         previousSchoolId: '6913285cfc8c031344b01094',
//       },
//     }
//   ]);
//   console.log('Test job added');

// })();