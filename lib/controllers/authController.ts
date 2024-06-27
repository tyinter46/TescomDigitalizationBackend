import dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';
import { AccountStatusEnum } from '../utils/enums';
import CommonService from '../modules/common/service';
import { IUser } from '../modules/users/model';
import UserService from '../modules/users/service';
import AuthMiddleWare from '../middlewares/auth';
import logger from '../config/logger';
import cryptoJs from 'crypto-js';
import passport from 'passport';
import redisCache from '../config/redisCache';
import { AUTH_PREFIX } from '../utils/constants';
import SMSService from '../modules/sms/service';
import { MongooseError } from 'mongoose';

import ExistingStaffService from '../modules/existingStaff/service';
import { IExistingStaff } from '../modules/existingStaff/model';

dotenv.config();

class AuthController {
  private userService: UserService = new UserService();
  private existingStaffService: ExistingStaffService = new ExistingStaffService();
  // private mailService: MailService = new MailService();
  private smsService: SMSService = new SMSService();

  public loginSuccess(req: Request, res: Response) {
    if (req?.user) {
      const accessToken = AuthMiddleWare.createToken(req?.user);
      return CommonService.successResponse(
        'You have successfully logged in',
        { user: req.user, accessToken },
        res
      );
    } else {
      return CommonService.failureResponse(
        'Login failed. Unable to obtain access token',
        null,
        res
      );
    }
  }

  public signup(req: Request, res: Response) {
    const { phoneNumber, ogNumber, password } = req.body;
    if (!phoneNumber || !ogNumber || !password) {
      return CommonService.insufficientParameters(res);
    }

    this.existingStaffService.filterStaff(
      { ogNum: ogNumber },
      (err: any, existingStaff: IExistingStaff | null) => {
        if (err) {
          return CommonService.mongoError(err, res);
        }
        if (!existingStaff.ogNum) {
          return CommonService.notFoundResponse('An error occured!', res);
        }

        this.userService.filterUser(
          { phoneNumber: phoneNumber, ogNumber: existingStaff.ogNum },
          (err: any, userResult: IUser | null) => {
            console.log(existingStaff.nameOfOfficer);

            const firstName = existingStaff.nameOfOfficer.split(' ')[1];
            const middleName =
              existingStaff.nameOfOfficer.split(' ')[2] + existingStaff.nameOfOfficer.split(' ')[3];
            const lastName =
              existingStaff.nameOfOfficer.split(' ')[4] +
                ' ' +
                existingStaff.nameOfOfficer.split(' ')[5] ==
              undefined
                ? ''
                : existingStaff.nameOfOfficer.split(' ')[5];

            console.log(firstName, middleName, lastName);
            if (err) return CommonService.mongoError(err, res);
            const code = Math.floor(Math.random() * (999999 - 100000) + 100000).toString();
            const codeExpiration = 60 * 60;
            // const authToken = { code, expiresIn: Date.now() };

            if (userResult && userResult.accountStatus === AccountStatusEnum.PENDING) {
              return CommonService.failureResponse(
                'An Account Already Exist with this details kindly verify your account',
                null,
                res
              );
            } else if (userResult && userResult.accountStatus === AccountStatusEnum.ACTIVATED) {
              return CommonService.failureResponse(
                'You previously created an account, kindly login or Reset your password',
                null,
                res
              );
            }
            if (!userResult) {
              const hashedPassword = cryptoJs.AES.encrypt(
                password,
                process.env.CRYPTO_JS_PASS_SEC
              ).toString();

              const iUserParams: IUser = {
                //to use names from existing officer in staffName
                staffName: {
                  firstName: firstName,
                  middleName: middleName,
                  lastName: lastName,
                },
                email: null,
                phoneNumber: phoneNumber,
                ogNumber: existingStaff.ogNum,
                password: hashedPassword,
                confirmationCode: code,
                dateOfBirth: existingStaff.dateOfBirth,
                dateOfFirstAppointment: existingStaff.dateOfFirstAppointment,
                dateOfRetirement: existingStaff.dateOfRetirement,
                authToken: { code: null, expiresIn: null },
                modificationNotes: [
                  {
                    modifiedOn: new Date(Date.now()),
                    modifiedBy: null,
                    modificationNote: 'new User Created!',
                  },
                ],
              };

              this.userService.createUser(iUserParams, (err: any, newUser: IUser) => {
                if (err) {
                  if (err?.keyValue && err?.keyValue?.email) {
                    CommonService.failureResponse(
                      `User already exist`,
                      { ogNumber: err?.keyValue?.ogNumber },
                      res
                    );
                  } else {
                    return CommonService.mongoError(err, res);
                  }
                } else {
                  CommonService.successResponse(
                    'Account Created Successfully!',
                    { _id: newUser._id },
                    res
                  );

                  try {
                    redisCache.set(
                      AUTH_PREFIX + newUser.ogNumber,
                      code,
                      codeExpiration,
                      (err: boolean) => {
                        if (err) {
                          return CommonService.failureResponse(
                            'An Error Occured Try Again',
                            null,
                            res
                          );
                        }

                        const phoneNumber = newUser.phoneNumber;
                        const newToken = code;
                        this.smsService
                          .sendCode({ phoneNumber, code })
                          .then(() => {
                            const { _id, phoneNumber } = newUser;

                            CommonService.successResponse(
                              `2Factor Code sent to ${phoneNumber} `,
                              { _id, phoneNumber },
                              res
                            );
                          })
                          .catch((err: any) => {
                            logger.error({ message: err, service: 'SmSService' });
                            this.userService.deleteUser({ _id: newUser._id }, () => {
                              CommonService.failureResponse(
                                'Failed to send Two-factor code to phone number, please sign up again',
                                null,
                                res
                              );
                            });

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
                            // this.userService.deleteUser({_id: newUser._id}, ()=>{
                            //     CommonService.failureResponse(
                            //         'Mailer Service Error, kindly try again!',
                            //         null,
                            //         res
                            //     )
                            //     })
                          });
                      }
                    );
                  } catch (error) {
                    throw new error();
                  }
                }
              });
            }
          }
        );
      }
    );
  }

