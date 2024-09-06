import dotenv from 'dotenv';
import { Request, Response } from 'express';
import CommonService from '../modules/common/service';
import UserService from '../modules/users/service';
import PDFDocument from 'pdfkit';
import logger from '../config/logger';
import { IUser } from '../modules/users/model';
import { generateAndDownloadPDF } from '../utils/pdfGenerator';
dotenv.config();

export class TriggerPostGeneratePostingLetterAndTriggerDownload {
  private userService: UserService = new UserService();

  public generateAndDownloadPostingLetter(req: Request, res: Response) {
    const BASE_URL = process.env.BASE_URL || 'http://localhost:8001';
    const { userId } = req.params;
    console.log(userId);
    // Fetch user data using callback
    this.userService.filterUser({ _id: userId }, (err: any, userData: IUser) => {
      if (err) {
        return CommonService.mongoError(err.message, res);
      }

      if (!userData) {
        return CommonService.notFoundResponse('User not found', res);
      }
      console.log(userData);
      const letterData = {
        name: userData.staffName?.firstName || 'Unknown',
        newSchool: userData?.schoolOfPresentPosting?.nameOfSchool || 'Unknown',
        position: userData.position || 'Unknown',
        previousSchool: userData.schoolOfPreviousPosting,
      };

      try {
        // Generate and send the PDF
        const file = `${userData.staffName?.firstName} POSTING LETTER`;
        const title =
          userData.position === 'Principal'
            ? `APPOINTMENT AS PRINCIPAL`
            : `APPOINTMENT AS VICE-PRINCIPAL`;
        const date = new Date();

        const content = `
               
                I am directed to inform you that you that the Ogun State Teaching Service Commission has approved your appointment as the ${letterData.position}  to ${letterData.newSchool} with effect
        from 30th July, 2024.

        2.      Kindly ensure that you handover all school documents and materials in your care to your Principal before leaving.

        3.      Congratulations on this well-deserved elevation.

                                                                
        
        
                                                                       Mrs Afolabi Abiodun
                                                                     For: Permanent Secretary.
        `;
        generateAndDownloadPDF(file, title, content, res);
        const pdfDownloadLink = `${BASE_URL}/api/downloadPdf/${userId}`;
        console.log(pdfDownloadLink);
      } catch (error) {
        logger.error({
          message: error.message || 'Unknown error',
          service: 'Generate and download posting letter Service',
        });
      }
    });
  }
}
