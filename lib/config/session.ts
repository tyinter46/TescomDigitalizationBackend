import expressSession from 'express-session';
import { createClient } from 'redis';
import dotenv from 'dotenv';
import RedisStore from 'connect-redis';
import { redisClient } from './ioRedis';

dotenv.config();

// const redisClient = createClient({
//   socket: {
//     host: process.env.REDIS_HOST,
//     port: parseInt(process.env.REDIS_PORT),
//   },
//   password: process.env.REDIS_PASSWORD,
// });

// redisClient.connect();

const redisStore = new RedisStore({
  client: redisClient,
});

export const session = expressSession({
  secret: process.env.SESSION_SECRET,
  name: 'tescom-cookie-session',
  resave: false,
  saveUninitialized: true,
  store: redisStore,
  cookie: {
    // secure: true,
    httpOnly: true,
    maxAge: 14 * 24 * 60 * 60 * 1000, // Expire after 14 days since last request from user
  },
});
