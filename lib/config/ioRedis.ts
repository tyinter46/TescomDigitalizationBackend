import IORedis from 'ioredis';

export const redisClient = new IORedis({   
  host: process.env.REDIS_HOST,
  port: parseInt(process.env.REDIS_PORT || '6380'),
  password: process.env.REDIS_PASSWORD,
    maxRetriesPerRequest: null, 
  db: 1,
});
