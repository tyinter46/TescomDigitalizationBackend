export interface UploadModel {
  _id?: string;
  imageUrl?: string;
  publicId?: string;
}
export interface UploadModel {
  _id?: string; // Optional: MongoDB document ID
  fileUrl?: string; // URL where the PDF is stored
  publicId?: string; // Cloudinary public ID for the PDF
  fileName?: string; // Name of the PDF file
}
