// import { Response, Request } from 'express';
// import CommonService from '../modules/common/service';
// import { UploadModel } from '../modules/upload/model';
// import UploadService from '../modules/upload/service';
// import { v2 as cloudinary } from 'cloudinary';
// import { cloudinaryConfig } from '../utils/cloudinary';
// import logger from '../config/logger';

// export class UploadController {
//   private cloudConf = cloudinaryConfig;
//   private uploadService: UploadService = new UploadService();

//   // private S3: aws.S3 = new S3Aws();
//   // private s3Params = { Bucket: process.env.AMAZON_S3_PROPERTY_IMAGES_BUCKET, Key: '' };

//   // public upload = multer({
//   //       limits: { fileSize: this.maxFileSize },
//   //       fileFilter: function (req: Request, file: any, callback: FileFilterCallback) {
//   //         if (!file.originalname.match(/\.(png|jpg|jpeg|gif)$/)) {
//   //           return callback(null, false);
//   //         }
//   //         callback(null, true);
//   //       },
//   //       dest: 'uploads/',
//   //       storage: this.storage,
//   //     }).single('image');

//   public getImage(req: Request, res: Response) {
//     const { id } = req.params;
//     if (!id) return CommonService.insufficientParameters(res);
//     const query = { _id: id };
//     this.uploadService.filterImage(query, (err: any, imageData: UploadModel) => {
//       if (err) {
//         logger.error({ message: err, service: 'UploadService' });
//         CommonService.mongoError(err, res);
//       } else if (!imageData) {
//         CommonService.failureResponse('Cannot find Image!', null, res);
//       } else {
//         if (imageData.imageUrl) {
//           if (err) return CommonService.failureResponse('Cant Load Image!', null, res);

//           CommonService.successResponse('Image Fetched Successfully!', imageData, res);
//         }
//       }
//     });
//   }

//   public uploadImage(req: any, res: Response, result: any) {
//     if (result.secure_url && result.public_id) {
//       const imageParams = {
//         imageUrl: result.secure_url,
//         publicId: result.public_id,
//       };
//       this.uploadService.uploadPhoto(imageParams, (err: any, uploadedImage: UploadModel) => {
//         if (err) {
//           logger.error({ message: err, service: 'UploadService' });
//           return CommonService.mongoError(err, res);
//         }
//         if (!uploadedImage) {
//           return CommonService.failureResponse('Unable to Upload Image', null, res);
//         }
//         return CommonService.successResponse(
//           'Image Uploaded Successfully!',
//           {
//             imageId: uploadedImage?._id,
//             publicId: uploadedImage?.publicId,
//             imageUrl: uploadedImage?.imageUrl,
//           },
//           res
//         );
//       });
//     } else {
//       CommonService.insufficientParameters(res);
//     }
//   }

//   public updateImage(req: any, res: Response, result: any) {
//     const { id } = req.params;
//     if (!id) {
//       CommonService.insufficientParameters(res);
//     } else {
//       const query = { _id: id };
//       this.uploadService.filterImage(query, async (err: any, imageData: UploadModel) => {
//         if (err) return CommonService.mongoError(err, res);
//         if (!imageData) return CommonService.failureResponse('Cannot get Image!', null, res);
//         cloudinary.uploader.destroy(imageData.publicId, (err: any) => {
//           if (err) return CommonService.failureResponse('error updating image', null, res);
//         });
//         if (result.secure_url && result.public_id) {
//           const imageParams = {
//             imageUrl: result.secure_url,
//             publicId: result.public_id,
//           };

//           const updateParams = { imageUrl: imageParams.imageUrl, publicId: imageParams.publicId };
//           this.uploadService.updateImage(
//             query,
//             updateParams,
//             (err: any, updatedImage: UploadModel) => {
//               if (err) {
//                 logger.error({ message: err, service: 'UploadService' });
//                 return CommonService.mongoError(err, res);
//               }
//               if (updatedImage) {
//                 return CommonService.successResponse(
//                   'Image Updated Successfully!',
//                   { imageId: updatedImage?._id },
//                   res
//                 );
//               } else {
//                 return CommonService.failureResponse('Failed to Update Image!', null, res);
//               }
//             }
//           );
//         }
//       });
//     }
//   }

