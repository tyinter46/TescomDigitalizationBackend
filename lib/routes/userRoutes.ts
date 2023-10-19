import UserController from "../controllers/userController";
import { Application, Request, Response } from "express";
import ValidationMiddleware from "../middlewares/validator";    
import userValidatorSchema from "../modules/users/validator";   

export class UserRoutes{
       
   private UserController: UserController = new UserController();
   
   public route (app: Application){
    app.get('/api/user/:id',
    ValidationMiddleware(userValidatorSchema.verifyParamsId, 'params'),
    (req: Request, res: Response)=>{
          this.UserController.getUser(req, res)
    })
    
    app.get('/api/users', (req: Request, res: Response)=>{
        this.UserController.getAllUsers(req, res)
    })

    app.get('/api/user:id/forgotPassword',
    ValidationMiddleware(userValidatorSchema.verifyParamsId, 'params'), 
    ValidationMiddleware(userValidatorSchema.forgotPassword, 'body'),
    (req: Request, res: Response)=>{
        this.UserController.forgotPassword(req, res);
    })
   

    app.get('api/user/forgotPassword/verify/:token',
    ValidationMiddleware(userValidatorSchema.verifyForgotPasswordToken, 'params'),
    (req: Request , res: Response)=>{
        this.UserController.confirmForgotPasswordToken(req, res)
    })

    app.get ('api/user/:id/resetPassword',
    ValidationMiddleware(userValidatorSchema.verifyParamsId, 'params'),
    ValidationMiddleware(userValidatorSchema.resetPassword, 'body'),
    (req: Request, res: Response)=>{
        this.UserController.resetPassword(req, res);
    })






   } 
}