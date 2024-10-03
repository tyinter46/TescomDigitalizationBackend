import dotenv from 'dotenv';
import { Request, Response } from 'express';
import CommonService from '../modules/common/service';
import { RESET_PASSWORD } from '../utils/constants';
import { IUser } from '../modules/users/model';
import UserService from '../modules/users/service';
import RedisCache from '../config/redisCache';
import logger from '../config/logger';
import cryptoJs from 'crypto-js';
import redisCache from '../config/redisCache';
import UsersModel from '../modules/users/schema';
import SMSService from '../modules/sms/service';
import SchoolService from '../modules/schools/service';
import { validateAndFormat } from '../utils/ogNumberValidator';
import { ISchools } from '../modules/schools/model';

dotenv.config();

class UserController {
  private userService: UserService = new UserService();
  //private mailService: MailService = new MailService();
  private smsService: SMSService = new SMSService();
  private schoolsService: SchoolService = new SchoolService();
  public getUser(req: Request, res: Response) {
    const { id } = req.params;
    if (!id) return CommonService.insufficientParameters(res);
    this.userService.filterUser({ _id: id }, (err: any, user: IUser) => {
      if (err) return CommonService.mongoError(err, res);
      if (!user) {
        return CommonService.failureResponse('User does not exist', null, res);
      }
      return CommonService.successResponse('User details fetched successfuly', { user }, res);
    });
  }
  public async updateUser(req: Request | any, res: Response) {
    const {
      gender,
      phoneNumber,
      tscFileNumber,
      schoolOfPresentPosting,
      zone,
      nationality,
      stateOfOrigin,
      lgOfOrigin,
      ward,
      qualifications: { ...rest },
      subjectsTaught: { ...subjectsTaughtRest },
      dateOfPresentSchoolPosting,
      cadre,
      dateOfLastPromotion,
      pfa,
      pensionNumber,
      professionalStatus,
      profilePhoto = '',
      tetiaryCertificate = '',
      primarySchoolCertificate = '',
      secondarySchoolCert = '',
      firstAppointmentLetter = '',
      lastPromotionLetter = '',
      birthCertificate = '',
      staffType,
      authLevel,
      dateOfFirstAppointmentAtTescom,
      dateOnGradeLevelEight,
      remark,
      notifications: { ...notificationsRest },
    } = req.body;

    if (
      gender ||
      phoneNumber ||
      tscFileNumber ||
      schoolOfPresentPosting ||
      zone ||
      nationality ||
      stateOfOrigin ||
      lgOfOrigin ||
      ward ||
      rest ||
      subjectsTaughtRest ||
      dateOfPresentSchoolPosting ||
      cadre ||
      dateOfLastPromotion ||
      pfa ||
      pensionNumber ||
      professionalStatus ||
      tetiaryCertificate ||
      primarySchoolCertificate ||
      secondarySchoolCert ||
      firstAppointmentLetter ||
      lastPromotionLetter ||
      birthCertificate ||
      staffType ||
      dateOfFirstAppointmentAtTescom ||
      dateOnGradeLevelEight ||
      remark
    ) {
      const userFilter = { _id: req.params.id };
      this.userService.filterUser(userFilter, async (err: any, userData: IUser) => {
        if (err) {
          CommonService.mongoError(err, res);
        } else if (userData) {
          if (!userData.modificationNotes) {
            userData.modificationNotes = [];
          }
          userData.modificationNotes.push({
            modifiedOn: new Date(Date.now()),
            modifiedBy: req.id,
            modificationNote: 'User Profile Updated Successfully',
          });
          if (userData.tscFileNumber) {
            return CommonService.UnprocessableResponse(
              'Tsc File Number Already Exist, Kindly verify your file number',
              res
            );
          }
          const userParams: IUser = {
            gender: gender || userData.gender,
            phoneNumber: phoneNumber || userData.phoneNumber,
            schoolOfPresentPosting: schoolOfPresentPosting || userData.schoolOfPresentPosting,
            zone: zone || userData.zone,
            nationality: nationality || userData.nationality,
            stateOfOrigin: stateOfOrigin || userData.stateOfOrigin,
            lgOfOrigin: lgOfOrigin || userData.lgOfOrigin,
            ward: ward || userData.ward,
            qualifications: rest || userData.qualifications,
            subjectsTaught: subjectsTaughtRest || userData.subjectsTaught,
            dateOfPresentSchoolPosting:
              dateOfPresentSchoolPosting || userData.dateOfPresentSchoolPosting,
            cadre: cadre || userData.cadre,
            dateOfLastPromotion: dateOfLastPromotion || userData.dateOfLastPromotion,
            pfa: pfa || userData.pfa,
            pensionNumber: pensionNumber || userData.pensionNumber,
            professionalStatus: professionalStatus || userData.professionalStatus,
            profilePhoto: profilePhoto || userData.profilePhoto,
            tetiaryCertificate: tetiaryCertificate || userData.tetiaryCertificate,
            primarySchoolCertificate: primarySchoolCertificate || userData.primarySchoolCertificate,
            secondarySchoolCert: secondarySchoolCert || userData.secondarySchoolCert,
            firstAppointmentLetter: firstAppointmentLetter || userData.firstAppointmentLetter,
            lastPromotionLetter: lastPromotionLetter || userData.lastPromotionLetter,
            birthCertificate: birthCertificate || userData.birthCertificate,
            staffType: staffType || userData.staffType,
            authLevel: authLevel || userData.authLevel,
            dateOfFirstAppointmentAtTescom:
              dateOfFirstAppointmentAtTescom || userData.dateOfFirstAppointmentAtTescom,
            dateOnGradeLevelEight: dateOnGradeLevelEight || userData.dateOfFirstAppointmentAtTescom,
            remark: remark || userData.remark,
            notifications: notificationsRest || userData.notifications,
          };

          this.userService.updateUser(
            { _id: userData._id },
            userParams,
            async (err: any, updatedUserData: IUser | any) => {
              if (err) {
                logger.error({ message: err, service: 'UserService' });
                CommonService.mongoError(err, res);
              } else if (updatedUserData) {
                try {
                  // Fetch the updated user and populate the necessary fields
                  const populatedUserData = await UsersModel.findById(updatedUserData._id)
                    .populate('schoolOfPresentPosting')
                    .populate('profilePhoto')
                    .exec();

                  const profilePhoto = populatedUserData.profilePhoto
                    ? populatedUserData.profilePhoto?.imageUrl
                    : '';

                  if (schoolOfPresentPosting) {
                    await this.schoolsService.updateSchool(
                      { _id: schoolOfPresentPosting },
                      { $push: { listOfStaff: updatedUserData._id } }
                    );
                  }

                  return CommonService.successResponse(
                    'User update successful',
                    { ...populatedUserData.toObject(), profilePhoto },
                    res
                  );
                } catch (err) {
                  logger.error({ message: err, service: 'UserService' });
                  CommonService.mongoError(err, res);
                }
              } else {
                CommonService.mongoError(new Error('User not found'), res);
              }
            }
          );
        } else {
          CommonService.failureResponse('Invalid user', null, res);
        }
      });
    } else {
      CommonService.insufficientParameters(res);
    }
  }

