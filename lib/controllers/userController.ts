import dotenv from 'dotenv';
import { Request, Response } from 'express';
import { AccountSourceEnum, AccountStatusEnum } from '../utils/enums';
import CommonService from '../modules/common/service';
import { RESET_PASSWORD } from '../utils/constants';
import { IUser } from '../modules/users/model';
import UserService from '../modules/users/service';
import jwt from 'jsonwebtoken';
import RedisCache from '../config/redisCache';
import MailService from '../modules/mailer/service';
import { IForgotPassword } from '../modules/mailer/model';
import logger from '../config/logger';
import cryptoJS from 'crypto-js';
import redisCache from '../config/redisCache';
import { IExistingStaff } from 'modules/existingStaff/model';

dotenv.config();

class UserController {
  private userService: UserService = new UserService();
  private mailService: MailService = new MailService();

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

  public updateUser(req: Request | any, res: Response) {
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
      qualifications,
      subjectTaught,
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
      qualifications ||
      subjectTaught ||
      dateOfPresentSchoolPosting ||
      cadre ||
      dateOfLastPromotion ||
      pfa ||
      pensionNumber ||
      professionalStatus ||
      profilePhoto ||
      tetiaryCertificate ||
      primarySchoolCertificate ||
      secondarySchoolCert ||
      firstAppointmentLetter ||
      lastPromotionLetter ||
      birthCertificate ||
      staffType
    ) {
      const userFilter = { _id: req.params.id };
      this.userService.filterUser(userFilter, (err: any, userData: IUser) => {
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

          const userParams: IUser = {
            _id: req.params.id,

            gender: gender ? gender : userData.gender,
            phoneNumber: phoneNumber ? phoneNumber : userData.phoneNumber,
            schoolOfPresentPosting: schoolOfPresentPosting
              ? schoolOfPresentPosting
              : userData.schoolOfPresentPosting,
            zone: zone ? zone : userData.zone,
            nationality: nationality ? nationality : userData.nationality,
            stateOfOrigin: stateOfOrigin ? stateOfOrigin : userData.stateOfOrigin,
            lgOfOrigin: lgOfOrigin ? lgOfOrigin : userData.lgOfOrigin,
            ward: ward ? ward : userData.ward,
            qualifications: qualifications ? qualifications : userData.qualifications,
            subjectTaught: subjectTaught ? subjectTaught : userData.subjectTaught,
            dateOfPresentSchoolPosting: dateOfPresentSchoolPosting
              ? dateOfPresentSchoolPosting
              : userData.dateOfPresentSchoolPosting,
            cadre: cadre ? cadre : userData.cadre,
            dateOfLastPromotion: dateOfLastPromotion
              ? dateOfLastPromotion
              : userData.dateOfLastPromotion,
            pfa: pfa ? pfa : userData.pfa,
            pensionNumber: pensionNumber ? pensionNumber : userData.pensionNumber,
            professionalStatus: professionalStatus
              ? professionalStatus
              : userData.professionalStatus,
            profilePhoto: profilePhoto ? profilePhoto : userData.profilePhoto,
            tetiaryCertificate: tetiaryCertificate
              ? tetiaryCertificate
              : userData.tetiaryCertificate,
            primarySchoolCertificate: primarySchoolCertificate
              ? primarySchoolCertificate
              : userData.primarySchoolCertificate,
            secondarySchoolCert: secondarySchoolCert
              ? secondarySchoolCert
              : userData.secondarySchoolCert,
            firstAppointmentLetter: firstAppointmentLetter
              ? firstAppointmentLetter
              : userData.firstAppointmentLetter,
            lastPromotionLetter: lastPromotionLetter
              ? lastPromotionLetter
              : userData.lastPromotionLetter,
            birthCertificate: birthCertificate ? birthCertificate : userData.birthCertificate,
            staffType: staffType ? staffType : userData.staffType,
          };
          
          this.userService.updateUser(userParams, (err: any) => {
            if (err) {
              logger.error({ message: err, service: 'UserService' });
              CommonService.mongoError(err, res);
            } else {
              CommonService.successResponse('update user successfull', null, res);
            }
          });
        } else {
          CommonService.failureResponse('invalid user', null, res);
        }
      });
    } else {
      CommonService.insufficientParameters(res);
    }
               }

  public getAllUsers(req: Request, res: Response) {
    const {
      ogNumber = '',
      // // accountStatus = AccountStatusEnum.PENDING,
      pageNumber = 1,
      pageSize = 10,
      firstName = '',
      tscFileNumber = '',
      middleName = '',
      lastName = '',
      gradeLevel = '',
      // dateOfBirth = '',
      // dateOfFirstAppointment = '',
      // dateOfRetirement = '',
      sort = 'desc',
      id = '',
      isDeleted = false,
    } = req.query;

    /*Queries**/

    const orConditions: any[] = [];

    const query = {
      ogNumber: { $regex: ogNumber, $options: 'i' },

      $or: [
        { 'staffName.firstName': { $regex: firstName, $options: 'i' } },
        { 'staffName.lastName': { $regex: firstName, $options: 'i' } },
        { 'staffName.middleName': { $regex: firstName, $options: 'i' } },
        { gradeLevel: { $regex: gradeLevel, $options: 'i' } },
        { tscFileNumber: { $regex: tscFileNumber, $options: 'i' } },
        // { dateOfBirth: { $regex: dateOfBirth, $options: 'i' } },
        // { dateOfFirstAppointment: { $regex: dateOfFirstAppointment, $options: 'i' } },
        // { dateOfRetirement:{ $regex: dateOfRetirement, $options: 'i' } }
      ],
    };

    if (id) {
      query['_id'] = { $eq: id };
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
      srt: sortQuery,
      populate: [],
      customLabels,
    };

    this.userService.getAllUser(query, options, (err: any, users: IUser) => {
      if (err) {
        logger.error({ message: err, service: 'userService' });
        return CommonService.mongoError(err, res);
      } else {
        CommonService.successResponse('Existing Staff retrieved successsfully', users, res);
      }
    });
  }

  public resetPassword(req: Request, res: Response) {
    const { id } = req.params;
    const { password, token } = req.body;
    if (!token || !id || !password) return CommonService.insufficientParameters(res);
    redisCache.get(RESET_PASSWORD + id, (err: boolean, validToken: string | null) => {
      if (err || !validToken) {
        return CommonService.failureResponse('Password Link expired try Again!', null, res);
      }
      this.userService.filterUser(
        { _id: id },
        (err: any, userData: any) => {
          if (err) return CommonService.mongoError(err, res);
          else if (!userData) {
            return CommonService.failureResponse('Not Authorized', null, res);
          }
          const hashedPassword = CryptoJS.AES.encrypt(
            password,
            process.env.CRYPTO_JS_PASS_SEC
          ).toString();
          userData.password = hashedPassword;
          userData.modificationNotes.push({
            modificationNote: 'Password Updated',
            modifiedBy: `${userData.name.firstName} - ${userData.name.lastName}`,
            modifiedOn: new Date(Date.now()),
          });
          userData.save((err: any, updatedUser: IUser) => {
            if (err) return CommonService.mongoError(err, res);
            redisCache.del(RESET_PASSWORD + id, () => {
              return CommonService.successResponse(
                'User Password updated Successfully',
                { id: updatedUser._id },
                res
              );
            });
          });
        },
        true
      );
    });
  }

  public confirmForgotPasswordToken(req: Request, res: Response) {
    const { token } = req.params;
    if (!token) return CommonService.insufficientParameters(res);
    const payload = jwt.verify(token, process.env.JWT_RESET_PASS_SEC!);
    if (!payload) return CommonService.failureResponse('Not authorized', null, res);
    this.userService.filterUser({ email: payload }, (err: any, userData: IUser | null) => {
      if (err) return CommonService.mongoError(err, res);
      else if (!userData) {
        return CommonService.failureResponse('You are not authorized!', null, res);
      }
      redisCache.get(RESET_PASSWORD + userData._id, (err: boolean, validToken: string | null) => {
        if (err || !validToken) {
          return CommonService.failureResponse('Password Link expired try again', null, res);
        } else {
          return CommonService.successResponse(
            'Kindle set a new password',
            { id: userData._id, token: token },
            res
          );
        }
      });
    });
  }

  public forgotPassword(req: Request, res: Response) {
    const { email } = req.body;
    if (!email) {
      return CommonService.insufficientParameters(res);
    }
    this.userService.filterUser({ email }, (err: any, userData: IUser | null) => {
      if (err || !userData) {
        return CommonService.failureResponse('User does not exist', null, res);
      }

      RedisCache.get(RESET_PASSWORD + userData.division, (err: boolean, token: string) => {
        let newToken: string;
        if (err) return CommonService.failureResponse('Try Again!', null, res);
        if (!token) {
          const tokenSecret = process.env.JWT_RESEST_PASS_SEC!;
          newToken = jwt.sign(userData.email, tokenSecret);
        } else {
          newToken = token;
        }
        const forgetPasswordParams: IForgotPassword = {
          name: userData.staffName.firstName,
          email: userData.email,
          token: newToken,
        };

        const expT = 15 * 60;
        RedisCache.set(RESET_PASSWORD + userData._id, newToken, expT, (err: boolean) => {
          if (err) {
            return CommonService.failureResponse(
              'Unable to reset Password at this time',
              null,
              res
            );
          }
          this.mailService
            .sendPasswordReset(forgetPasswordParams)
            .then(() => {
              CommonService.successResponse('Password Reset Link Sent!', null, res);
            })
            .catch((err: any) => {
              logger.error({ message: 'Mailer Service error', service: 'forgetPassword' });
              RedisCache.del(RESET_PASSWORD + userData._id, () => {
                CommonService.failureResponse(
                  'Unable to Send Password Reset Link at the moment!',
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
