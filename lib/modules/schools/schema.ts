import { Schema, Document, model, PaginateModel } from 'mongoose';
import paginate from 'mongoose-paginate-v2';
import { ISchools } from './model';
import { DivisionsEnum, ZonesEnum } from '../../utils/enums';

const SchoolSchema = new Schema({
  nameOfSchool: { type: String, required: true },
  category: {
    type: String,
    default: null,
    required: true,
  },
  address: {
    type: String,
    default: null,
  },
  location: {
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
  listOfStaff: [{ type: Schema.Types.ObjectId, ref: 'Users', default: null }],

  principal: { type: Schema.Types.ObjectId, ref: 'Users', default: null },
  vicePrincipalAdmin: { type: Schema.Types.ObjectId, ref: 'Users', default: null },
  vicePrincipalAcademics: { type: Schema.Types.ObjectId, ref: 'Users', default: null },
  latitude: {
    type: String,
    default: null,
  },
  longitude: {
    type: String,
    default: null,
  },
});

SchoolSchema.plugin(paginate);

interface SchoolModel extends Document, Omit<ISchools, '_id'> {}

const PaginateModel = model<SchoolModel, PaginateModel<ISchools>>('schools', SchoolSchema);
export default PaginateModel;
