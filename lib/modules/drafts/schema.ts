import { Schema, Document, model, PaginateModel } from 'mongoose';
import paginate from 'mongoose-paginate-v2';
import { ModificationNote } from '../common/model';
import { IDraft } from './model';

const DraftSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'Users', default: null },
    draftData: { type: Schema.Types.Mixed, required: true }, // Use Mixed type for flexibility
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    ModificationNotes: [ModificationNote],
  },
  { timestamps: true }
);

DraftSchema.plugin(paginate);

interface DraftModel extends Document, Omit<IDraft, '_id'> {}
const PaginateModel = model<DraftModel, PaginateModel<DraftModel>>('Draft', DraftSchema);
export default PaginateModel;
