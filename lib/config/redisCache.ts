import { createClient, RedisClientType } from 'redis';
import logger from './logger';
import dotenv from 'dotenv';

dotenv.config();

class RedisCache {
  private client: RedisClientType;
  private ttl: number;
  private isClientReady: boolean;
  private redisClientOptions =
    process.env.NODE_ENV === 'development'
      ? {}
      : {
          socket: {
            host: process.env.REDIS_HOST,
            port: parseInt(process.env.REDIS_PORT),
          },
          password: process.env.REDIS_PASSWORD,
        };

  constructor(ttl: number) {
    (async () => {
      this.client = createClient(this.redisClientOptions);
      this.ttl = ttl;
      this.client.on('error', (err: any) => {
        logger.error({ message: err, service: 'Redis Client' });
        this.isClientReady = false;
      });
      this.client.on('ready', () => (this.isClientReady = true));
      await this.client.connect();
    })();
  }

  public async get<T>(key: string, callback: (err: boolean, val: T | null) => void) {
    if (this.isClientReady) {
      const data = await this.client.get(key);
      if (data) return callback(false, JSON.parse(data));
    }
    return callback(false, null);
  }

  public async set<T>(key: string, value: T, expT: number, callback: (err: boolean) => void) {
    if (this.isClientReady) {
      await this.client.setEx(key, expT ? expT : this.ttl, JSON.stringify(value));
      return callback(false);
    }
    return callback(false);
  }

  public async setApiData<T>(key: string, value: T, callback: (err: boolean) => void) {
    if (this.isClientReady) {
      await this.client.setEx(key, this.ttl, JSON.stringify(value));
      return callback(false);
    }
    return callback(false);
  }

  public async del(key: string, callback: (err: boolean) => void) {
    if (this.isClientReady) {
      await this.client.del(key);
      return callback(false);
    }
    return callback(false);
  }

  public async flush(callback: (err: boolean) => void) {
    if (this.isClientReady) {
      await this.client.flushAll();
      return callback(false);
    }
    return callback(false);
  }
}

export default new RedisCache(3600);
