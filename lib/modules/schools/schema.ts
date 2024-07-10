import { Schema, Document, model, PaginateModel } from 'mongoose';
import paginate from 'mongoose-paginate-v2';
import { ISchools} from './model';
import { DivisionsEnum } from 'utils/enums';
import { ZonesEnum } from 'utils/enums';
import {IUser} from '../users/model'

const SchoolSchema = new Schema({
    nameOfSchool: {type: String,
            required: true,
               },
    category: {
        type: String,
        default: null,
        required: true,
    },
     address: {
        type: String,
        default: null,
      
     },
    location:{
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
    listOfStaff:   [{ type: Schema.Types.ObjectId, ref: 'User' }],
    
    principal: { type: Schema.Types.ObjectId, ref: 'User' },
    vicePrincipalAdmin:{ type: Schema.Types.ObjectId, ref: 'User' },
    vicePrincipalAcademics: { type: Schema.Types.ObjectId, ref: 'User' },
    latitude: {
        type: String,
        default: null,
      
     },
    longitude: {
        type: String,
        default: null,
      
     },
}) 
