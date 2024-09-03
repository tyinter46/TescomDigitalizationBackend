// import { Application, Request, Response, NextFunction } from 'express';
// import multer , { FileFilterCallback } from 'multer';
// import multerS3 from 'multer-s3'
// import { S3Aws } from '../utils/aws';
// import aws from 'aws-sdk';
// import { UploadController } from '../controllers/uploadController';
// import ValidatorMiddleware from '../middlewares/validator';
// import uploadValidatorSchema from '../modules/upload/validator';
// import AuthMiddleWare from '../middlewares/auth';
// import CommonService from '../modules/common/service';

// export class UploadRoutes {
//   private maxFileSize: number = 5 * 1024 * 1024;
//   private uploadController: UploadController = new UploadController();

//   private S3: aws.S3 = new S3Aws();

//   public upload = multer({
//     limits: { fileSize: this.maxFileSize },
//     fileFilter: function (req: Request, file: any, callback: FileFilterCallback) {
//       if (!file.originalname.match(/\.(png|jpg|jpeg|gif)$/)) {
//         return callback(null, false);
//       }
//       callback(null, true);
//     },
//     storage: multerS3({
//       s3: this.S3,
//       bucket: process.env.AMAZON_S3_PROPERTY_IMAGES_BUCKET,
//       metadata: function (req: Request, file: any, cb: any) {
//         cb(null, { fieldName: file.fieldname });
//       },
//       key: function (req: Request, file: any, cb: any) {
//         cb(null, Date.now().toString());
//       },
//     }),
//   }).single('image');

//   public route(app: Application) {
//     app.post(
//       '/api/upload/upload-image',
//       AuthMiddleWare.verifyTokenAndAdmin,
//       (req: Request, res: Response, next: NextFunction) => {
//         this.upload(req, res, (err: any) => {
//           if (err) {
//             return CommonService.failureResponse('Error Uploading File', err, res);
//           }

//           next();
//         });
//       },
//       (req: Request, res: Response) => {
//         this.uploadController.uploadImage(req, res);
//       }
//     );

//     app
//       .route('/api/upload/image/:id')
//       .get(
//         AuthMiddleWare.verifyTokenAndAdmin,
//         ValidatorMiddleware(uploadValidatorSchema.verifyParamsId, 'params'),
//         (req: Request, res: Response) => {
//           this.uploadController.getImage(req, res);
//         }
//       )
//       .delete(
//         AuthMiddleWare.verifyTokenAndAdmin,
//         ValidatorMiddleware(uploadValidatorSchema.verifyParamsId, 'params'),
//         (req: Request, res: Response) => {
//           this.uploadController.deleteImage(req, res);
//         }
//       )
//       .patch(
//         AuthMiddleWare.verifyTokenAndAdmin,
//         ValidatorMiddleware(uploadValidatorSchema.verifyParamsId, 'params'),
//         (req: Request, res: Response, next: NextFunction) => {
//           this.upload(req, res, (err: any) => {
//             if (err) {
//               return CommonService.failureResponse('Error Uploading File', err, res);
//             }

//             next();
//           });
//         },
//         (req: Request, res: Response) => {
//           this.uploadController.updateImage(req, res);
//         }
//       );

//     // app.post(
//     //   '/api/upload/image-url',
//     //   AuthMiddleWare.verifyToken,
//     //   ValidatorMiddleware(uploadValidatorSchema.uploadImageUrl, 'body'),
//     //   (req: Request, res: Response) => {
//     //     this.uploadController.uploadImageUrl(req, res);
//     //   }
//     // );

//     // app.patch(
//     //   '/api/upload/image-url/:id',
//     //   AuthMiddleWare.verifyToken,
//     //   ValidatorMiddleware(uploadValidatorSchema.veryifyParamsId, 'params'),
//     //   ValidatorMiddleware(uploadValidatorSchema.uploadImageUrl, 'body'),
//     //   (req: Request, res: Response) => {
//     //     this.uploadController.updateImageUrl(req, res);
//     //   }
//     // );
//   }
// }