  // public updateUser(req: Request | any, res: Response) {
  //   const {
  //     gender,
  //     phoneNumber,
  //     tscFileNumber,
  //     schoolOfPresentPosting,
  //     zone,
  //     nationality,
  //     stateOfOrigin,
  //     lgOfOrigin,
  //     ward,
  //     qualifications: { ...rest },
  //     subjectsTaught,
  //     dateOfPresentSchoolPosting,
  //     cadre,
  //     dateOfLastPromotion,
  //     pfa,
  //     pensionNumber,
  //     professionalStatus,
  //     profilePhoto = '',
  //     tetiaryCertificate = '',
  //     primarySchoolCertificate = '',
  //     secondarySchoolCert = '',
  //     firstAppointmentLetter = '',
  //     lastPromotionLetter = '',
  //     birthCertificate = '',
  //     staffType,
  //     authLevel,
  //   } = req.body;

  //   if (
  //     gender ||
  //     phoneNumber ||
  //     tscFileNumber ||
  //     schoolOfPresentPosting ||
  //     zone ||
  //     nationality ||
  //     stateOfOrigin ||
  //     lgOfOrigin ||
  //     ward ||
  //     rest ||
  //     subjectsTaught ||
  //     dateOfPresentSchoolPosting ||
  //     cadre ||
  //     dateOfLastPromotion ||
  //     pfa ||
  //     pensionNumber ||
  //     professionalStatus ||
  //     tetiaryCertificate ||
  //     primarySchoolCertificate ||
  //     secondarySchoolCert ||
  //     firstAppointmentLetter ||
  //     lastPromotionLetter ||
  //     birthCertificate ||
  //     staffType
  //   ) {
  //     const userFilter = { _id: req.params.id };
  //     this.userService.filterUser(userFilter, (err: any, userData: IUser) => {
  //       if (err) {
  //         CommonService.mongoError(err, res);
  //       } else if (userData) {
  //         if (!userData.modificationNotes) {
  //           userData.modificationNotes = [];
  //         }
  //         userData.modificationNotes.push({
  //           modifiedOn: new Date(Date.now()),
  //           modifiedBy: req.id,
  //           modificationNote: 'User Profile Updated Successfully',
  //         });
  //         if (userData.tscFileNumber) {
  //           return CommonService.UnprocessableResponse(
  //             'Tsc File Number Already Exist, Kindly verify your file number',
  //             res
  //           );
  //         }
  //         const userParams: IUser = {
  //           // _id: req.params.id,

