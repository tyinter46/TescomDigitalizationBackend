// import mongoose from 'mongoose';
// const { Schema } = mongoose;

import mongoose from 'mongoose';
const { Schema } = mongoose;

const pdfSchema = new Schema(
  {
    fileUrl: { type: String, required: true }, // URL where the PDF is stored
    publicId: { type: String, required: true }, // Cloudinary public ID for the PDF
    fileName: { type: String, required: true }, // Name of the PDF file
  },
  { timestamps: true }
);

export const PDF = mongoose.model('PDF', pdfSchema);

const imageSchema = new Schema(
  {
    imageUrl: { type: String, required: true },
    publicId: { type: String, required: true },
  },
  { timestamps: true }
);

export const Image = mongoose.model('Image', imageSchema);
