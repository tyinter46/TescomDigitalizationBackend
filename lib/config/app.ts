import dotenv from 'dotenv';
import express, { Application } from 'express';
import cors from 'cors';
import enviroment from 'enviroment';
import mongoose from 'mongoose';
import expressSession from 'express-session';
import passport from 'passport';
import logger from './logger';
import './passport';

dotenv.config();

class App {
  public app: Application;
  public mongoUrl =
    process.env.NODE_ENV === 'development'
      ? `mongodb://127.0.0.1/${enviroment.getDbName()}`
      : process.env.MONGO_DB_URI;

      constructor (){
        this.app = express()
        this.config();
        this.mongoSetup()

        //every other routes must come above the common routes
        
      }
   private config(): void {
        this.app.use(
            cors({
                origin: process.env.NODE_ENV !== 'development' ? process.env.PROD_CLIENT_BASE_URL : 'http://localhost:3000',
                methods: 'GET,POST,PUT,DELETE,PATCH',
                credentials:true, 
            })
        )
            this.app.enable('trust proxy');
            this.app.disable('etag');
            this.app.use(express.json());
            this.app.use(express.urlencoded({extended: true}));
            this.app.use(
                expressSession({
                    secret: process.env.SESSION_SECRET,
                    resave: false,
                    saveUninitialized: true,
                    name: 'tsc-cookie-session',
                    cookie:
                    process.env.NODE_ENV === 'development' 

                    ? {}
                    : {secure: true, httpOnly: true, sameSite: 'strict', maxAge: 60 * 60 * 24 * 1000},
                })
            );
            
            this.app.use(passport.initialize());
            this.app.use(passport.session());
            this.app.use(function  (req, res, next) {
                const _send = res.send;
                let sent = false 
                res.send = function (data){
                    if (sent) return;
                    _send.bind(res)(data);
                    sent = true;
                } as any;
            })
           }

           private mongoSetup(): void {
             mongoose.set('strictQuery', false)
             .connect(this.mongoUrl)
             .then(() => {
                    logger.info('Server Connected Successfully');
                 }).catch((err)=> {
                    logger.error(err);
                 });
           }

                 

}
export const PORT = process.env.PORT || enviroment.getPort();
export const ClientBaseUrl = process.env.NODE_ENV !== 'development' ? process.env.PROD_CLIENT_BASE_URL : 'http://localhost:3000'


export default new App().app;