import { Schema, Document, model, PaginateModel } from 'mongoose';
import paginate from 'mongoose-paginate-v2';
import { IExistingStaff } from './model';

const ExistingStaffSchema = new Schema({
  ogNum: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  nameOfOfficer: {
    type: String,
    required: true,
  },
  gradeLevel: {
    type: String,
  },
  dateOfBirth: {
    type: Date,
  },
  dateOfRetirement: {
    type: Date,
  },
  dateOfFirstAppointment: {
    type: Date,
  },
});

ExistingStaffSchema.plugin(paginate);

interface ExistingStaffModel extends Document, Omit<IExistingStaff, '_id'> {}

const PaginateModel = model<ExistingStaffModel, PaginateModel<ExistingStaffModel>>(
  'existingStaff',
  ExistingStaffSchema
);
export default PaginateModel;
