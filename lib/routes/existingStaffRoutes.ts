import { Application, Request, Response } from 'express';
import { ExistingStaffController } from '../controllers/existingStaffController';
import existingStaffValidationSchema from '../modules/existingStaff/validator';
import ValidationMiddleware from '../middlewares/validator';
import { StaffPostingController } from '../controllers/nonTeachingStaffController';

export class ExistingStaffRoutes {
  private existingStaffController: ExistingStaffController = new ExistingStaffController();
  private staffPostinController: StaffPostingController = new StaffPostingController();
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

    app.route('/api/staffPosting/schools/:id').patch((req: Request, res: Response) => {
      this.staffPostinController.updateStaffSchool(req, res);
    });
  }
}
