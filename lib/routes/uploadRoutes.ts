import { Application, Request, Response, NextFunction } from 'express';
import { UploadController } from '../controllers/uploadController';
import ValidatorMiddleware from '../middlewares/validator';
import uploadValidatorSchema from '../modules/upload/validator';
import AuthMiddleWare from '../middlewares/auth';
import CommonService from '../modules/common/service';
import multer , { FileFilterCallback } from 'multer';
import {v2 as cloudinary } from 'cloudinary'
import {cloudinaryConfig} from '../utils/cloudinary'
import path from 'path'
import datauriParser from 'datauri/parser'


export class UploadRoutes {
  private uploadController: UploadController = new UploadController();
  private maxFileSize: number = 5 * 1024 * 1024;
  private storage = multer.memoryStorage()
  private  cloudConf =  cloudinaryConfig
  public route(app: Application) {
   app.post(
      '/api/upload/upload-image',
    //   AuthMiddleWare.verifyTokenAndAdmin,
    multer({
      // limits: { fileSize: this.maxFileSize },
      // fileFilter: function (req: Request, file: any, callback: FileFilterCallback) {
      //   if (!file.originalname.match(/\.(png|jpg|jpeg|gif)$/)) {
      //     return callback(null, false);
      //   }
      //   callback(null, true);
      // },
      storage: this.storage
    }).single('image'),
      (req:Request, res: Response)=>{
   
        try {
          this.cloudConf
        //  const extName = path.extname(req.file.originalname).toString();
        //  console.log(extName)
       
        // console.log(req.file)
       const dataParser = new datauriParser()
      const  dataUri = dataParser.format(path.extname(req.file.originalname).toString(), req.file.buffer)
        // const file =  dataParser.format(extName, req.file.buffer).content;
        const file = dataUri.content
        if (!file) return CommonService.insufficientParameters(res)
      //    // const file = dataUri(req).content
       
      //   const base64Data = file.replace(/^data:application\/octet-stream;base64,/, '');
      //   // console.log(base64Data)
            cloudinary.uploader.upload(file).then( result =>{
              this.uploadController.uploadImage(req, res,result)
              console.log(result)
              const imageParams = {
                imageUrl: result.secure_url,
                publicId: result.public_id,
              };
           
             //  next()
             
        })
        
        }
           catch(err){
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
          }
      //   },
        }    
      // (req: Request, res:Response )=>{
      // this.uploadController.uploadImage(req, res,result)
         
    );
      app
      .route('/api/upload/image/:id')
      .get(
        // AuthMiddleWare.verifyTokenAndAdmin,
         ValidatorMiddleware(uploadValidatorSchema.verifyParamsId, 'params'),
        (req: Request, res: Response) => {
          this.uploadController.getImage(req, res);
        }
      )
      
  }
}
