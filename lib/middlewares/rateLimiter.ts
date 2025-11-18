import { Request, Response, NextFunction } from 'express';
import { RateLimiterRedis } from 'rate-limiter-flexible';
import { redisClient } from '../config/ioRedis';
import CommonService from '../modules/common/service';
import logger from '../config/logger';

// Create rate limiters with different rules for different endpoints
const createRateLimiter = (points: number, duration: number, keyPrefix: string) => {
  return new RateLimiterRedis({
    storeClient: redisClient,
    keyPrefix,
    points, // Number of requests
    duration, // Per duration in seconds
    blockDuration: 60, // Block for 60 seconds if limit exceeded
  });
};

// General API rate limiter: 100 requests per minute per IP
export const generalRateLimiter = createRateLimiter(100, 60, 'rl:general');

// Login rate limiter: 5 login attempts per 15 minutes per IP
export const loginRateLimiter = createRateLimiter(20, 900, 'rl:login');

// Download rate limiter: 10 downloads per minute per user
export const downloadRateLimiter = createRateLimiter(10, 60, 'rl:download');

// Password reset rate limiter: 3 attempts per hour per IP
export const passwordResetRateLimiter = createRateLimiter(3, 3600, 'rl:password-reset');

// CSV upload rate limiter: 5 uploads per hour per IP
export const csvUploadRateLimiter = createRateLimiter(5, 3600, 'rl:csv-upload');

// Middleware wrapper for rate limiters
export const rateLimitMiddleware = (limiter: RateLimiterRedis) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Use IP address as the key, or user ID if authenticated
      const key = (req.user as any)?._id?.toString() || req.ip || req.socket.remoteAddress || 'unknown';
      
      await limiter.consume(key);
      next();
    } catch (rejRes: any) {
      const remainingTime = Math.round(rejRes.msBeforeNext / 1000) || 60;
      logger.warn({
        message: `Rate limit exceeded for ${req.ip} on ${req.path}`,
        service: 'RateLimiter',
        remainingTime,
      });
      
      res.status(429).json({
        STATUS: 'FAILURE',
        MESSAGE: `Too many requests. Please try again in ${remainingTime} seconds.`,
        DATA: { retryAfter: remainingTime },
      });
      return;
    }
  };
};

// Special rate limiter for login that uses IP + ogNumber combination
export const loginRateLimitMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const ip = req.ip || req.socket.remoteAddress || 'unknown';
    const ogNumber = req.body?.ogNumber || 'unknown';
    const key = `login:${ip}:${ogNumber}`;
    
    await loginRateLimiter.consume(key);
    next();
  } catch (rejRes: any) {
    const remainingTime = Math.round(rejRes.msBeforeNext / 1000) || 900;
    logger.warn({
      message: `Login rate limit exceeded for ${req.ip}`,
      service: 'RateLimiter',
      remainingTime,
    });
    
    res.status(429).json({
      STATUS: 'FAILURE',
      MESSAGE: `Too many login attempts. Please try again in ${Math.round(remainingTime / 60)} minutes.`,
      DATA: { retryAfter: remainingTime },
    });
    return;
  }
};

