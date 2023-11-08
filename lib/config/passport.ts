import dotenv from 'dotenv';
import passport from 'passport';
import cryptoJS from 'crypto-js';
import LocalStrategy from 'passport-local';
import UserService from '../modules/users/service'
import {IUser} from '../modules/users/model'
import { AccountSourceEnum, AccountStatusEnum } from 'utils/enums';
import logger from './logger';



const userService = new UserService();
dotenv.config();
passport.use(
    new LocalStrategy.Strategy(
      { usernameField: 'ogNumber', passwordField: 'password' },
      async function (ogNumber: string, password: string, done: any) {
        userService.filterUser(
          { ogNumber: ogNumber },
          (err: any, user: IUser | null) => {
            user.password = "Password@123"
            if (err) {
              return done(err, false, { message: 'Error occurred while finding the user' });
            }
  
            if (!user) {
              return done(null, false, { message: `User with ${ogNumber} does not exist` });
            }
  
            if (!user.password) {
              console.log(user)
              return done(null, false, { message: 'User password is missing' });
            }
  
            try {
           
              const hashedPassword = cryptoJS.AES.decrypt(user.password, process.env.CRYPTO_JS_PASS_SEC);
              const originalPassword = hashedPassword.toString(cryptoJS.enc.Utf8);
              console.log(originalPassword.length)
            if (password === user.password) {
                console.log('Password matches.');
                return done(null, user);
              } else {
                console.log('Password does not match.');
                return done(null, false, { message: 'Incorrect password' });
              }
            } catch (decryptionError) {
              console.error('Error during decryption:', decryptionError);
              return done(decryptionError, false, { message: 'Error during password decryption' });
            }
          },
          true
        );
      }
    )
  );
  

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

