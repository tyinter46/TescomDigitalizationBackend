import { PostingsReportController } from '../controllers/postingReportController';
import { TriggerPostGeneratePostingLetterAndTriggerDownload } from '../controllers/GeneratePostingLetterAndTriggerDownload';
import { Application, Request, Response } from 'express';
import AuthMiddleWare from '../middlewares/auth';
import { generateAndDownloadPDF } from '../utils/pdfGenerator';
export class PostingsReportRoutes {
  private PostingsReportController = new PostingsReportController();
  private TriggerPostGeneratePostingLetterAndTriggerDownload =
    new TriggerPostGeneratePostingLetterAndTriggerDownload();

  public route(app: Application) {
    app.get(
      '/api/postingReport',
      //   AuthMiddleWare.verifyTokenAndAdmin,
      (req: Request, res: Response) => {
        this.PostingsReportController.getPostingReport(req, res);
      }
    );

    app.get('/downloadPdf/:userId', (req: Request, res: Response) => {
      this.TriggerPostGeneratePostingLetterAndTriggerDownload.generateAndDownloadPostingLetter(
        req,
        res
      );
    });
  }
}
