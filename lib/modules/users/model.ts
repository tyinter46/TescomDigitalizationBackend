import { ModificationNote } from 'modules/common/model';
import {
  UserLevelEnum,
  AccountSourceEnum,
  ZonesEnum,
  AccountStatusEnum,
  GenderEnum,
  DivisionsEnum,
  QualificationsEnum,
} from 'utils/enums';

export interface IUser {
  _id?: string;
  staffName: {
    surname: string;
    middleName: string;
    lastName?: string;
  };
  email?: string;
  ogNumber: string;
  password: string;
  lastVisited: Date;
  confirmationCode?: string;
  profilePhoto?: string;
  isAdmin?: boolean;
  authLevel: UserLevelEnum;
  resetPasswordToken?: string;
  resetPasswordExpires?: number;
  isDeleted?: boolean;
  accountStatus?: AccountStatusEnum;
  accountSource?: AccountSourceEnum;
  // staffDetailsFromCaps? :
  modificationNotes?: ModificationNote[];
  authToken?: {
    code: string;
    expiresIn: number;
  };
}
