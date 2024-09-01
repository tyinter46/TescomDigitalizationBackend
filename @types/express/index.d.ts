import { Express } from 'express-serve-static-core';
import {IUser} from '../../lib/modules/users/model'



declare module 'express-serve-static-core' {
  interface Request {
    user?: IUser;
  }
}