  public resendConfirmAccountToken(req: Request, res: Response) {
    const { ogNumber } = req.body;
    if (!ogNumber) {
      return CommonService.insufficientParameters(res);
    }
    this.userService.filterUser({ ogNumber: ogNumber }, (err: any, userData: IUser) => {
      if (err || !userData) {
        return CommonService.failureResponse('User does not exist', null, res);
      }

      redisCache.get(AUTH_PREFIX + userData.ogNumber, (err: boolean, token: string) => {
        let newToken: string;
        if (err) return CommonService.failureResponse('Try Again!', null, res);
        if (!token) {
          newToken = Math.floor(Math.random() * (999999 - 100000) + 100000).toString();
        } else {
          newToken = token;
        }

        // console.log(userData._id)
        const expT = 60 * 60;
        redisCache.set(AUTH_PREFIX + userData.ogNumber, newToken, expT, (err: boolean) => {
          if (err) {
            return CommonService.failureResponse(
              'Unable to resend confirmation code at this time',
              null,
              res
            );
          }
          const phoneNumber = userData.phoneNumber;
          this.smsService
            .sendConfirmationToken({ phoneNumber, newToken })
            .then(() => {
              CommonService.successResponse('Confirmation Account token Sent!', null, res);
            })
            .catch((err: any) => {
              logger.error({ message: 'Sms Service error', service: 'Confirm Account' });
              redisCache.del(AUTH_PREFIX + userData.ogNumber, () => {
                CommonService.failureResponse(
                  'Unable to Send Confirmation Account Reset token at the moment!',
                  null,
                  res
                );
              });
            });
        });
      });
    });
  }

  public confirmAccount(req: Request, res: Response) {
    const { code, ogNumber } = req.body;
    if (!code || !ogNumber) return CommonService.insufficientParameters(res);
    this.userService.filterUser({ ogNumber: ogNumber }, (err: any, user: IUser | any) => {
      if (err) {
        logger.error({ message: err, service: 'Auth Service' });
        return CommonService.mongoError(err, res);
      }
      if (!user) {
        return CommonService.unAuthorizedResponse('You seem not to be authorized', res);
      }

      redisCache.get(AUTH_PREFIX + ogNumber, (error: boolean, token: string | null) => {
        if (error || !token) {
          return CommonService.failureResponse('Auth Code expired or does not exist', null, res);
        }
        console.log(token, code);
        if (code !== token.toString()) {
          return CommonService.forbiddenResponse('Forbidden!', res);
        } else {
          redisCache.del(AUTH_PREFIX + ogNumber, () => {
            const updateData = {
              accountStatus: AccountStatusEnum.ACTIVATED,
              confirmationCode: null,
            };
            console.log(updateData);
            this.userService.updateUser(
              { _id: user._id },
              updateData,
              (err: any, updateData: IUser) => {
                if (err) return CommonService.mongoError(err, res);
                if (!updateData) {
                  logger.error({ message: 'Account Activation' });
                  return CommonService.failureResponse('Account Activation failed!', null, res);
                }
                return CommonService.successResponse(
                  'Your account has been confirmed, kindly proceed to login',
                  updateData,
                  res
                );
              }
            );
          });
        }
      });
    });
  }

