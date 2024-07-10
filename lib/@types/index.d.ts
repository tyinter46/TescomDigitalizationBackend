import { Express } from 'express-serve-static-core';

interface User {
  id?: string;
  staffName?: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  ogNumber?: string;
  isAdmin?: boolean;
}

declare module 'express-serve-static-core' {
  interface Request {
    user?: User;
  }
}
