import { IUser } from '../users/model';
import { ISchools } from '../schools/model';
import { ModificationNote } from '../common/model';

export interface IPostingReport {
  _id?: string;
  staffDetails: string | null;
  sourceSchool: string | null;
  destinationSchool: string | null;
  dateOfPreviousSchoolPosting: Date;
  dateOfNewSchoolPosting: Date;
  previousPosition: string | null;
  newPosition: string | null;

  modificationNotes?: ModificationNote[];
}