//   public deleteImage(req: Request, res: Response) {
//     const { id } = req.params;
//     const query = { _id: id };
//     if (!id) return CommonService.insufficientParameters(res);
//     this.uploadService.filterImage(query, async (err: any, imageData: UploadModel) => {
//       if (err) return CommonService.mongoError(err, res);
//       if (!imageData) return CommonService.failureResponse('Cannot get Image!', null, res);
//       if (imageData.publicId) {
//         await cloudinary.uploader.destroy(imageData.publicId, (err: any) => {
//           if (err) return CommonService.failureResponse('Unable to Delete File!', null, res);

//           this.uploadService.deleteImage(query, (err: any, data: any) => {
//             if (err) return CommonService.mongoError(err, res);
//             if (data) return CommonService.successResponse('Image Deleted Successfully', null, res);
//           });
//         });
//       } else {
//         this.uploadService.deleteImage(query, (err: any, data: any) => {
//           if (err) {
//             logger.error({ message: err, service: 'UploadService' });
//             return CommonService.mongoError(err, res);
//           }
//           if (data) return CommonService.successResponse('Image Deleted Successfully', null, res);
//         });
//       }
//     });
//   }

//   public uploadImageUrl(req: Request, res: Response) {
//     const { imageUrl } = req.body ?? {};
//     if (imageUrl) {
//       const imageParams = {
//         imageUrl,
//       };

//       this.uploadService.uploadPhoto(imageParams, (err: any, uploadedImage: UploadModel) => {
//         if (err) return CommonService.mongoError(err, res);
//         if (!uploadedImage) {
//           return CommonService.failureResponse('Unable to Upload Image', null, res);
//         }
//         return CommonService.successResponse(
//           'Image Uploaded Successfully!',
//           { imageId: uploadedImage?._id },
//           res
//         );
//       });
//     } else {
//       return CommonService.insufficientParameters(res);
//     }
//   }

//   public updateImageUrl(req: Request, res: Response) {
//     const imageUrl = req.body.imageUrl;
//     const { id } = req.params;
//     if (imageUrl) {
//       const query = { _id: id };
//       this.uploadService.filterImage(query, (err: any, imageData: UploadModel) => {
//         if (err) return CommonService.mongoError(err, res);
//         if (!imageData) return CommonService.failureResponse('Cannot get Image!', null, res);

//         const updateParams = { imageUrl: imageUrl };
//         this.uploadService.updateImage(
//           query,
//           updateParams,
//           (err: any, updatedImage: UploadModel) => {
//             if (err) return CommonService.mongoError(err, res);
//             if (updatedImage) {
//               return CommonService.successResponse(
//                 'Image Updated Successfully!',
//                 { imageId: updatedImage?._id },
//                 res
//               );
//             } else {
//               return CommonService.failureResponse('Failed to Update Image!', null, res);
//             }
//           }
//         );
//       });
//     } else {
//       return CommonService.insufficientParameters(res);
//     }
//   }
// }

import { Request, Response } from 'express';
import CommonService from '../modules/common/service';
import { UploadModel } from '../modules/upload/model';
import UploadService from '../modules/upload/service';
import UserService from '../modules/users/service';
import { v2 as cloudinary } from 'cloudinary';
import { cloudinaryConfig } from '../utils/cloudinary';
import logger from '../config/logger';
import { IUser } from 'modules/users/model';

export class UploadController {
  private cloudConf = cloudinaryConfig;
  private uploadService: UploadService = new UploadService();
  private userService: UserService = new UserService()

  // Upload PDF File
  public uploadPDF(req: any, res: Response, result: any) {
    if (result.secure_url && result.public_id) {
      const pdfParams = {
        fileUrl: result.secure_url,
        publicId: result.public_id,
        fileType: 'pdf', // to denote that it's a PDF
      };
      this.uploadService.uploadPDF(pdfParams, (err: any, uploadedFile: UploadModel) => {
        if (err) {
          logger.error({ message: err, service: 'UploadService' });
          return CommonService.mongoError(err, res);
        }
        if (!uploadedFile) {
          return CommonService.failureResponse('Unable to Upload PDF', null, res);
        }
        return CommonService.successResponse(
          'PDF Uploaded Successfully!',
          {
            fileId: uploadedFile?._id,
            publicId: uploadedFile?.publicId,
            fileUrl: uploadedFile?.fileUrl,
          },
          res
        );
      });
    } else {
      CommonService.insufficientParameters(res);
    }
  }

