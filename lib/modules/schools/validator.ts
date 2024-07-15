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
};

export default schoolValidatorSchema;
