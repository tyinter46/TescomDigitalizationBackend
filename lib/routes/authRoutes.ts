import { Application, NextFunction, Request, Response } from 'express';
import userValidatorSchema from '../modules/users/validator';
import ValidationMiddleware from '../middlewares/validator';
import AuthController from '../controllers/authController';
import AuthMiddleWare from '../middlewares/auth';

export class AuthRoutes {
  private authController: AuthController = new AuthController();

  public route(app: Application) {
    app.post(
      '/api/b/auth/local/signup',
      ValidationMiddleware(userValidatorSchema.signUp, 'body'),
      (req: Request, res: Response) => {
        this.authController.signup(req, res);
      }
    );

    app.post(
      '/api/auth/local/signin',
      ValidationMiddleware(userValidatorSchema.login, 'body'),
      (req: Request, res: Response, next: NextFunction) => {
        this.authController.loginUser(req, res, next);
      }
    );

    // app.patch('/api/auth/local/verify/:id/verify-auth',
    //   ValidationMiddleware(userValidatorSchema.verifyAuthToken, 'body'),
    //    ValidationMiddleware(userValidatorSchema.verifyParamsId, 'params'),
    //    (req:Request, res: Response)=>{
    //      this.authController.verifyAuthToken(req, res)
    //    })

    //  app.get('/api/auth/mail/:id/success',
    //  ValidationMiddleware(userValidatorSchema.verifyParamsId, 'params'),
    //  (req: Request, res: Response)=>{
    //   this.authController.sendAccountSuccessMail(req,res)
    //  })

    app.patch(
      '/api/auth/local/account-activation',
      // ValidationMiddleware(userValidatorSchema.verifyParamsId, 'params'),
      ValidationMiddleware(userValidatorSchema.confirmAccount, 'body'),
      (req: Request, res: Response) => {
        this.authController.confirmAccount(req, res);
      }
    );

    app.patch(
      '/api/auth/local/resendConfirmAccountToken',
      ValidationMiddleware(userValidatorSchema.resendConfirmAccountToken, 'body'),
      (req: Request, res: Response) => {
        this.authController.resendConfirmAccountToken(req, res);
      }
    );

    app.get('/api/auth/login/success', (req: Request, res: Response) => {
      this.authController.loginSuccess(req, res);
    });

    app.delete('/api/auth/logout', AuthMiddleWare.verifyToken, (req: Request, res: Response) => {
      this.authController.logoutUser(req, res);
    });

    app.get(
      '/api/auth/check-login-status',
      // AuthMiddleWare.verifyToken,
      (req: Request, res: Response) => {
        this.authController.checkLoginStatus(req, res);
      }
    );
  }
}