  // Get PDF File
  public getPDF(req: Request, res: Response) {
    const { id } = req.params;
    if (!id) return CommonService.insufficientParameters(res);
    const query = { _id: id };
    this.uploadService.filterPDF(query, (err: any, fileData: UploadModel) => {
      if (err) {
        logger.error({ message: err, service: 'UploadService' });
        return CommonService.mongoError(err, res);
      }
      if (!fileData) {
        return CommonService.failureResponse('Cannot find PDF!', null, res);
      }
      if (fileData.fileUrl) {
        return CommonService.successResponse('PDF Fetched Successfully!', fileData, res);
      } else {
        return CommonService.failureResponse('Cannot fetch PDF!', null, res);
      }
    });
  }

  // Delete PDF File
  public deletePDF(req: Request, res: Response) {
    const { id } = req.params;
    const query = { _id: id };
    if (!id) return CommonService.insufficientParameters(res);
    this.uploadService.filterPDF(query, async (err: any, fileData: UploadModel) => {
      if (err) return CommonService.mongoError(err, res);
      if (!fileData) return CommonService.failureResponse('Cannot get PDF!', null, res);
      if (fileData.publicId) {
        await cloudinary.uploader.destroy(fileData.publicId, (err: any) => {
          if (err) return CommonService.failureResponse('Unable to Delete File!', null, res);

          this.uploadService.deletePDF(query, (err: any, data: any) => {
            if (err) return CommonService.mongoError(err, res);
            if (data) return CommonService.successResponse('PDF Deleted Successfully', null, res);
          });
        });
      } else {
        this.uploadService.deletePDF(query, (err: any, data: any) => {
          if (err) {
            logger.error({ message: err, service: 'UploadService' });
            return CommonService.mongoError(err, res);
          }
          if (data) return CommonService.successResponse('PDF Deleted Successfully', null, res);
        });
      }
    });
  }



  
  public getImage(req: Request, res: Response) {
    const { id } = req.params;
    if (!id) return CommonService.insufficientParameters(res);
    const query = { _id: id };
    this.uploadService.filterImage(query, (err: any, imageData: UploadModel) => {
      if (err) {
        logger.error({ message: err, service: 'UploadService' });
        CommonService.mongoError(err, res);
      } else if (!imageData) {
        CommonService.failureResponse('Cannot find Image!', null, res);
      } else {
        if (imageData.imageUrl) {
          if (err) return CommonService.failureResponse('Cant Load Image!', null, res);

          CommonService.successResponse('Image Fetched Successfully!', imageData, res);
        }
      }
    });
  }

  public uploadImage(req: any, res: Response, result: any) {
    if (result?.secure_url && result?.public_id) {
      const imageParams = {
        imageUrl: result?.secure_url,
        publicId: result?.public_id,
      };
      this.uploadService.uploadPhoto(imageParams, (err: any, uploadedImage: UploadModel) => {
        if (err) {
          logger.error({ message: err, service: 'UploadService' });
          return CommonService.mongoError(err, res);
        }
        if (!uploadedImage) {
          return CommonService.failureResponse('Unable to Upload Image', null, res);
        }
        const userFilter = { _id: req.params.id };

        this.userService.updateUser(userFilter, {profilePhoto: imageParams.imageUrl}, (err: any, userData: IUser)=>{
          if (err) {
            logger.error({ message: err, service: 'UserService' });
            CommonService.mongoError(err, res);
          } else if (userData) {
            console.log('updated profile photo field')
            return CommonService.successResponse(
              'Image Uploaded Successfully!',
              {
                imageId: uploadedImage?._id,
                publicId: uploadedImage?.publicId,
                imageUrl: uploadedImage?.imageUrl,
              },
              res
            );
          }
        } )
       
      });
    } else {
      CommonService.insufficientParameters(res);
    }
  }

