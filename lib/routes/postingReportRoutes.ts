import { PostingsReportController } from '../controllers/postingReportController';
// import { PDFController } from '../controllers/GeneratePostingLetterAndTriggerDownload';
import { Application, Request, Response } from 'express';
import AuthMiddleWare from '../middlewares/auth';
// import { generateAndDownloadPDF } from '../utils/pdfGenerator';
export class PostingsReportRoutes {
  private PostingsReportController = new PostingsReportController();

  // private PDFController = new PDFController();
  public route(app: Application) {
    app.get('/api/postingReports', (req: Request, res: Response) => {
      this.PostingsReportController.getPostingReport(req, res);
    });

    app.get('/api/downloadPdf/:userId', (req: Request, res: Response) => {
      // this.PDFController.generateAndUploadPostingLetter(req, res);
    });
  }
}
