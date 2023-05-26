import { publicDecrypt } from "crypto";
import { IuploadImage } from "./model";
import { Image } from "./schema";

export default class UploadService{
    public filterImage(query: Partial<IuploadImage>, callback: any){
        Image.findOne(query, callback);
    }

    public uploadPhoto (uploadParams: IuploadImage, callback: any){
       const uploadImage = new Image(uploadParams);
       uploadImage.save(callback)
    }

    public updateImage(query: Partial<IuploadImage>, updateParams:IuploadImage, callback: any){
        Image.findOneAndUpdate(query, updateParams, {new: true}, callback )
    }
    public deleteImage(query: Partial<IuploadImage>, callback: any){
        Image.deleteOne(query, callback);
    }
}