  //           gender: gender ? gender : userData.gender,
  //           phoneNumber: phoneNumber ? phoneNumber : userData.phoneNumber,
  //           schoolOfPresentPosting: schoolOfPresentPosting
  //             ? schoolOfPresentPosting
  //             : userData.schoolOfPresentPosting,
  //           zone: zone ? zone : userData.zone,
  //           nationality: nationality ? nationality : userData.nationality,
  //           stateOfOrigin: stateOfOrigin ? stateOfOrigin : userData.stateOfOrigin,
  //           lgOfOrigin: lgOfOrigin ? lgOfOrigin : userData.lgOfOrigin,
  //           ward: ward ? ward : userData.ward,
  //           qualifications: rest ? rest : userData.qualifications,
  //           subjectsTaught: subjectsTaught ? subjectsTaught : userData.subjectsTaught,
  //           dateOfPresentSchoolPosting: dateOfPresentSchoolPosting
  //             ? dateOfPresentSchoolPosting
  //             : userData.dateOfPresentSchoolPosting,
  //           cadre: cadre ? cadre : userData.cadre,
  //           dateOfLastPromotion: dateOfLastPromotion
  //             ? dateOfLastPromotion
  //             : userData.dateOfLastPromotion,
  //           pfa: pfa ? pfa : userData.pfa,
  //           pensionNumber: pensionNumber ? pensionNumber : userData.pensionNumber,
  //           professionalStatus: professionalStatus
  //             ? professionalStatus
  //             : userData.professionalStatus,
  //           profilePhoto: profilePhoto ? profilePhoto : userData.profilePhoto,
  //           tetiaryCertificate: tetiaryCertificate
  //             ? tetiaryCertificate
  //             : userData.tetiaryCertificate,
  //           primarySchoolCertificate: primarySchoolCertificate
  //             ? primarySchoolCertificate
  //             : userData.primarySchoolCertificate,
  //           secondarySchoolCert: secondarySchoolCert
  //             ? secondarySchoolCert
  //             : userData.secondarySchoolCert,
  //           firstAppointmentLetter: firstAppointmentLetter
  //             ? firstAppointmentLetter
  //             : userData.firstAppointmentLetter,
  //           lastPromotionLetter: lastPromotionLetter
  //             ? lastPromotionLetter
  //             : userData.lastPromotionLetter,
  //           birthCertificate: birthCertificate ? birthCertificate : userData.birthCertificate,
  //           staffType: staffType ? staffType : userData.staffType,
  //           authLevel: authLevel ? authLevel : userData.authLevel,
  //         };

