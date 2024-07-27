import { ModificationNote } from '../common/model';
import {
  UserLevelEnum,
  AccountSourceEnum,
  ZonesEnum,
  AccountStatusEnum,
  GenderEnum,
  DivisionsEnum,
  QualificationsTypeEnum,
  ServiceStatusEnum,
  ProfessionalStatusEnum,
  StaffTypeEnum,
  PositionEnum,
} from '../../utils/enums';
import { ISchools } from '../schools/model';
import { UploadModel } from '../upload/model';

export interface Qualifications {
  degreeType: QualificationsTypeEnum;
  specialization: string;
  year: Date;
  schoolName: string;
}

export const Qualifications = {
  degreeType: String,
  specialization: String,
  year: Date,
  schoolName: String,
};

export interface IUser {
  _id?: string;
  staffName?: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  coordinates?: {
    latitude: string;
    longitude: string;
  };
  position?: PositionEnum;
  gender?: GenderEnum;
  phoneNumber?: string;
  confirmPhoneNumber?: string;
  tscFileNumber?: string;
  schoolOfPresentPosting?: ISchools;
  zone?: ZonesEnum;
  division?: DivisionsEnum;
  nationality?: string;
  stateOfOrigin?: string;
  lgOfOrigin?: string;
  ward?: string;
  qualifications?: Qualifications[];
  subjectsTaught?: string[];
  dateOfPresentSchoolPosting?: Date;
  cadre?: string;
  dateOfFirstAppointment?: Date;
  dateOfLastPromotion?: Date;
  dateOfBirth?: Date;
  gradeLevel?: number;
  pfa?: string;
  pensionNumber?: string;
  dateOfRetirement?: Date;
  professionalStatus?: ProfessionalStatusEnum;
  email?: string;
  ogNumber?: string;
  password?: string;
  confirmationCode?: string;
  profilePhoto?: UploadModel;
  tetiaryCertificate?: string;
  primarySchoolCertificate?: string;
  secondarySchoolCert?: string;
  firstAppointmentLetter?: string;
  lastPromotionLetter?: string;
  birthCertificate?: string;
  isAdmin?: boolean;
  authLevel?: UserLevelEnum;
  resetPasswordToken?: string;
  resetPasswordExpires?: number;
  isDeleted?: boolean;
  accountStatus?: AccountStatusEnum;
  accountSource?: AccountSourceEnum;
  serviceStatus?: ServiceStatusEnum;
  staffType?: StaffTypeEnum;
  remark?: string;
  lastVisited?: Date;
  // staffDetailsFromCaps? :
  modificationNotes?: ModificationNote[];
  authToken?: {
    code: string;
    expiresIn: number;
  };
}

// tetiaryCertificate?:string;
//   primarySchoolCertificate?:string;
//   schoolCert?:string;
//   firstAppointmentLetter?:string;
//   lastPromotionLetter?:string;
