import { Schema, Document, model, PaginateModel, Mongoose } from 'mongoose';
import paginate from 'mongoose-paginate-v2';
import { ModificationNote } from '../common/model';
import { IUser, Qualifications } from './model';
import {
  AccountSourceEnum,
  AccountStatusEnum,
  DivisionsEnum,
  GenderEnum,
  ProfessionalStatusEnum,
  ServiceStatusEnum,
  StaffTypeEnum,
  UserLevelEnum,
  ZonesEnum,
} from '../../utils/enums';
import { Image } from '../upload/schema';
const UserSchema = new Schema(
  {
    staffName: {
      type: {
        firstName: String,
        middleName: String,
        lastName: String,
      },
    },
    coordinates:{
      type: {
        latitude: String,
        longitude: String
      },
    },
    gender: {
      type: String,
      enum: [...Object.values(GenderEnum).concat([null])],
      trim: true,
      default: undefined,
    },
    phoneNumber: {
      type: String,
      required: [true, 'phone number is required'],
      unique: [true, 'phone number already registered'],
      default: null,
    },
    tscFileNumber: {
      type: String,
      default: null,
      unique: true,
    },
    schoolOfPresentPosting: {
      type: String,
      default: null,
    },
    zone: {
      type: String,
      enum: [...Object.values(ZonesEnum)],
      default: ZonesEnum.NULL,
    },
    division: {
      type: String,
      enum: [...Object.values(DivisionsEnum)],
      default: DivisionsEnum.NULL,
    },
    nationality: {
      type: String,
      default: null,
    },
    stateOfOrigin: {
      type: String,
      default: null,
    },
    lgOfOrigin: {
      type: String,
      default: null,
    },
    ward: {
      type: String,
    },
    qualifications: [],

    subjectsTaught: {
      type: [String],
      default: null,
    },
    dateOfPresentSchoolPosting: {
      type: Date,
      default: null,
    },
    cadre: {
      type: String,
      default: null,
    },
    dateOfFirstAppointment: {
      type: Date,
      default: null,
    },
    dateOfLastPromotion: {
      type: Date,
      default: null,
    },
    dateOfBirth: {
      type: Date,
      default: null,
    },
    gradeLevel: {
      type: String,
      default: null,
    },
    pfa: {
      type: String,
      default: null,
    },
    pensionNumber: {
      type: String,
      default: null,
    },
    dateOfRetirement: {
      type: Date,
    },
    professionalStatus: {
      type: String,
      enum: [...Object.values(ProfessionalStatusEnum)],
      default: ProfessionalStatusEnum.NULL,
      trim: true,
    },
    email: {
      type: String,
      default: null,
      unique: [true, 'email already registered'],
    },
    ogNumber: {
      type: String,
      required: [true, 'OG number is required'],
      unique: [true, 'OG number already registered'],
    },
    password: { type: String, required: true, select: false },
    confirmationCode: {
      type: String,
    },
    profilePhoto: { type: Schema.Types.ObjectId, ref: Image },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    tetiaryCertificate: { type: Schema.Types.ObjectId, ref: Image, default: null },
    primarySchoolCertificate: { type: Schema.Types.ObjectId, ref: Image, default: null },
    secondarySchoolCertificate: { type: Schema.Types.ObjectId, ref: Image, default: null },
    firstAppointmentLetter: { type: Schema.Types.ObjectId, ref: Image, default: null },
    lastPromotionLetter: { type: Schema.Types.ObjectId, ref: Image, default: null },
    birthCertificate: { type: Schema.Types.ObjectId, ref: Image, default: null },
    lastVisited: { type: Date, default: new Date() },
    authLevel: {
      type: String,
      enum: [...Object.values(UserLevelEnum)],
      default: UserLevelEnum.TSCSTAFF,
      trim: true,
    },
    resetPasswordToken: { type: String, default: null },
    resetPasswordExpires: { type: Date, default: null },
    isDeleted: { type: Boolean, default: false },
    accountStatus: {
      type: String,
      enum: [...Object.values(AccountStatusEnum)],
      default: AccountStatusEnum.PENDING,
      trim: true,
    },
    serviceStatus: {
      type: String,
      enum: [...Object.values(ServiceStatusEnum)],
      default: ServiceStatusEnum.ACTIVE,
    },
    staffType: {
      type: String,
      enum: [...Object.values(StaffTypeEnum)],
      default: StaffTypeEnum.NULL,
      trim: true,
    },
    remark: {
      type: String,
    },
    accountSource: {
      type: String,
      enum: [...Object.values(AccountSourceEnum)],
      default: AccountSourceEnum.LOCAL,
      trim: true,
    },
    authToken: {
      type: {
        code: String,
        expiresIn: Number,
      },
    },
    ModificationNotes: [ModificationNote],
  },
  { timestamps: true }
);

UserSchema.plugin(paginate);

interface UsersModel extends Document, Omit<IUser, '_id'> {}
const PaginateModel = model<UsersModel, PaginateModel<UsersModel>>('Users', UserSchema);
export default PaginateModel;