  public loginUser(req: Request, res: Response, next: NextFunction) {
    passport.authenticate('local', function (err: any, user: IUser | any, info: any) {
      if (info && Object.keys(info).length > 0) {
        return CommonService.failureResponse(info?.message, null, res);
      }
      if (err) {
        return next(err);
      }
      if (!user) {
        return CommonService.unAuthorizedResponse('Wrong Credentials!', res);
      }

      if (user.accountStatus != 'activated') {
        return CommonService.unAuthorizedResponse(
          'Pending Account. Please Verify Your phone number!',
          res
        );
      }
      req.logIn(user, function (err) {
        if (err) {
          return next(err);
        }

        const accessToken = AuthMiddleWare.createToken(user);

        user.populate('profilePhoto', (err: any, userData: any) => {
          console.error('Error during populate:', err);
          if (err) return CommonService.mongoError(err, res);
          const profilePhoto = userData.profilePhoto ? userData.profilePhoto?.imageUrl : '';
          const { password, ...rest } = user;
          return CommonService.successResponse(
            'Successful',
            { user: { ...rest, profilePhoto }, accessToken },
            res
          );
        });
      });

      // console.log(accessToken)
      //   user.populate('profilePhoto', (err: any, userData: any) => {
      //     if (err) return CommonService.mongoError(err, res);
      //     const profilePhoto = userData.profilePhoto ? userData.profilePhoto?.imageUrl : '';
      //     const { password, ...rest } = user._doc;
      //     return CommonService.successResponse(
      //       'Successful',
      //       { user: { ...rest, profilePhoto }, accessToken },
      //       res
      //     );
      //   });
      //   });
    })(req, res, next);
  }

  public logoutUser(req: Request, res: Response) {
    req.headers.authorization = null;
    this.userService.filterUser({ _id: req?.user.id }, (err: any, userData: any) => {
      if (userData) {
        userData.lastVisited = new Date();

        req.logOut(() => {});
        //   req.session.destroy((err) => {
        // res.clearCookie("tsc-cookie-session")
        // });
        userData.save((err: any, updatedUserData: IUser) => {
          return CommonService.successResponse('Logout successfully', updatedUserData, res);
        });
      } else return CommonService.failureResponse('Invalid Session', err, res);
    });
  }

  public checkLoginStatus(req: Request, res: Response) {
    const user = req.user;
    if (user) {
      this.userService.filterUser({ _id: user }, (err: MongooseError, currentUser: IUser) => {
        if (currentUser) {
          const { modificationNotes, ...rest } = currentUser;
          return CommonService.successResponse('logged In', { ...rest, loggedIn: true }, res);
        }
        return CommonService.successResponse('Not logged in', { loggedIn: false }, res);
      });
    } else return CommonService.successResponse('Not logged in', { loggedIn: false }, res);
  }

  public resetPassword(req: Request, res: Response) {
    const { token, password } = req.body;
    if (!token || !password)
      return CommonService.failureResponse('No token or password provided', null, res);
    this.userService.filterUser(
      {
        resetPasswordToken: token,
        resetPasswordExpires: {
          $gte: Date.now(),
        },
      },
      async (err: any, userData: any) => {
        if (err || !userData) {
          return CommonService.failureResponse('Token is invalid or has expired. ', err, res);
        }
        const hashedPassword = cryptoJs.AES.encrypt(
          password,
          process.env.CRYPTO_JS_PASS_SEC
        ).toString();
        userData.password = hashedPassword;
        userData.resetPasswordToken = null;
        userData.resetPasswordExpires = null;
        const updateData: IUser = {
          password: userData.password,
          resetPasswordToken: userData.resetPasswordToken,
          resetPasswordExpires: userData.resetPasswordExpires,
        };
        this.userService.updateUser(userData._id, updateData, (err: any) => {
          if (err) {
            return CommonService.mongoError(err, res);
          } else {
            return CommonService.successResponse(
              'Password reset successful',
              {
                id: userData._id,
                email: userData.email,
              },
              res
            );
          }
        });
      }
    );
  }
}

export default AuthController;
