import { IUser } from '../users/model';
import { ModificationNote } from '../common/model';

export interface ISchools {
  _id?: string;
  nameOfSchool: string;
  category: string;
  address: string;
  location: string;
  zone: string;
  division: string;
  listOfStaff: IUser[];
  principal: IUser | null;
  vicePrincipalAdmin: IUser | null;
  vicePrincipalAcademics: IUser | null;
  latitude: string;
  longitude: string;
  modificationNotes?: ModificationNote[];
}
