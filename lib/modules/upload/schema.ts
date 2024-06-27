import mongoose from 'mongoose';
const { Schema } = mongoose;

const imageSchema = new Schema(
  {
    imageUrl: { type: String, required: true },
    publicId: { type: String, required: true },
  },
  { timestamps: true }
);

export const Image = mongoose.model('Image', imageSchema);
