import { Application, NextFunction, Request, Response } from "express";
import userValidatorSchema from "../modules/users/validator";
import ValidationMiddleware from "../middlewares/validator";
import AuthController from "../controllers/authController";

export class AuthRoutes {
    private authController: AuthController = new AuthController();

    public route (app: Application){
        app.post('/api/auth/local/signup',
        ValidationMiddleware(userValidatorSchema.signUp, 'body'), (req: Request, res: Response)=> {
            this.authController.signup(req, res)
        });

        app.post ('/api/auth/local/signin',
        ValidationMiddleware(userValidatorSchema.login, 'body'),
        (req: Request, res: Response, next: NextFunction)=>{
            this.authController.loginUser(req, res, next)

        })

        app.patch('/api/auth/local/verify/:id/verify-auth', 
           ValidationMiddleware(userValidatorSchema.verifyAuthToken, 'body'),
           ValidationMiddleware(userValidatorSchema.verifyParamsId, 'params'),
           (req:Request, res: Response)=>{
             this.authController.verifyAuthToken(req, res)
           })

           app.get('/api/auth/mail/:id/success',
           ValidationMiddleware(userValidatorSchema.verifyParamsId, 'params'),
           (req: Request, res: Response)=>{
            this.authController.sendAccountSuccessMail(req,res)
           })

           app.get('/api/auth/local/account-activation/:confirmationCode', 
           ValidationMiddleware(userValidatorSchema.confirmAccount, 'params'),
           (req: Request, res: Response)=>{
            this.authController.confirmAccount(req, res);
           })

           app.get('/api/auth/login/success', (req: Request, res: Response)=>{
            this.authController.loginSuccess(req, res);
           })
    }
}