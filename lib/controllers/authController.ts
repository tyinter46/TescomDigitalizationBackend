import { NextFunction, Request, Response } from "express";
import { AccountStatusEnum } from "../utils/enums";
import CommonService from "../modules/common/service";
import { IUser } from "../modules/users/model";
import jwt from 'jsonwebtoken';
import MailService from "../modules/mailer/service";
import UserService from "../modules/users/service";
import AuthMiddleWare from "../middlewares/auth";
import { IConfirmationMail } from "../modules/mailer/model";
import logger from "../config/logger";
import CryptoJS from "crypto-js";
import passport from "passport";
import redisCache from "../config/redisCache";
import { AUTH_PREFIX } from "../utils/constants";

import ExistingStaffService from "modules/existingStaff/service";
import { IExistingStaff } from "modules/existingStaff/model";


class AuthController {
    private userService: UserService = new UserService();
    private existingStaffService :  ExistingStaffService = new ExistingStaffService()
    private mailService: MailService = new MailService();


    public loginSuccess(req: Request, res: Response){
        if(req?.user){
            const accessToken = AuthMiddleWare.createToken(req?.user);
            return CommonService.successResponse(
                'You have successfully logged in',
                {user: req.user, accessToken},
                res
            )
        } else {
            return CommonService.failureResponse(
                'Login failed. Unable to obtain access token',
                null,
                res
            )
        }
    }

    public sendAccountSuccessMail(req: Request, res: Response){
        const {id}= req.params;
        if (!id) return CommonService.insufficientParameters(res);
        this.userService.filterUser({_id:id}, (err: any, user:IUser | null)=>{
            if (err) return CommonService.mongoError(err, res);
            else if (!user){
                return CommonService.failureResponse('Unable to send Mail User does not exist', null, res);
            }
            const mailingUser: Partial<IConfirmationMail> = {
                email: user.email,
                name: user.staffName.firstName,
            };
            this.mailService.sendAccountSuccessEmail(mailingUser)
            .then(()=>{
                CommonService.successResponse('Welcome on board we are glad to  have you here', null, res)
            }).catch((err)=>{
                logger.error({message: 'MailService Error'})
                CommonService.failureResponse('MailService Error', null, res )
            })

        })
    }

    public signup(req: Request, res: Response){
        const { firstName, middleName, lastName, email, ogNumber, password} = req.body
        if(!firstName || !lastName || !email || !ogNumber || !password){
            return CommonService.insufficientParameters(res);
        } else {
            this.existingStaffService.filterStaff({ogNumber}, (err:any, existingStaff: IExistingStaff | null)=>{
                if (err) {
                    return CommonService.mongoError(err,res)
                } if (!existingStaff){
                    return CommonService.notFoundResponse('Staff not found please visit admin', res)       
                }

           
            this.userService.filterUser({email, ogNumber}, (err: any, userResult: IUser | null)=>{
               if (err) return CommonService.mongoError(err, res);
                const secret = `${email} -${ogNumber} - ${new Date(Date.now()).getTime().toString()}`;
                const token = jwt.sign({email, ogNumber}, secret);
                const fullName = `${firstName} - ${middleName} - ${lastName}`;
                
                const IConfirmationParams: IConfirmationMail ={
                    confirmationCode: token,
                    email: email,
                    name: fullName,
                };

                if (userResult && userResult.accountStatus === AccountStatusEnum.PENDING){
                    return CommonService.failureResponse(
                        'An Account Already Exist with this details kindly verify your account',
                        null, 
                        res
                    );
               } else if (userResult && userResult.accountStatus === AccountStatusEnum.ACTIVATED){
                return CommonService.failureResponse(
                    'You previously created an account, kindly login or Reset your password',
                    null,
                    res
                );
               }
               if (!userResult){
                const hashedPassword = CryptoJS.AES.encrypt(
                    password,
                    process.env.CRYPTOJS_JS_PASS_SEC
                ).toString();

                const iUserParams: IUser = {
                    staffName:{
                        firstName: firstName,
                        middleName: middleName,
                        lastName: lastName
                    },
                    email: email,
                    ogNumber: ogNumber,
                    password: hashedPassword,
                    authToken: {code: null, expiresIn: null},
                    modificationNotes:[
                        {
                        modifiedOn: new Date(Date.now()),
                        modifiedBy: null,
                        modificationNote: 'new User Created!',
                                    },
                                ],
                }

                this.userService.createUser(iUserParams, (err: any, newUser: IUser)=>{
                    if (err) return CommonService.mongoError(err, res);
                    this.mailService.sendAccountActivationRequest(IConfirmationParams)
                    .then(()=>{
                        CommonService.successResponse(
                            'Account Created Successfully!',
                            {_id: newUser._id},
                            res
                        )
                    })
                    .catch((err)=>{
                        logger.error({message: 'MailService Error'});
                        this.userService.deleteUser({_id: newUser._id}, ()=>{
                            CommonService.failureResponse(
                                'Mailer Service Error, kindly try again!',
                                null, 
                                res
                            )
                        })
                    })
                })
               }
            })
        })
        }
        
    }

