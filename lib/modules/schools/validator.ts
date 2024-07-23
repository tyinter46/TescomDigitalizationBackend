import Joi from 'joi';

const schoolValidatorSchema = {
  updateSchool: Joi.object().keys({
    nameOfSchool: Joi.string().required().messages({
      'string.required': 'Name of School cannot be empty',
    }),
    category: Joi.string(),
    address: Joi.string(),
    location: Joi.string(),
    zone: Joi.string().required().messages({
      'string.required': 'zone cannot be empty',
    }),
    division: Joi.string().required(),
    listOfStaff: Joi.array(),
    princiPal: Joi.string(),
    vicePrincipalAdmin: Joi.string(),
    vicePrincipalAcademics: Joi.string(),
    latitude: Joi.string(),
    longitude: Joi.string(),
  }),

  createSchool: Joi.object().keys({
    nameOfSchool: Joi.string().required().messages({
      'string.required': 'Name of School cannot be empty',
    }),
    category: Joi.string().required().messages({
      'string.required': 'category cannot be empty',
    }),
    address: Joi.string(),
    principal: Joi.string(),
    vicePrincipalAdmin: Joi.string(),
    vicePrincipalAcademics: Joi.string(),
    location: Joi.string().required().messages({
      'string.required': 'location cannot be empty',
    }),
    zone: Joi.string().required().messages({
      'string.required': 'zone cannot be empty',
    }),
    division: Joi.string().required(),

    latitude: Joi.string(),
    longitude: Joi.string(),
  }),
  verifyParamsId: Joi.object().keys({
    id: Joi.string().length(24).required().messages({
      'string.length': 'Invalid Params Id',
      'string.required': 'Params Id cannot be empty',
    }),
  }),
};

export default schoolValidatorSchema;
