import { Application, Request, Response } from 'express';
import AuthMiddleWare from '../middlewares/auth';
import { CsvUploadController } from '../controllers/csvUploadController';
import multer from 'multer';
// import { rateLimitMiddleware, csvUploadRateLimiter } from '../middlewares/rateLimiter';

const upload = multer();

export class CsvUploadRoute {
  private csvUploadController: CsvUploadController = new CsvUploadController();

  public staffToPostCsvRoutes(app: Application) {
    app.post('/api/uploadCsv', 
      AuthMiddleWare.verifyToken,
      // rateLimitMiddleware(csvUploadRateLimiter),
      upload.single('file'), 
      (req: Request, res: Response) => {
        this.csvUploadController.uploadCsv(req, res);
      }
    );
    app.post('/api/uploadStaffPosting', 
      AuthMiddleWare.verifyToken,
      // rateLimitMiddleware(csvUploadRateLimiter),
      upload.single('file'), 
      (req: Request, res: Response) => {
        this.csvUploadController.postingCSVUpload(req, res);
      }
    );
  }
}
// AuthMiddleWare.verifyToken,
