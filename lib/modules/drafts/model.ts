import mongoose from 'mongoose';
import { ModificationNote } from '../common/model';

export interface IDraft {
  userId: mongoose.Types.ObjectId;
  draftType: string;
  draftData: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
  modificationNotes?: ModificationNote[];
}
