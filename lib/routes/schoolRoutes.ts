import { SchoolsController } from '../controllers/schoolsController';
import { Application, Request, Response } from 'express';
import ValidationMiddleware from '../middlewares/validator';
import schoolValidatorSchema from '../modules/schools/validator';
import AuthMiddleWare from '../middlewares/auth';

export class schoolRoutes {
  private SchoolsController: SchoolsController = new SchoolsController();

  public route(app: Application) {
    app
      .get(
        '/api/schools/:id',
        // ValidationMiddleware(schoolValidatorSchema.verifyParamsId, 'params'),
        (req: Request, res: Response) => {
          this.SchoolsController.getSchoolById(req, res);
        }
      )
      .patch(
        '/api/schools/:id',
        AuthMiddleWare.verifyPrincipalAndAdmin,
        ValidationMiddleware(schoolValidatorSchema.verifyParamsId, 'params'),
        ValidationMiddleware(schoolValidatorSchema.updateSchool, 'params'),

        (req: Request, res: Response) => {
          this.SchoolsController.updateSchool(req, res);
        }
      );

    app.get(
      '/api/schools',
      // AuthMiddleWare.verifyTokenAndAdmin,
      (req: Request, res: Response) => {
        this.SchoolsController.getAllSchools(req, res);
      }
    );

    app.get(
      '/api/schools/users',
      AuthMiddleWare.verifyPrincipalAndAdmin,
      (req: Request, res: Response) => {
        this.SchoolsController.getUsersFromAParticularSchool(req, res);
      }
    );

    app.post(
      '/api/post/schools',
      ValidationMiddleware(schoolValidatorSchema.createSchool, 'body'),
      (req: Request, res: Response) => {
        this.SchoolsController.createSchool(req, res);
      }
    );
  }
}
