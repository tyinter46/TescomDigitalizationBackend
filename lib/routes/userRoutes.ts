import UserController from '../controllers/userController';
import { Application, Request, Response } from 'express';
import ValidationMiddleware from '../middlewares/validator';
import userValidatorSchema from '../modules/users/validator';
import AuthMiddleWare from '../middlewares/auth';

export class UserRoutes {
  private UserController: UserController = new UserController();

  public route(app: Application) {
    app
      .get(
        '/api/user/:id',
        ValidationMiddleware(userValidatorSchema.verifyParamsId, 'params'),
        (req: Request, res: Response) => {
          this.UserController.getUser(req, res);
        }
      )
      .patch(
        '/api/user/:id',
        // AuthMiddleWare.verifyToken,
        ValidationMiddleware(userValidatorSchema.verifyParamsId, 'params'),
        ValidationMiddleware(userValidatorSchema.updateUser, 'body'),

        (req: Request, res: Response) => {
          this.UserController.updateUser(req, res);
        }
      );

    app.get('/api/users', (req: Request, res: Response) => {
      this.UserController.getAllUsers(req, res);
    });
    app.post(
      '/api/forgotPassword',

      ValidationMiddleware(userValidatorSchema.forgotPassword, 'body'),
      (req: Request, res: Response) => {
        this.UserController.forgotPassword(req, res);
      }
    );

    app.patch(
      '/api/resetPassword',
      // ValidationMiddleware(userValidatorSchema.verifyParamsId, 'params'),
      ValidationMiddleware(userValidatorSchema.resetPassword, 'body'),
      (req: Request, res: Response) => {
        this.UserController.resetPassword(req, res);
      }
    );

    app.patch(
      '/api/users/:id/password-update',
      AuthMiddleWare.verifyToken,
      (req: Request, res: Response) => {
        this.UserController.updateUserPassword(req, res);
      }
    );
  }
}
