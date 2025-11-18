import IORedis from 'ioredis';
import { Queue, Worker } from 'bullmq';

const connection = process.env.REDIS_URL
  ? new IORedis(process.env.REDIS_URL, {
      maxRetriesPerRequest: null,
      db: 1,
      retryStrategy: (times) => {
        const delay = Math.min(times * 50, 2000);
        return delay;
      },
    })
  : new IORedis({
      host: process.env.REDIS_HOST || 'redis',
      port: Number(process.env.REDIS_PORT) || 6379,
      maxRetriesPerRequest: null,
      db: 1,
      retryStrategy: (times) => {
        const delay = Math.min(times * 50, 2000);
        return delay;
      },
    });

console.log('Connecting to Redis at', process.env.REDIS_URL || `${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`);

// Handle connection events
connection.on('connect', () => {
  console.log('✓ Redis connected successfully');
});

connection.on('ready', () => {
  console.log('✓ Redis is ready');
});

connection.on('error', (err) => {
  console.error('✗ Redis connection error:', err.message);
});

connection.on('close', () => {
  console.warn('⚠ Redis connection closed');
});

// Export a promise that resolves when Redis is ready
export const redisReady = new Promise<IORedis>((resolve, reject) => {
  if (connection.status === 'ready') {
    resolve(connection);
  } else {
    const timeout = setTimeout(() => {
      reject(new Error('Redis connection timeout after 10 seconds'));
    }, 10000);

    connection.once('ready', () => {
      clearTimeout(timeout);
      resolve(connection);
    });

    connection.once('error', (err) => {
      clearTimeout(timeout);
      reject(err);
    });
  }
});

// Now export queues ONLY after it's ready
export const getQueue = async (name: string) => {
  await redisReady;
  return new Queue(name, { connection });
};

export const getWorker = async (name: string, processor: any) => {
  await redisReady;
  return new Worker(name, processor, { connection });
};

// Export connection for direct access (backward compatibility)
export const redisClient = connection;