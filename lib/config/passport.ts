import dotenv from 'dotenv';
import passport from 'passport';
import CryptoJS from 'crypto-js';
import LocalStrategy from 'passport-local';
// import UserService from '../modules/users/service'
// import {IUser} from '../modules/users/model'
import { AccountSourceEnum, AccountStatusEnum } from 'utils/enums';
import logger from './logger';


