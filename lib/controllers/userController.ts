import dotenv from 'dotenv';
import {Request, Response} from 'express';
import { AccountSourceEnum } from '../utils/enums';
import CommonService from '../modules/common/service';
import { RESET_PASSWORD } from '../utils/constants';
import { IUser } from '../modules/users/model';
import UserService from '../modules/users/service';
import jwt from 'jsonwebtoken';
import RedisCache from '../config/redisCache';
import MailService from '../modules/mailer/service';
import { IForgotPassword } from '../modules/mailer/model';
import logger from '../config/logger';
import CryptoJS from 'crypto-js';
import redisCache from '../config/redisCache';


dotenv.config();

class userController{
    private userService: UserService = new UserService();
    private mailService: MailService = new MailService();

    public getUser (req: Request, res: Response){
        const {id} = req.params;
        if (!id) return CommonService.insufficientParameters(res);
        this.userService.filterUser({_id: id}, (err: any, user: IUser)=>{
            if (err) return CommonService.mongoError(err, res);
            if (!user){
                return CommonService.failureResponse('User does not exist', null, res)
            }
            return CommonService.successResponse('User details fetched successfuly', {user}, res);
            })
    }

    public resetPassword(req: Request, res: Response){
        const {id} = req.params;
        const {password, token} = req.body;
        if(!token || !id || !password) return CommonService.insufficientParameters(res)
        redisCache.get(RESET_PASSWORD + id, (err: boolean, validToken: string | null)=>{
            if (err || !validToken){
                return CommonService.failureResponse('Password Link expired try Again!', null, res);
            }
            this.userService.filterUser({_id: id},
                (err: any, userData: any)=>{
                    if (err) return CommonService.mongoError(err,res);
                    else if (!userData){
                        return CommonService.failureResponse('Not Authorized', null, res)
                    }
                    const hashedPassword = CryptoJS.AES.encrypt(password, process.env.CRYPTO_JS_PASS_SEC).toString()
                   userData.password = hashedPassword;
                   userData.modificationNotes.push({
                    modificationNote: 'Password Updated',
                    modifiedBy: `${userData.name.firstName} - ${userData.name.lastName}`,
                    modifiedOn: new Date(Date.now()),   
                });
                userData.save((err: any, updatedUser: IUser)=>{
                    if (err) return CommonService.mongoError(err, res);
                    redisCache.del(RESET_PASSWORD + id, ()=>{
                        return CommonService.successResponse(
                            'User Password updated Successfully',
                            {id: updatedUser._id},
                            res
                        )
                    }) 
                })
            }, true 
                
                )
        })
    
    }



    public confirmForgotPasswordToken (req: Request, res: Response){
        const {token} = req.params;
        if(!token) return CommonService.insufficientParameters(res);
        const payload = jwt.verify(token, process.env.JWT_RESET_PASS_SEC!)
        if(!payload) return CommonService.failureResponse('Not authorized', null, res);
        this.userService.filterUser({email:payload}, (err: any, userData: IUser | null)=>{
          if (err) return CommonService.mongoError(err, res);
          else if (!userData){
            return CommonService.failureResponse('You are not authorized!', null, res);
         }
         redisCache.get(RESET_PASSWORD + userData._id, (err: boolean, validToken: string | null)=>{
            if (err || !validToken){
                return CommonService.failureResponse('Password Link expired try again', null, res);

            } else {
                return CommonService.successResponse(
                    'Kindle set a new password',
                    {id: userData._id, token: token},
                    res
                )
            }
         })
        })
    }

    public forgotPassword(req: Request, res: Response){
        const {email} = req.body;
        if(!email){
            return CommonService.insufficientParameters(res);

        }
        this.userService.filterUser({email}, (err: any, userData: IUser | null) =>{
            if (err || !userData){
                return CommonService.failureResponse('User does not exist', null, res);
            }

         RedisCache.get(RESET_PASSWORD + userData.division, (err: boolean, token: string)=>{
               let newToken: string;
               if (err) return CommonService.failureResponse('Try Again!', null, res);
               if (!token){
                const tokenSecret = process.env.JWT_RESEST_PASS_SEC!;
                newToken = jwt.sign(userData.email, tokenSecret);
                 } else {
                    newToken = token;
                 }
                const forgetPasswordParams: IForgotPassword = {
                    name: userData.staffName.firstName,
                    email: userData.email,
                    token: newToken,
                }

                const expT = 15*60;
                RedisCache.set(RESET_PASSWORD + userData._id, newToken, expT, (err: boolean)=>{
                    if (err){
                        return CommonService.failureResponse('Unable to reset Password at this time',
                        null, 
                        res
                        );
                    }
                     this.mailService.sendPasswordReset(forgetPasswordParams).
                     then(()=>{
                        CommonService.successResponse('Password Reset Link Sent!', null, res)
                     }). catch((err: any)=>{
                        logger.error({message: 'Mailer Service error', service: 'forgetPassword'})
                        RedisCache.del(RESET_PASSWORD + userData._id, ()=>{
                         CommonService.failureResponse('Unable to Send Password Reset Link at the moment!',
                            null,
                            res
                         )
                        })
                     })
                })
         })
        })
    }
}

export default userController
