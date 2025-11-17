import IORedis from 'ioredis';

export const redisClient = new IORedis({
  host: process.env.NODE_ENV === "development" ? process.env.REDIS_HOST : 'redis',
  port: 6379,
  password: process.env.REDIS_PASSWORD,
  maxRetriesPerRequest: null,
  db: 1,
});
