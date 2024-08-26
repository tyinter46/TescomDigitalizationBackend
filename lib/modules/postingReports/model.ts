import { IUser } from '../users/model';
import { ModificationNote } from '../common/model';

export interface IPostingReport {
  _id?: string;
  staffDetails: IUser | null;
  sourceSchool: string;
  destinationSchool: string;
  dateOfPreviousSchoolPosting: Date;
  dateOfNewSchoolPosting: Date;
  previousPosition: string;
  newPosition: string;

  modificationNotes?: ModificationNote[];
}