  public updateImage(req: any, res: Response, result: any) {
    const { id } = req.params;
    if (!id) {
      CommonService.insufficientParameters(res);
    } else {
      const query = { _id: id };
      this.uploadService.filterImage(query, async (err: any, imageData: UploadModel) => {
        if (err) return CommonService.mongoError(err, res);
        if (!imageData) return CommonService.failureResponse('Cannot get Image!', null, res);
        cloudinary.uploader.destroy(imageData.publicId, (err: any) => {
          if (err) return CommonService.failureResponse('error updating image', null, res);
        });
        if (result.secure_url && result.public_id) {
          const imageParams = {
            imageUrl: result.secure_url,
            publicId: result.public_id,
          };

          const updateParams = { imageUrl: imageParams.imageUrl, publicId: imageParams.publicId };
          this.uploadService.updateImage(
            query,
            updateParams,
            (err: any, updatedImage: UploadModel) => {
              if (err) {
                logger.error({ message: err, service: 'UploadService' });
                return CommonService.mongoError(err, res);
              }
              if (updatedImage) {
                return CommonService.successResponse(
                  'Image Updated Successfully!',
                  { imageId: updatedImage?._id },
                  res
                );
              } else {
                return CommonService.failureResponse('Failed to Update Image!', null, res);
              }
            }
          );
        }
      });
    }
  }

  public deleteImage(req: Request, res: Response) {
    const { id } = req.params;
    const query = { _id: id };
    if (!id) return CommonService.insufficientParameters(res);
    this.uploadService.filterImage(query, async (err: any, imageData: UploadModel) => {
      if (err) return CommonService.mongoError(err, res);
      if (!imageData) return CommonService.failureResponse('Cannot get Image!', null, res);
      if (imageData.publicId) {
        await cloudinary.uploader.destroy(imageData.publicId, (err: any) => {
          if (err) return CommonService.failureResponse('Unable to Delete File!', null, res);

          this.uploadService.deleteImage(query, (err: any, data: any) => {
            if (err) return CommonService.mongoError(err, res);
            if (data) return CommonService.successResponse('Image Deleted Successfully', null, res);
          });
        });
      } else {
        this.uploadService.deleteImage(query, (err: any, data: any) => {
          if (err) {
            logger.error({ message: err, service: 'UploadService' });
            return CommonService.mongoError(err, res);
          }
          if (data) return CommonService.successResponse('Image Deleted Successfully', null, res);
        });
      }
    });
  }

  public uploadImageUrl(req: Request, res: Response) {
    const { imageUrl } = req.body ?? {};
    if (imageUrl) {
      const imageParams = {
        imageUrl,
      };

      this.uploadService.uploadPhoto(imageParams, (err: any, uploadedImage: UploadModel) => {
        if (err) return CommonService.mongoError(err, res);
        if (!uploadedImage) {
          return CommonService.failureResponse('Unable to Upload Image', null, res);
        }
        return CommonService.successResponse(
          'Image Uploaded Successfully!',
          { imageId: uploadedImage?._id },
          res
        );
      });
    } else {
      return CommonService.insufficientParameters(res);
    }
  }

  public updateImageUrl(req: Request, res: Response) {
    const imageUrl = req.body.imageUrl;
    const { id } = req.params;
    if (imageUrl) {
      const query = { _id: id };
      this.uploadService.filterImage(query, (err: any, imageData: UploadModel) => {
        if (err) return CommonService.mongoError(err, res);
        if (!imageData) return CommonService.failureResponse('Cannot get Image!', null, res);

        const updateParams = { imageUrl: imageUrl };
        this.uploadService.updateImage(
          query,
          updateParams,
          (err: any, updatedImage: UploadModel) => {
            if (err) return CommonService.mongoError(err, res);
            if (updatedImage) {
              return CommonService.successResponse(
                'Image Updated Successfully!',
                { imageId: updatedImage?._id },
                res
              );
            } else {
              return CommonService.failureResponse('Failed to Update Image!', null, res);
            }
          }
        );
      });
    } else {
      return CommonService.insufficientParameters(res);
    }
  }
}
