import { Schema, Document, model, PaginateModel } from 'mongoose';
import paginate from 'mongoose-paginate-v2';
import { IPostingReport } from './model';
import { DivisionsEnum, ZonesEnum, PositionEnum } from '../../utils/enums';
import { ModificationNote } from '../common/model';

const PostingReportSchema = new Schema(
  {
    staffDetails: {
      type: String,
      default: null,
    },
    sourceSchool: {
      type: String,

      default: null,
    },
    destinationSchool: {
      type: String,
      default: null,
    },
    dateOfPreviousSchoolPosting: {
      type: Date,
      default: null,
    },
    dateOfNewSchoolPosting: {
      type: Date,
      default: null,
    },
    previousPosition: {
      type: String,
      // enum: [...Object.values(PositionEnum)],
      default: null,
    },
    newPosition: {
      type: String,
      default: null,
    },
    staleOrNew: {
      type: String,
      default: null,
    },

    ModificationNotes: [ModificationNote],
  },
  { timestamps: true }
);
PostingReportSchema.index({ staffDetails: 1 });
PostingReportSchema.index({ newPosition: 1 });
PostingReportSchema.index({ newPosition: 1 });
PostingReportSchema.index({ dateOfNewSchoolPosting: 1 });

// SchoolSchema.index({ principal: 1 }, { unique: true });
// SchoolSchema.index({ vicePrincipalAdmin: 1 }, { unique: true });
// SchoolSchema.index({ vicePrincipalAcademics: 1 }, { unique: true });
PostingReportSchema.plugin(paginate);

interface PostingReportModel extends Document, Omit<IPostingReport, '_id'> {}

const PaginateModel = model<PostingReportModel, PaginateModel<IPostingReport>>(
  'PostingReport',
  PostingReportSchema
);
export default PaginateModel;
