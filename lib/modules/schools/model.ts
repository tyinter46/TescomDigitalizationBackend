import { IUser } from '../users/model';

export interface ISchools {
    _id?: string;
    nameOfSchool: string;
    category: string;
    address: string;
    location: string;
    zone: string;
    division: string;
    listOfStaff: IUser [];
    principal: IUser;
    vicePrincipalAdmin: IUser;
    vicePrincipalAcademics: IUser;
    latitude: string;
    longitude: string;
  }