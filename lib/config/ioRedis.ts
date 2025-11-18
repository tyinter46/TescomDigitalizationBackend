import IORedis from 'ioredis';
import { Queue, Worker } from 'bullmq';

const connection = process.env.REDIS_URL
  ? new IORedis(process.env.REDIS_URL, {
      maxRetriesPerRequest: null,
      db: 1,
    })
  : new IORedis({
      host: process.env.REDIS_HOST || 'redis',
      port: Number(process.env.REDIS_PORT) || 6379,
      maxRetriesPerRequest: null,
      db: 1,
    });

console.log('Connecting to Redis using REDIS_URL:', process.env.REDIS_URL || 'host/port');

// This is the magic part:
connection.on('error', (err) => {
  console.error('Redis connection error:', err);
});

// Export a promise that resolves when Redis is ready
export const redisReady = connection.status === 'ready'
  ? Promise.resolve(connection)
  : new Promise((resolve, reject) => {
      connection.once('ready', () => resolve(connection));
      connection.once('error', reject);
    });

// Now export queues ONLY after it's ready
export const getQueue = async (name: string) => {
  await redisReady;                     // ← this line saves your life
  return new Queue(name, { connection });
};

export const getWorker = async (name: string, processor: any) => {
  await redisReady;
  return new Worker(name, processor, { connection });
};

// Export connection for direct access (backward compatibility)
export const redisClient = connection;