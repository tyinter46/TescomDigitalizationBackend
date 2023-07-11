import {Schema, Document, model,  PaginateModel} from 'mongoose';
import paginate from 'mongoose-paginate-v2';
import { ModificationNote } from '../common/model';    
import { IUser, Qualifications } from './model';
import { AccountSourceEnum, AccountStatusEnum, DivisionsEnum, GenderEnum, ProfessionalStatusEnum, ServiceStatusEnum, StaffTypeEnum, UserLevelEnum, ZonesEnum } from '../../utils/enums';

const UserSchema = new Schema({
  
    staffName:{
        type:{
            firstName: String,
            middleName: String,
            lastName: String
        }
    },
    gender: {
        type: String,
        enum: [...Object.values(GenderEnum).concat([null])],
        trim: true,
        default: null,
    },
    phoneNumber: {
        type: String,
        required: [true, 'phone number is required'],
        unique: true,
        },
    tscFileNumber: {
        type: String,
        required: [true, 'file number is required'],
        unique: true,
        },
    schoolOfPresentPosting:{
        type: String,
        required: [true, 'school of present posting is required'],
            },
    zone:{
        type: String,
        enum: [...Object.values(ZonesEnum)],
        default: null,
        required: [true, 'zone is required']
       },
    division:{
       type: String,
       enum:[...Object.values(DivisionsEnum)],
       default: null,
       required: [true, 'division is required']
    },
    nationality: {
        type: String,
        required: [true, 'nationality is required'],
       },
    stateOfOrigin: {
        type: String,
        required: [true, 'state of origin posting is required'],
       },
    lgOfOrigin: {
        type: String,
        required: [true, 'local government of  is required'],
       },
    ward: {
        type: String,
           },
    qualifications: [Qualifications],
  
    subjectTaught: {
        type: String,
        required: [true, 'subject taught in school is required'],
       },
    dateOfPresentSchoolPosting:{
        type: Date,
        required: [true, 'date of present posting is required'],
      },
    cadre: {
        type: String,
        required: [true, 'cadre is required'],
      },
    dateOfFirstAppointment: {
        type: Date,
        required: [true, 'date  of first appointment is required'],
      },
    dateOfLastPromotion: {
        type: Date,
        required: [true, 'date  of last promotion is required'],
      },
    dateOfBirth:{
        type: Date,
        required: [true, 'date  of birth is required'],
      },
    gradeLevel:{
        type: Number,
        required: [true, 'grade level is required'],
        },
    pfa: {
        type: String,
        required: [true, ' is required'],
        
    },
    pensionNumber:{
        type: String, 
        required: [true, 'pension number is required'],
        },
    dateOfRetirement: {
        type: Date,
        
    },
    professionalStatus: {
        type: String,
        enum: [...Object.values(ProfessionalStatusEnum)],
        default: null,
        trim: true
    },
    email:{
        type: String,
        required: [true, 'email is required'],
        unique: [true, 'email already registered']
    },
    ogNumber:{
        type: String,
        required: [true, 'OG number is required'],
        unique: [true, 'OG number already registered'],
         },
    password: {type: String, required: true, select: false },
    confirmationCode: {
        type: String,
    },
    profilePhoto: {type: Schema.Types.ObjectId, ref: 'Image', default: null},
     isAdmin: {
        type: Boolean,
        default: false
     },
    lastVisited:  {type: Date, default: new Date()},   
     authLevel:{
        type: String,
        enum: [...Object.values(UserLevelEnum)],
        default: UserLevelEnum.TSCSTAFF,
        trim: true,
     },
     resetPasswordToken:{ type: String, default: null},
     resetPasswordExpires: {type: Date, default: null},
     isDeleted: {type: Boolean, default: false},
     accountStatus:{
        type: String,
        enum: [...Object.values(AccountStatusEnum)],
        default: AccountStatusEnum.PENDING,
        trim: true
     }, 
     serviceStatus: {
        type: String,
        enum: [...Object.values(ServiceStatusEnum)],
        default: ServiceStatusEnum.ACTIVE
     },
     staffType: {
        type: String,
        enum: [...Object.values(StaffTypeEnum)],
        default: null,
        trim: true
     },
     remark: {
        type: String
     },
     accountSource: {
        type: String,
        enum: [...Object.values(AccountSourceEnum)],
        default: AccountSourceEnum.LOCAL,
        trim: true,
     },
     authToken: {
        type:{
            code: String,
            expiresIn: Number,
        },
    },
    ModificationNotes: [ModificationNote],
},
{timestamps: true}
);

UserSchema.plugin(paginate);

interface UsersModel extends Document, Omit<IUser, '_id'>{}
const PaginateModel = model<UsersModel, PaginateModel<UsersModel>>('Users', UserSchema)
export default PaginateModel