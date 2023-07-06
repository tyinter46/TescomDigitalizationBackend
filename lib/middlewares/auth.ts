import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import { UserLevelEnum } from "utils/enums";
import CommonService from "modules/common/service";
import {IUser} from '../modules/users/model'

// class AuthMiddleWare {
//     public static createToken(user: IUser ){
//         const accessToken = jwt.sign({
//             id: user_id,
//             ogNumber: user.ogNumber,
//             name: user.staffName,
//             isAdmin:
//             user.authLevel === UserLevelEnum.DIT 
//         })
//     }
// }