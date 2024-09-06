import { Request, Response } from 'express';
import { v2 as cloudinary } from 'cloudinary';
import { generateAndDownloadPDF } from '../utils/pdfGenerator'; // Ensure this function returns a buffer
import logger from '../config/logger';
import CommonService from '../modules/common/service';
import UserService from '../modules/users/service';
import { IUser } from '../modules/users/model';

export class PDFController {
  private userService: UserService = new UserService();

  public async generateAndUploadPostingLetter(req: Request, res: Response) {
    const { userId } = req.params;
    const BASE_URL = process.env.PROD_CLIENT_BASE_URL;
    const fileName = `posting_letter_${userId}.pdf`;

    try {
      // Fetch user data
      this.userService.filterUser({ _id: userId }, async (err: any, userData: IUser) => {
        if (err) return CommonService.mongoError(err.message, res);
        if (!userData) return CommonService.notFoundResponse('User not found', res);

        // Generate PDF in memory
        const letterContent = `PDF content here for ${userData.staffName?.firstName}...`;
        const pdfBuffer = await generateAndDownloadPDF(
          fileName,
          'Letter Title',
          letterContent,
          res
        );

        // Upload the PDF buffer to Cloudinary
        cloudinary.uploader
          .upload_stream(
            { resource_type: 'raw', public_id: fileName }, // Set public_id to use the filename
            (error, result) => {
              if (error) {
                logger.error({
                  message: error.message || 'Cloudinary upload failed',
                  service: 'PDFController',
                });
                return CommonService.failureResponse('PDF Upload failed', error, res);
              }

              // Provide the download link
              const downloadLink = result?.secure_url;
              return CommonService.successResponse(
                'PDF Uploaded Successfully!',
                { pdfUrl: downloadLink },
                res
              );
            }
          )
          .end(pdfBuffer); // Upload the PDF buffer
      });
    } catch (error) {
      logger.error({
        message: error.message || 'Unknown error',
        service: 'PDF Generation and Upload',
      });
      return CommonService.mongoError(error.message, res);
    }
  }
}
