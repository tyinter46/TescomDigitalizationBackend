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
  private maxFileSize: number = 700 * 1024 ;
  private storage = multer.memoryStorage()
  private  cloudConf =  cloudinaryConfig
  public route(app: Application) {
   app.post(
      '/api/upload/upload-image',
     AuthMiddleWare.verifyTokenAndAdmin,
    multer({
      limits: { fileSize: this.maxFileSize },
      storage: this.storage,
           
    }).single('image'),
      (req:Request, res: Response)=>{
   
        try {
          this.cloudConf
          const extName = path.extname(req.file.originalname).toString();

       if (!extName.toLowerCase().match(/\.(png|jpg|jpeg|gif)$/)) return CommonService.UnprocessableResponse("You can only upload png, jpg, jpeg and gif files only",res)
    
       const dataParser = new datauriParser()
      const  dataUri = dataParser.format(path.extname(extName), req.file.buffer)

        const file = dataUri.content
        if (!file) return CommonService.insufficientParameters(res)
   
   
            cloudinary.uploader.upload(file).then( result =>{
              this.uploadController.uploadImage(req, res,result)
              console.log(result)
                               
             
        })
        
        }
           catch(err){
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
          }
    
        }    
           
    );
      app
      .route('/api/upload/image/:id')
      .get(
         AuthMiddleWare.verifyTokenAndAdmin,
         ValidatorMiddleware(uploadValidatorSchema.verifyParamsId, 'params'),
        (req: Request, res: Response) => {
          this.uploadController.getImage(req, res);
        }
      ).delete(
                 AuthMiddleWare.verifyTokenAndAdmin,
                ValidatorMiddleware(uploadValidatorSchema.verifyParamsId, 'params'),
                (req: Request, res: Response) => {
                  
                  this.uploadController.deleteImage(req, res);
                }
      ).patch(
        multer({
          limits: { fileSize: this.maxFileSize },
          storage: this.storage,
               
        }).single('image'),
          (req:Request, res: Response)=>{
       
            try {
              this.cloudConf
              const extName = path.extname(req.file.originalname).toString();
    
           if (!extName.toLowerCase().match(/\.(png|jpg|jpeg|gif)$/)) return CommonService.UnprocessableResponse("You can only upload png, jpg, jpeg and gif files only",res)
        
           const dataParser = new datauriParser()
          const  dataUri = dataParser.format(path.extname(extName), req.file.buffer)
    
            const file = dataUri.content
            if (!file) return CommonService.insufficientParameters(res)
       
       
                cloudinary.uploader.upload(file).then( result =>{
                  this.uploadController.updateImage(req, res,result)
                  
                  console.log(result)
                                    
                 
            })
            
            }
               catch(err){
                console.error(err);
                res.status(500).json({ error: 'Internal server error' });
              }
        
            },

               
      )
      
  }
}
