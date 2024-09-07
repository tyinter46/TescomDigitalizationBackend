// export default class UploadService {
//   public filterImage(query: Partial<UploadModel>, callback: any) {
//     Image.findOne(query, callback);
//   }

//   public uploadPhoto(uploadParams: UploadModel, callback: any) {
//     const uploadImage = new Image(uploadParams);
//     uploadImage.save(callback);
//   }

//   public updateImage(query: Partial<UploadModel>, updateParams: UploadModel, callback: any) {
//     Image.findOneAndUpdate(query, updateParams, { new: true }, callback);
//   }
//   public deleteImage(query: Partial<UploadModel>, callback: any) {
//     Image.deleteOne(query, callback);
//   }
// }

import { UploadModel } from './model'; // Assuming you have a model for PDF files similar to images
import { PDF, Image } from './schema'; // Assuming you have a schema for PDF files

export default class UploadService {
  // Find a PDF file based on the provided query
  public filterPDF(query: Partial<UploadModel>, callback: any) {
    PDF.findOne(query, callback);
  }

  // Upload a PDF file
  public uploadPDF(uploadParams: UploadModel, callback: any) {
    const uploadPDF = new PDF(uploadParams);
    uploadPDF.save(callback);
  }

  // Update a PDF file record
  public updatePDF(query: Partial<UploadModel>, updateParams: UploadModel, callback: any) {
    PDF.findOneAndUpdate(query, updateParams, { new: true }, callback);
  }

  // Delete a PDF file record
  public deletePDF(query: Partial<UploadModel>, callback: any) {
    PDF.deleteOne(query, callback);
  }

  public filterImage(query: Partial<UploadModel>, callback: any) {
    Image.findOne(query, callback);
  }

  public uploadPhoto(uploadParams: UploadModel, callback: any) {
    const uploadImage = new Image(uploadParams);
    uploadImage.save(callback);
  }

  public updateImage(query: Partial<UploadModel>, updateParams: UploadModel, callback: any) {
    Image.findOneAndUpdate(query, updateParams, { new: true }, callback);
  }
  public deleteImage(query: Partial<UploadModel>, callback: any) {
    Image.deleteOne(query, callback);
  }
}
