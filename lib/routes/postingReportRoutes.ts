import { PostingsReportController } from '../controllers/postingReportController';
import { Application, Request, Response } from 'express';
import AuthMiddleWare from '../middlewares/auth';

export class PostingsReportRoutes {
  private PostingsReportController = new PostingsReportController();

  public route(app: Application) {
    app.get(
      '/api/postingReport',
      //   AuthMiddleWare.verifyTokenAndAdmin,
      (req: Request, res: Response) => {
        this.PostingsReportController.getPostingReport(req, res);
      }
    );
  }
}