    public confirmAccount (req: Request, res: Response){
        const {confirmationCode} = req.params;
        if (!confirmationCode) return CommonService.insufficientParameters(res);
        this.userService.filterUser({confirmationCode}, (err: any, userData: IUser)=>{
            if (err) return CommonService.mongoError(err, res);
            if(!userData){
                return CommonService.failureResponse('Code expired or invalid', null, res);
            }
            const updateData = { status: AccountStatusEnum.ACTIVATED, confirmationCode: null }
            this.userService.updateUser(
                {_id: userData._id},
                updateData,
                (err: any, updateData: IUser)=>{
                    if (err) return CommonService.mongoError(err, res);
                    if(!updateData){
                        logger.error({message: 'Account Activation'});
                        return CommonService.failureResponse('Account Activation failed!', null, res)
                    }
                    return CommonService.successResponse('Account Activation was successful',
                    updateData, 
                    res
                    )
                }

            )
        
    })
}

public verifyAuthToken(req: Request, res: Response){
    const {id} = req.params;
    const {code: token} = req.body
    if (!token || id) return CommonService.insufficientParameters(res);
    this.userService.filterUser({_id: id}, (err: any, user: IUser | any)=>{
        if (err) {
            logger.error({message: err, service: 'Auth Service'})
        return CommonService.mongoError(err,res)
        }
        if (!user){
            return CommonService.unAuthorizedResponse('You seem not to be authorized', res)   
        }
        redisCache.get(AUTH_PREFIX + id, (error: boolean, authToken: {code: number} | null)=>{
            if (error || !authToken){
                return CommonService.failureResponse('Auth Code expired or does not exist', null, res)
            }
            if (token !==authToken.code.toString()){
                return CommonService.forbiddenResponse('Forbidden!', res)
            } else {
                redisCache.del(AUTH_PREFIX + id, ()=>{
                    const accessToken = AuthMiddleWare.createToken(user);
                    return CommonService.successResponse(
                        'You have successfully login',
                        {...user.doc, accessToken},
                        res
                    )
                })
            }
        })
    })
}

public loginUser(req: Request, res: Response, next: NextFunction){
    passport.authenticate('local', (err:any, user: IUser, info: any)=>{
        if (info && Object.keys(info).length > 0) {
            return CommonService.failureResponse(info?.message, null, res)
        }else if (err){
            next(err);
        } else if (!user){
            return CommonService.unAuthorizedResponse('Unauthorized', res);
         } else if (user && user.accountStatus !== AccountStatusEnum.ACTIVATED){
                    return CommonService.failureResponse(
                        'Account not activated, kindly check your mail for activation link',
                        null,
                        res
                    )
         }
   const code = Math.floor(Math.random() * (9999 - 1000) + 1000).toString();
      const codeExpiration = 15 * 60;
      redisCache.set(AUTH_PREFIX + user._id, {code}, codeExpiration, (err: boolean)=>{
        if (err){
            return CommonService.failureResponse('An Error Occured Try Again', null, res);
        }
        this.mailService.send2FAAuthCode({name: user.staffName.firstName, email: user.email, code})
        .then(()=> {
            const {_id, email} = user;
            CommonService.successResponse(`2Factor Code sent to ${email} `, { _id, email }, res)
        })
        .catch((err:any)=>{
            logger.error({message: err, service: 'AuthService'})
            return CommonService.failureResponse(
                'Failed to send Two-factor code to email',
                err,
                res
            )
        })
      })
    })(req, res, next)
}


}

export default AuthController

