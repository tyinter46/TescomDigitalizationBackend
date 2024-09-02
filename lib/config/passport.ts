import dotenv from 'dotenv';
import passport from 'passport';
import cryptoJs from 'crypto-js';
import LocalStrategy from 'passport-local';
import UserService from '../modules/users/service';
import { IUser } from '../modules/users/model';
import { AccountStatusEnum } from '../utils/enums';
import logger from './logger';

dotenv.config();
const userService = new UserService();
passport.use(
  new LocalStrategy.Strategy(
    { usernameField: 'ogNumber', passwordField: 'password' },
    async function (ogNumber: string, password: string, done: any) {
      userService.filterUser(
        { ogNumber: ogNumber },
        (err: any, user: IUser) => {
          if (err) {
            return done(err, false, { message: 'Error occurred while finding the user' });
          }

          if (!user) {
            return done(null, false, { message: `User with ${ogNumber} does not exist` });
          }

          if (!user.password) {
            return done(null, false, { message: 'User password is missing' });
          }

          try {
            const databasePassword = user.password;

            const hashedPassword = cryptoJs.AES.decrypt(
              databasePassword,
              process.env.CRYPTO_JS_PASS_SEC
            ).toString(cryptoJs.enc.Utf8);

            if (password == hashedPassword) {
              return done(null, user);
            } else {
              return done(err, false, {
                message: 'Kindly verify the correctness of your OG-Number or Password',
              });
            }
          } catch (decryptionError) {
            return done(decryptionError, false, { message: 'Error during password decryption' });
          }
        },
        true
      );
    }
  )
);

passport.serializeUser(async function (user: IUser, done: any) {
  done(null, { _id: user._id });
});

passport.deserializeUser(async function (id: unknown, done: any) {
  userService.filterUser({ _id: id }, (err: any, user: IUser) => {
    if (err) {
      logger.error('Passport serialization error', err);
    }
    done(err, user);
  });
});
