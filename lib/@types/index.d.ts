import { Express } from 'express-serve-static-core';
import { ISchools } from '../modules/schools/model';
import {IUser} from '../modules/users/model'
declare module 'express-serve-static-core' {
  interface Request {
    user?: IUser;
    school?: ISchools;
  }
}
