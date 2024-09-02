import { ModificationNote } from '../common/model';

export interface IExistingStaff {
  _id?: string;
  nameOfOfficer: string;
  gradeLevel: string;
  ogNum: string;
  dateOfBirth: Date;
  dateOfRetirement: Date;
  dateOfFirstAppointment: Date;
  modificationNotes?: ModificationNote[];
}
