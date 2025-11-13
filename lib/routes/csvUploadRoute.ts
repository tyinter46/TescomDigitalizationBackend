import { Application, Request, Response } from 'express';
import AuthMiddleWare from '../middlewares/auth';
import {CsvUploadController} from '../controllers/csvUploadController';
import multer from 'multer';    

const upload = multer();

export class CsvUploadRoute {
  private csvUploadController: CsvUploadController = new CsvUploadController();

  public staffToPostCsvRoutes(app: Application) {
    app.post('/api/uploadCsv', upload.single('file'), (req: Request, res: Response) => {
      this.csvUploadController.uploadCsv(req, res);
    });
    app.post('/api/uploadStaffPosting', upload.single('file'), (req: Request, res: Response) => {
      this.csvUploadController.postingCSVUpload(req, res)
  })
  }

}
    // AuthMiddleWare.verifyToken,          