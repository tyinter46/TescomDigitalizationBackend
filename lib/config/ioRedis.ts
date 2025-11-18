import IORedis, { RedisOptions } from 'ioredis';

// Helper to safely parse port with fallback
const getRedisPort = (): number => {
  const port = process.env.REDIS_PORT;
  if (!port) return 6379;

  const parsed = parseInt(port, 10);
  return isNaN(parsed) ? 6379 : parsed;
};

// Build connection options with safe defaults
const redisOptions: RedisOptions = {
  host: process.env.REDIS_HOST || 'redis',
  port: getRedisPort(),
  password: process.env.REDIS_PASSWORD || undefined, // ioredis treats undefined as "no password"
  db: 1,
  maxRetriesPerRequest: null,
  retryStrategy: (times) => {
    // Optional: nicer reconnect behavior
    if (times > 10) return null; // stop retrying after 10 attempts
    return Math.min(times * 500, 2000); // exponential back-off
  },
};

// If REDIS_URL is provided (recommended), use it directly and ignore host/port
let redisClient: IORedis;
if (process.env.REDIS_URL) {
  console.log('Connecting to Redis using REDIS_URL:', process.env.REDIS_URL);
  redisClient = new IORedis(process.env.REDIS_URL, {
    maxRetriesPerRequest: null,
    db: 1,
  });
} else {
  console.log(`Connecting to Redis at ${redisOptions.host}:${redisOptions.port}`);
  redisClient = new IORedis(redisOptions);
}

export { redisClient };