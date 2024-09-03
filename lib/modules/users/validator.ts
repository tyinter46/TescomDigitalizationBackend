import Joi from 'joi';
const strongPasswordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
const stringPassswordError =
  'Password must be strong. At least one upper case alphabet. At least one lower case alphabet. At least one digit. At least one special character. Minimum eight in length';

const userValidatorSchema = {
  signUp: Joi.object().keys({
    phoneNumber: Joi.string().min(14).required(),
    confirmPhoneNumber: Joi.string().required(),
    ogNumber: Joi.string().min(6).required(),
    password: Joi.string().min(8).regex(strongPasswordRegex).required().messages({
      'string.min': 'Must have at least 8 characters',
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
    ogNumber: Joi.string().required(),
  }),

  forgotPassword: Joi.object().keys({
    ogNumber: Joi.string().required(),
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
    ogNumber: Joi.string().min(7).required().messages({
      'string.min': 'Invalid ogNumber Number',
      'string.required': 'ogNumber cannot be empty',
    }),
  }),

  resendConfirmAccountToken: Joi.object().keys({
    ogNumber: Joi.string().min(7).required().messages({
      'string.min': 'Invalid ogNumber Number',
      'string.required': 'ogNumber cannot be empty',
    }),
  }),

  verifyParamsId: Joi.object().keys({
    id: Joi.string().length(24).required().messages({
      'string.length': 'Invalid Params Id',
      'string.required': 'Params Id cannot be empty',
    }),
  }),

  updateUser: Joi.object().keys({
    gender: Joi.string().required(),
    phoneNumber: Joi.string().required().messages({
      'string.required': 'Phone number cannot be empty',
    }),
    tscFileNumber: Joi.string().required().messages({
      'string.required': 'tscFileNumber number cannot be empty',
    }),
    tetiaryCertificate: Joi.alternatives().conditional('staffType', {
      is: 'Teaching',
      then: Joi.string().required(),
    }),
    residentialAddress: Joi.string().required().messages({
      'string.required': 'Residential address cannot be empty',
    }),
    primarySchoolCertificate: Joi.alternatives().conditional('staffType', {
      is: 'Teaching',
      then: Joi.string().required(),
    }),
    secondarySchoolCert: Joi.alternatives().conditional('staffType', {
      is: 'Teaching',
      then: Joi.string().required(),
    }),
    firstAppointmentLetter: Joi.alternatives().conditional('staffType', {
      is: 'Teaching',
      then: Joi.string().required(),
    }),
    lastPromotionLetter: Joi.string(),
    birthCertificate: Joi.alternatives().conditional('staffType', {
      is: 'Teaching',
      then: Joi.string().required(),
    }),
    schoolOfPresentPosting: Joi.string().required().messages({
      'string.required': 'School of present posting cannot be empty',
    }),
    zone: Joi.string().required().messages({
      'string.required': 'zone cannot be empty',
    }),
    profilePhoto: Joi.string().optional(),

    nationality: Joi.string().required().messages({
      'string.required': 'Nationality cannot be empty',
    }),
    stateOfOrigin: Joi.string().required().messages({
      'string.required': 'State of origin cannot be empty',
    }),
    lgOfOrigin: Joi.string().required().messages({
      'string.required': 'Local government of origin cannot be empty',
    }),
    ward: Joi.string().required().messages({
      'string.required': 'ward cannot be empty',
    }),
    qualifications: Joi.array().required().messages({
      'string.required': 'qualifications cannot be empty',
    }),
    subjectsTaught: Joi.array().required().messages({
      'string.required': 'subjects taught cannot be empty',
    }),
    dateOfPresentSchoolPosting: Joi.date().required().messages({
      'string.required': 'Date cannot be empty',
    }),
    cadre: Joi.string().required().messages({
      'string.required': 'Cadre cannot be empty',
    }),
    dateOfLastPromotion: Joi.string().required().messages({
      'string.required': 'Date of Last Promotion cannot be empty',
    }),
    pfa: Joi.string().required().messages({
      'string.required': 'PFA cannot be empty',
    }),
    pensionNumber: Joi.number().required().messages({
      'string.required': 'Pension Number cannot be empty',
    }),
    professionalStatus: Joi.string().required().messages({
      'string.required': 'Professional Status cannot be empty',
    }),
    dateOfFirstAppointmentAtTescom: Joi.string().optional(),
    dateOnGradeLevelEight: Joi.string().optional(),

    staffType: Joi.string().required().messages({
      'string.required': 'Pension Number cannot be empty',
    }),
    authLevel: Joi.string(),
    remark: Joi.string().optional(),
    notifications: Joi.string().optional(),
  }),
};

export default userValidatorSchema;
