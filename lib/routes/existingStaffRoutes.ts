import { Application, Request, Response } from 'express';
import { ExistingStaffController } from '../controllers/existingStaffController';
import existingStaffValidationSchema from '../modules/existingStaff/validator';
import ValidationMiddleware from '../middlewares/validator';

export class ExistingStaffRoutes {
  private existingStaffController: ExistingStaffController = new ExistingStaffController();

  public route(app: Application) {
    app
      .route('/api/existingStaff')
      .get(
        ValidationMiddleware(existingStaffValidationSchema.verifyQuery, 'query'),
        (req: Request, res: Response) => {
          this.existingStaffController.getAllExistingStaff(req, res);
        }
      );

    app
      .route('/api/existingStaff/:existingStaffId')
      .get(
        ValidationMiddleware(existingStaffValidationSchema.verifyParamsId, 'params'),
        (req: Request, res: Response) => {
          this.existingStaffController.getExistingStaffById(req, res);
        }
      );
  }
}