  //         this.userService.updateUser(
  //           { _id: userData._id },
  //           userParams,
  //           (err: any, updatedUserData: IUser | any) => {
  //             if (err) {
  //               logger.error({ message: err, service: 'UserService' });
  //               CommonService.mongoError(err, res);
  //             } else {
  //               updatedUserData
  //                 .populate('schoolOfPresentPosting')
  //                 .exec()
  //                 .populate('profilePhoto')
  //                 .then(async (populatedUserData: any) => {
  //                   const profilePhoto = populatedUserData.profilePhoto
  //                     ? populatedUserData.profilePhoto?.imageUrl
  //                     : '';
  //                   if (schoolOfPresentPosting)
  //                     await this.schoolsService.updateSchool(schoolOfPresentPosting, {
  //                       $push: { listOfStaff: schoolOfPresentPosting },
  //                     });
  //                   return CommonService.successResponse(
  //                     'user update successfull',
  //                     { ...populatedUserData._doc, profilePhoto },
  //                     res
  //                   );
  //                 })

  //                 .catch((err: any) => {
  //                   return CommonService.mongoError(err, res);
  //                 });
  //             }
  //           }
  //         );
  //       } else {
  //         CommonService.failureResponse('invalid user', null, res);
  //       }
  //     });
  //   } else {
  //     CommonService.insufficientParameters(res);
  //   }
  // }

  public getAllUsers(req: Request, res: Response) {
    const {
      ogNumber = '',
      pageNumber = 1,
      pageSize = 15000,
      firstName = '',
      tscFileNumber = '',
      middleName = '',
      lastName = '',
      gradeLevel = '',
      schoolOfPresentPosting = '',
      dateOfPresentSchoolPosting = '',
      dateOfFirstAppointment = '',
      dateOfRetirement = '',
      subjectsTaught,
      sort = 'desc',
      id = '',
      isDeleted = false,
    } = req.query;

    const orConditions: any[] = [];

    // Add conditions for string fields
    if (ogNumber) {
      orConditions.push({ ogNumber: { $regex: ogNumber, $options: 'i' } });
    }
    if (firstName) {
      orConditions.push({ 'staffName.firstName': { $regex: firstName, $options: 'i' } });
    }
    if (middleName) {
      orConditions.push({ 'staffName.middleName': { $regex: middleName, $options: 'i' } });
    }
    if (lastName) {
      orConditions.push({ 'staffName.lastName': { $regex: lastName, $options: 'i' } });
    }
    if (gradeLevel) {
      orConditions.push({ gradeLevel: { $regex: gradeLevel, $options: 'i' } });
    }
    if (tscFileNumber) {
      orConditions.push({ tscFileNumber: { $regex: tscFileNumber, $options: 'i' } });
    }
    if (schoolOfPresentPosting) {
      orConditions.push({
        schoolOfPresentPosting: { $regex: schoolOfPresentPosting, $options: 'i' },
      });
    }
    if (subjectsTaught) {
      orConditions.push({ subjectsTaught: { $in: [subjectsTaught] } });
    }

    // Handle exact matches or comparison queries for non-string fields
    if (dateOfPresentSchoolPosting) {
      orConditions.push({ dateOfPresentSchoolPosting });
    }
    if (dateOfFirstAppointment) {
      orConditions.push({ dateOfFirstAppointment });
    }
    if (dateOfRetirement) {
      orConditions.push({ dateOfRetirement });
    }

    const getAllUsersQuery = orConditions.length > 0 ? { $or: orConditions } : {};

    if (id) {
      getAllUsersQuery['_id'] = { $eq: id };
    }

    const sortQuery = {
      createdAt: sort === 'desc' ? -1 : 1,
    };

    const customLabels = {
      totalDocs: 'itemsCount',
      docs: 'users',
      limit: 'pageSize',
      nextPage: 'next',
      prevPage: 'prev',
      totalPages: 'pageCount',
    };

    const options = {
      page: parseInt(pageNumber as string, 10),
      limit: parseInt(pageSize as string, 10),
      sort: sortQuery,
      populate: ['schoolOfPresentPosting', 'schoolOfPreviousPosting'],
      customLabels,
    };

    this.userService.getAllUser(getAllUsersQuery, options, (err: any, users: IUser) => {
      if (err) {
        logger.error({ message: err, service: 'userService' });
        return CommonService.mongoError(err, res);
      } else {
        CommonService.successResponse('Tescom staff retrieved successfully', { users }, res);
      }
    });
  }

