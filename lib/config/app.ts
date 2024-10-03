import dotenv from 'dotenv';
import express, { Application } from 'express';
import cors from 'cors';
import { config } from './config';
import enviroment from '../enviroment';
import mongoose from 'mongoose';
import passport from 'passport';
import helmet from 'helmet';
import logger from './logger';
import { CommonRoutes } from '../routes/commonRoutes';
import { AuthRoutes } from '../routes/authRoutes';
import { UserRoutes } from '../routes/userRoutes';
import { UploadRoutes } from '../routes/uploadRoutes';
import { schoolRoutes } from '../routes/schoolRoutes';
import { PostingsReportRoutes } from '../routes/postingReportRoutes';
import { session } from './session';
import { ExistingStaffRoutes } from '../routes/existingStaffRoutes';
import './passport';
dotenv.config();

class App {
  public app: Application;

  public mongoUrl = process.env.MONGO_DB_URI;

  // process.env.NODE_ENV === 'development'
  //   ? `mongodb://127.0.0.1/${enviroment.getDbName()}`
  //   : process.env.MONGO_DB_URI;

  private authRoutes: AuthRoutes = new AuthRoutes();
  private userRoutes: UserRoutes = new UserRoutes();
  private uploadRoutes: UploadRoutes = new UploadRoutes();
  private existingStaffRoutes: ExistingStaffRoutes = new ExistingStaffRoutes();
  private schoolRoutes: schoolRoutes = new schoolRoutes();
  private postingReportRoutes: PostingsReportRoutes = new PostingsReportRoutes();
  private commonRoutes: CommonRoutes = new CommonRoutes();

  constructor() {
    this.app = express();
    this.config();
    this.mongoSetup();

    //every other routes must come above the common routes
    this.authRoutes.route(this.app);
    this.userRoutes.route(this.app);
    this.uploadRoutes.route(this.app);
    this.existingStaffRoutes.route(this.app);
    this.schoolRoutes.route(this.app);
    this.postingReportRoutes.route(this.app);
    this.commonRoutes.route(this.app);
  }
  private config(): void {
    this.app.use(helmet.hsts());
    this.app.use(
      cors({
        origin:
          process.env.NODE_ENV !== 'development'
            ? process.env.PROD_CLIENT_BASE_URL
            : 'http://localhost:3000',
        methods: 'GET,POST,PUT,DELETE,PATCH',
        credentials: true,
      })
    );
    if (config.trustProxy) {
      this.app.set('trust proxy', config.trustProxy);
    }
    this.app.disable('etag');
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(session);

    this.app.use(passport.initialize());
    this.app.use(passport.session());
    this.app.use(function (req, res, next) {
      const _send = res.send;
      let sent = false;
      res.send = function (data) {
        if (sent) return;
        _send.bind(res)(data);
        sent = true;
      } as any;
      next();
    });
  }

  private mongoSetup(): void {
    mongoose
      .set('strictQuery', false)
      .connect(this.mongoUrl)
      .then(() => {
        logger.info('Mongo Server Connected Successfully');
      })
      .catch((err) => {
        logger.error(err, 'there is an error connecting', err.message);
      });
  }
}
export const PORT = process.env.PORT || enviroment.getPort();
export const ClientBaseUrl =
  process.env.NODE_ENV !== 'development'
    ? process.env.PROD_CLIENT_BASE_URL
    : 'http://localhost:3000';

export default new App().app;
