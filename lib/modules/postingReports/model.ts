import { IUser } from '../users/model';
import { ISchools } from '../schools/model';
import { ModificationNote } from '../common/model';

export interface IPostingReport {
  _id?: string;
  staffDetails: IUser | null;
  sourceSchool: ISchools | null;
  destinationSchool: ISchools | null;
  dateOfPreviousSchoolPosting: Date;
  dateOfNewSchoolPosting: Date;
  previousPosition: string;
  newPosition: string;

  modificationNotes?: ModificationNote[];
}
