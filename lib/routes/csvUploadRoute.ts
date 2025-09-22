import { Application, Request, Response } from 'express';
import AuthMiddleWare from '../middlewares/auth';
import {CsvUploadController} from '../controllers/csvUploadController';
import multer from 'multer';    

const upload = multer();

export class CsvUploadRoute {
  private csvUploadController: CsvUploadController = new CsvUploadController();

  public staffToPostCsvRoutes(app: Application) {
    app.post('/uploadCsv', upload.single('file'), (req: Request, res: Response) => {
      this.csvUploadController.uploadCsv(req, res);
    });
  }
}
    // AuthMiddleWare.verifyToken,          