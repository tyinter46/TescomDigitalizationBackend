import { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import { redisClient } from '../config/ioRedis';

export class CommonRoutes {
  public route(app: Application) {
    /**
     * Health check endpoint for Kubernetes probes
     */
    app.get('/api/health', async (req: Request, res: Response) => {
      const health = {
        status: 'ok',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        checks: {
          database: 'unknown',
          redis: 'unknown',
        },
      };

      // Check MongoDB connection
      try {
        if (mongoose.connection.readyState === 1) {
          health.checks.database = 'connected';
        } else {
          health.checks.database = 'disconnected';
          health.status = 'degraded';
        }
      } catch (error) {
        health.checks.database = 'error';
        health.status = 'degraded';
      }

      // Check Redis connection
      try {
        const pingResult = await redisClient.ping();
        if (pingResult === 'PONG') {
          health.checks.redis = 'connected';
        } else {
          health.checks.redis = 'disconnected';
          health.status = 'degraded';
        }
      } catch (error) {
        health.checks.redis = 'error';
        health.status = 'degraded';
      }

      const statusCode = health.status === 'ok' ? 200 : 503;
      res.status(statusCode).json(health);
    });

    /**
     * Mismatch URL
     */
    app.all('*', (req: Request, res: Response) => {
      console.log(req.path);
      res.status(404).send({
        STATUS: 'FAILURE',
        MESSAGE: 'Invalid URL. Check your URL and try again.',
      });
    });
  }
}
