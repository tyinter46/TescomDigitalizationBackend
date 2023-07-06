import dotenv from 'dotenv';
import passport from 'passport';
import CryptoJS from 'crypto-js';
import LocalStrategy from 'passport-local';
import UserService from '../modules/users/service'
import {IUser} from '../modules/users/model'
import { AccountSourceEnum, AccountStatusEnum } from 'utils/enums';
import logger from './logger';

dotenv.config();

const userService = new UserService();

passport.use(
    new LocalStrategy.Strategy((username:string, password: string, done: any)=>{
        userService.filterUser(
            {ogNumber: username},
            (err: any, user: IUser | null)=>{
                if (!user || err){
                    return done(err, false, {message: `Error or user with ${username} does not exist`});

                } 
                if (!user.password) return;
                const hashedPassword = CryptoJS.AES.decrypt(user.password!, process.env.CRYPTO_JS_PASS_SEC);
                const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8)
                if (!(password == originalPassword)){
                    return done(err, false, {message: `Wrong credentials`})
                }
                return done(null, user)
            },
            true
        )
    })
)
        

    passport.serializeUser(async function (user: IUser, done: any){
        done(null, {id: user._id});

    })

    passport.deserializeUser(async function (id: unknown, done : any){
        userService.filterUser({_id:id}, (err: any, user: IUser)=>{
            if (err){
                logger.error('Passport serialization error', err);
            }
            done(err, user);
        })

    })

