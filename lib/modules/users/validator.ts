import Joi from "joi";
import { AccountSourceEnum, AccountStatusEnum, DivisionsEnum, GenderEnum, ProfessionalStatusEnum, ServiceStatusEnum, StaffTypeEnum, UserLevelEnum, ZonesEnum } from 'utils/enums';

const strongPasswordRegex =  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
const stringPassswordError =
  'Password must be strong. At least one upper case alphabet. At least one lower case alphabet. At least one digit. At least one special character. Minimum eight in length';

  const userValidatorSchema = {
    
    signUp: Joi.object().keys({
      

        phoneNumber: Joi.string().min(14).required(),
        ogNumber: Joi.string().min(7).required(),
        password: Joi.string().min(8).regex(strongPasswordRegex).required().messages({
            'string.min' : 'Must have at least 8 characters',
            'object.regex': 'Must have at least 8 characters',
            'string.pattern.base': stringPassswordError,
        }),
    }), 
    verifyAuthToken: Joi.object().keys({
        code: Joi.string().length(4).required().messages({
            'string.length': 'Invalid Params Id',
            'string.required': 'Params Id cannot be empty',
          }),
    }),
    verifyForgotPasswordToken: Joi.object().keys({
        token: Joi.string().required().messages({
            'string.required': 'Token is required',
        }),
    }),

    resetPassword: Joi.object().keys({
        password: Joi.string().min(8).regex(strongPasswordRegex).required().messages({
            'string.min': 'Must have at least 8 characters',
            'object.regex': 'Must have at least 8 characters',
            'string.pattern.base': stringPassswordError,
        }),
        token: Joi.string().required().messages({
            'string.required': 'Token is required',
    }),
  }),

    forgotPassword: Joi.object().keys({
        email: Joi.string().email().required(),
    }),

    login: Joi.object().keys({
        ogNumber: Joi.string().required(),
        password: Joi.string().min(8).regex(strongPasswordRegex).required().label('Password').messages({
          'string.min': 'Must have at least 8 characters',
          'object.regex': 'Must have at least 8 characters',
          'string.pattern.base': stringPassswordError,
        }),
      }),
      confirmAccount: Joi.object().keys({
        code: Joi.string().min(6).required().messages({
          'string.min': 'Invalid Confirmation Code',
          'string.required': 'Confirmation Code cannot be empty',
        }),
      }),
      verifyParamsId: Joi.object().keys({
        id: Joi.string().length(24).required().messages({
          'string.length': 'Invalid Params Id',
          'string.required': 'Params Id cannot be empty',
        }),
      }),
}

export default userValidatorSchema;