  public resetPassword(req: Request, res: Response) {
    const { phoneNumber, ogNumber, password } = req.body;
    const validatedOgNumber = validateAndFormat(ogNumber, res);
    if (!phoneNumber || !password || !ogNumber)
      return CommonService.failureResponse(
        'No phoneNumber or password or ogNumber provided',
        null,
        res
      );
    this.userService.filterUser(
      {
        ogNumber: validatedOgNumber,
      },
      (err: any, userData: IUser) => {
        if (err || !userData) {
          return CommonService.failureResponse(
            'Something went wrong! or Check your credentials',
            err,
            res
          );
        }
        if (userData.phoneNumber !== phoneNumber)
          return CommonService.failureResponse(
            'Something went wrong! or Check your credentials',
            err,
            res
          );
        const hashedPassword = cryptoJs.AES.encrypt(
          password,
          process.env.CRYPTO_JS_PASS_SEC
        ).toString();
        userData.password = hashedPassword;
        const updateData: IUser = {
          password: userData.password,
        };

        this.userService.updateUser({ _id: userData._id }, updateData, (err: any) => {
          if (err) {
            return CommonService.mongoError(err, res);
          } else {
            return CommonService.successResponse(
              'Password reset successful',
              {
                id: userData._id,
                ogNumber: userData.ogNumber,
                name: userData.staffName.firstName,
              },
              res
            );
          }
        });
      }
    );
  }

  // public resetPassword(req: Request, res: Response) {
  //   // const { id } = req.params;
  //   const { password, token, ogNumber } = req.body;
  //   if (!token || !ogNumber || !password) return CommonService.insufficientParameters(res);
  //   redisCache.get(RESET_PASSWORD + ogNumber, (err: boolean, validToken: string | null) => {
  //     if (err || !validToken) {
  //       return CommonService.failureResponse('Password Link expired try Again!', null, res);
  //     }
  //     this.userService.filterUser(
  //       { ogNumber },
  //       (err: any, userData: any) => {
  //         if (err) return CommonService.mongoError(err, res);
  //         else if (!userData) {
  //           return CommonService.failureResponse('Not Authorized', null, res);
  //         }
  //         const hashedPassword = cryptoJs.AES.encrypt(
  //           password,
  //           process.env.CRYPTO_JS_PASS_SEC
  //         ).toString();
  //         userData.password = hashedPassword;

  //         userData.ModificationNotes.push({
  //           modificationNote: 'Password Updated',
  //           modifiedBy: `${userData.staffName.firstName} - ${userData.staffName.lastName}`,
  //           modifiedOn: new Date(Date.now()),
  //         });
  //         userData.save((err: any, updatedUser: IUser) => {
  //           if (err) return CommonService.mongoError(err, res);
  //           redisCache.del(RESET_PASSWORD + ogNumber, () => {
  //             return CommonService.successResponse(
  //               'User Password updated Successfully',
  //               { id: updatedUser._id },
  //               res
  //             );
  //           });
  //         });
  //       },
  //       true
  //     );
  //   });
  // }

  // public confirmForgotPasswordToken(req: Request, res: Response) {
  //   const { token } = req.params;
  //   if (!token) return CommonService.insufficientParameters(res);
  //   const payload = jwt.verify(token, process.env.JWT_RESET_PASS_SEC!);
  //   if (!payload) return CommonService.failureResponse('Not authorized', null, res);
  //   this.userService.filterUser({ email: payload }, (err: any, userData: IUser | null) => {
  //     if (err) return CommonService.mongoError(err, res);
  //     else if (!userData) {
  //       return CommonService.failureResponse('You are not authorized!', null, res);
  //     }
  //     redisCache.get(RESET_PASSWORD + userData._id, (err: boolean, validToken: string | null) => {
  //       if (err || !validToken) {
  //         return CommonService.failureResponse('Password Link expired try again', null, res);
  //       } else {
  //         return CommonService.successResponse(
  //           'Kindle set a new password',
  //           { id: userData._id, token: token },
  //           res
  //         );
  //       }
  //     });
  //   });
  // }

