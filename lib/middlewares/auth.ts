import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { UserLevelEnum } from '../utils/enums';
import CommonService from '../modules/common/service';
import { IUser } from '../modules/users/model';
import { ISchools } from '../modules/schools/model';
class AuthMiddleWare {
  public static createToken(user: IUser, school: ISchools) {
    const accessToken = jwt.sign(
      {
        id: user._id,
        ogNumber: user.ogNumber,
        name: user.staffName,
        schoolId: school?._id,
        schoolName: school?.nameOfSchool,
        isAdmin:
          user.authLevel === UserLevelEnum.DIT ||
          user.authLevel === UserLevelEnum.DPRS ||
          user.authLevel === UserLevelEnum.DMS ||
          user.authLevel == UserLevelEnum.DAS ||
          user.authLevel === UserLevelEnum.ZONALSECREATARY ||
          user.authLevel === UserLevelEnum.PRINCIPAL,
      },
      process.env.JWT_SEC,
       ()=>process.env.TOKEN_VALIDATION_DURATION 
    );
    return accessToken;
  }

  public static verifyToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (authHeader) {
      const token = authHeader.split(' ')[1];
      jwt.verify(token, process.env.JWT_SEC, (err, user: IUser) => {
        if (err) {
          console.log(err.message);
          return CommonService.forbiddenResponse('Token is invalid or expired!', res);
        }
        req.user = user;
        next();
      });
    } else {
      return CommonService.unAuthorizedResponse('You are not authenticated!', res);
    }
  }

  public static verifyTokenAndAuthorization(req: Request, res: Response, next: NextFunction) {
    AuthMiddleWare.verifyToken(req, res, () => {
      if (req.user?._id === req.params.id || req.user?.isAdmin) {
        next();
      } else {
        return CommonService.forbiddenResponse(
          'You are not allowed to perform this operation!',
          res
        );
      }
    });
  }

  public static verifyTokenAndAdmin(req: Request, res: Response, next: NextFunction) {
    AuthMiddleWare.verifyToken(req, res, () => {
      if (req.user?.isAdmin) {
        next();
      } else {
        return CommonService.forbiddenResponse(
          'You are not allowed to perform this operation!',
          res
        );
      }
    });
  }

  public static verifyPrincipalAndAdmin(req: Request, res: Response, next: NextFunction) {
    AuthMiddleWare.verifyToken(req, res, () => {
      if (req.user?.schoolOfPresentPosting?._id == req.school?._id && req.user?.isAdmin) {
        next();
      } else {
        return CommonService.forbiddenResponse(
          'You are not allowed to perform this operation!',
          res
        );
      }
    });
  }
}

export default AuthMiddleWare;
