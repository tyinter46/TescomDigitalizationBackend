import { UploadModel } from './model';
import { Image } from './schema';

export default class UploadService {
  public filterImage(query: Partial< UploadModel>, callback: any) {
    Image.findOne(query, callback);
  }

  public uploadPhoto(uploadParams:  UploadModel, callback: any) {
    const uploadImage = new Image(uploadParams);
    uploadImage.save(callback);
  }

  public updateImage(query: Partial< UploadModel>, updateParams:  UploadModel, callback: any) {
    Image.findOneAndUpdate(query, updateParams, { new: true }, callback);
  }
  public deleteImage(query: Partial< UploadModel>, callback: any) {
    Image.deleteOne(query, callback);
  }
}