  public updateUserPassword(req: Request | any, res: Response) {
    const { currentPassword, newPassword, confirmNewPassword } = req.body;
    if (currentPassword && newPassword && confirmNewPassword) {
      const userFilter = { _id: req.params.id };
      this.userService.filterUser(
        userFilter,
        (err: any, userData: IUser) => {
          if (err) {
            CommonService.mongoError(err, res);
          } else if (userData) {
            const hashedPassword = cryptoJs.AES.decrypt(
              userData.password,
              process.env.CRYPTO_JS_PASS_SEC
            );
            console.log(hashedPassword.toString(cryptoJs.enc.Utf8), `this is ${currentPassword}`);
            if (hashedPassword.toString(cryptoJs.enc.Utf8) === currentPassword) {
              if (newPassword === confirmNewPassword) {
                userData.password = cryptoJs.AES.encrypt(
                  newPassword,
                  process.env.CRYPTO_JS_PASS_SEC
                ).toString();

                const hashNewPassword = cryptoJs.AES.encrypt(
                  newPassword,
                  process.env.CRYPTO_JS_PASS_SEC
                ).toString();
                // userData.modificationNotes.push({
                //   modifiedOn: new Date(),
                //   modifiedBy: req.user.id,
                //   modificationNote: 'User password updated',
                // });
                const userParams: IUser = {
                  password: hashNewPassword,
                };

                this.userService.updateUser(
                  { _id: userData._id },
                  userParams,
                  (err: any, updatedUserData: IUser) => {
                    if (err) {
                      return CommonService.mongoError(err, res);
                    } else {
                      const phoneNumber = updatedUserData.phoneNumber;
                      this.smsService
                        .PasswordUpdateNotification({ phoneNumber })
                        .then((result) => {
                          return CommonService.successResponse(
                            'User password updated successfully',
                            { id: updatedUserData._id },
                            res
                          );
                        })
                        .catch((err) => {
                          return CommonService.failureResponse(
                            'SMS Service Service error',
                            err,
                            res
                          );
                        });
                    }
                  }
                );
              } else {
                CommonService.failureResponse('Passwords do not match', null, res);
              }
            } else {
              return CommonService.failureResponse('Invalid current password provided', null, res);
            }
          } else {
            return CommonService.failureResponse('invalid user', null, res);
          }
        },
        true
      );
    } else {
      // error response if some fields are missing in request body
      return CommonService.insufficientParameters(res);
    }
  }

  public forgotPassword(req: Request, res: Response) {
    const { ogNumber } = req.body;
    if (!ogNumber) {
      return CommonService.insufficientParameters(res);
    }
    this.userService.filterUser({ ogNumber: ogNumber }, (err: any, userData: IUser) => {
      if (err || !userData) {
        return CommonService.failureResponse('User does not exist', null, res);
      }

      RedisCache.get(RESET_PASSWORD + userData.ogNumber, (err: boolean, token: string) => {
        let newToken: string;
        if (err) return CommonService.failureResponse('Try Again!', null, res);
        if (!token) {
          newToken = Math.floor(Math.random() * (999999 - 100000) + 100000).toString();
          // const codeExpiration = 15 * 60;
        } else {
          newToken = token;
        }

        // console.log(userData._id)
        const expT = 15 * 60;
        RedisCache.set(RESET_PASSWORD + userData.ogNumber, newToken, expT, (err: boolean) => {
          if (err) {
            return CommonService.failureResponse(
              'Unable to reset Password at this time',
              null,
              res
            );
          }
          const phoneNumber = userData.phoneNumber;
          this.smsService
            .sendResetPasswordToken({ phoneNumber, newToken })
            .then(() => {
              CommonService.successResponse('Password Reset token Sent!', null, res);
            })
            .catch((err: any) => {
              logger.error({ message: 'Phone Service error', service: 'forgetPassword' });
              RedisCache.del(RESET_PASSWORD + userData.ogNumber, () => {
                CommonService.failureResponse(
                  'Unable to Send Password Reset token at the moment!',
                  null,
                  res
                );
              });
            });
        });
      });
    });
  }
}

export default UserController;
