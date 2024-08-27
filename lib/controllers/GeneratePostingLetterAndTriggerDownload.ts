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
      };

      const pdfDownloadLink = `${BASE_URL}/downloadPdf/${userId}`;
      console.log(pdfDownloadLink);
      try {
        // Generate and send the PDF
        const file = `${userData.staffName?.firstName} Posting Letter`;
        const title = 'Posting Letter';
        const date = new Date();

        const content = `${userData.staffName?.firstName} ${letterData.newSchool} ${
          letterData.position
        } ${date.toDateString()}This is  some example content in the PDF document.`;
        generateAndDownloadPDF(file, title, content, res);
      } catch (error) {
        logger.error({
          message: error.message || 'Unknown error',
          service: 'Generate and download posting letter Service',
        });

        this.userService.updateUser(
          { _id: userId },
          {
            $push: {
              letters: { postingLetter: pdfDownloadLink.toString() },
              $set: { dateOfPresentSchoolPosting: Date.now() },
            },
          },
          (updateErr: any, updatedUser: IUser) => {
            if (updateErr) {
              return CommonService.mongoError(updateErr.message, res);
            }
          }
        );
      }
    });
  }
}
