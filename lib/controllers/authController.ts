import dotenv from 'dotenv';
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
import cryptoJS from "crypto-js";
import passport from "passport";
import redisCache from "../config/redisCache";
import { AUTH_PREFIX } from "../utils/constants";


import ExistingStaffService from "../modules/existingStaff/service";
import { IExistingStaff } from "../modules/existingStaff/model";


dotenv.config();

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
        const { email, ogNumber, password} = req.body
        if( !email || !ogNumber || !password){
            return CommonService.insufficientParameters(res);
        } 
         this.existingStaffService.filterStaff({ogNum: ogNumber}, (err:any, existingStaff: IExistingStaff | null )=>{
                if (err) {
                    return CommonService.mongoError(err,res)
                } 
                if (!existingStaff.ogNum){
                   
                    return CommonService.notFoundResponse('Staff not found please visit admin', res)       
                }
                   
          
        
           
            this.userService.filterUser({email: email, ogNumber: existingStaff.ogNum}, (err: any, userResult: IUser | null)=>{
                console.log(existingStaff.nameOfOfficer)

                const firstName = existingStaff.nameOfOfficer.split(" ")[1]
                const middleName = existingStaff.nameOfOfficer.split(" ")[2] + existingStaff.nameOfOfficer.split(" ")[3]
                const lastName = existingStaff.nameOfOfficer.split(" ")[4] + " " + existingStaff.nameOfOfficer.split(" ")[5]

                console.log(firstName, middleName, lastName)
                if (err) return CommonService.mongoError(err, res);
                const secret = `${email} -${ogNumber} - ${new Date(Date.now()).getTime().toString()}`;
                const token = jwt.sign({email, ogNumber}, secret);
                const fullName = `${existingStaff.nameOfOfficer}`;
                
                const IConfirmationParams: IConfirmationMail = {
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
                 const hashedPassword = cryptoJS.AES.encrypt(
                password,
                   'secretkey'
                ).toString();
              console.log(hashedPassword)
                const iUserParams: IUser = {

                    //to use names from existing officer in staffName
                    staffName:{
                        firstName: firstName,
                         middleName: middleName,
                        lastName: lastName
                    },
                    email: email,
                    ogNumber: existingStaff.ogNum,
                    password: hashedPassword,
                    dateOfBirth : existingStaff.dateOfBirth,
                    dateOfFirstAppointment : existingStaff.dateOfFirstAppointment,
                    dateOfRetirement: existingStaff.dateOfRetirement,
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
                    CommonService.successResponse(
                        'Account Created Successfully!',
                        {_id: newUser._id},
                        res
                    )
                    // this.mailService.sendAccountActivationRequest(IConfirmationParams)
                    // .then(()=>{
                    //     CommonService.successResponse(
                    //         'Account Created Successfully!',
                    //         {_id: newUser._id},
                    //         res
                    //     )
                    // })
                    // .catch((err)=>{
                    //     logger.error({message: 'MailService Error'});
                    //     this.userService.deleteUser({_id: newUser._id}, ()=>{
                    //         CommonService.failureResponse(
                    //             'Mailer Service Error, kindly try again!',
                    //             null, 
                    //             res
                    //         )
                    //     })
                    // })
                })
               }
            })
        })        
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
    passport.authenticate('local', function (err:any, user: IUser | any, info:any) {
        if (info && Object.keys(info).length > 0) {
          return CommonService.failureResponse(info?.message, null, res);
        }
        if (err) {
          return next(err);
        }
        if (!user) {
          return CommonService.unAuthorizedResponse('Wrong Credentials!', res);
        }
    
        // console.log( AccountStatusEnum.ACTIVATED.length)
        // if (user.accountStatus !== AccountStatusEnum.ACTIVATED) {
            
        //   return CommonService.unAuthorizedResponse(
        //     'Pending Account. Please Verify Your Email!',
        //     res
        //   );
        // }
        req.logIn(user, function (err) {
          if (err) {
            return next(err);
          }
          const accessToken = AuthMiddleWare.createToken(user);
          user.populate('profilePhoto', (err: any, userData: any) => {
            if (err) return CommonService.mongoError(err, res);
            const profilePhoto = userData.profilePhoto ? userData.profilePhoto?.imageUrl : '';
            const { password, ...rest } = user._doc;
            return CommonService.successResponse(
              'Successful',
              { user: { ...rest, profilePhoto }, accessToken },
              res
            );
          });
        });
      })(req, res, next);
}

}

export default AuthController