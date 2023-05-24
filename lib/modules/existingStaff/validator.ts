import Joi from 'joi';

const existingStaffValidationSchema = {
  verifyParamsId: Joi.object().keys({
    existingStaffId: Joi.string().required().length(24).messages({}),
  }),

  verifyQuery: Joi.object().keys({
    id: Joi.string().min(3).max(255),
    ogNum: Joi.string().min(5),
    nameOfOfficer: Joi.string().min(3),
    gradeLevel: Joi.number().max(17).messages({
      'string.max': 'Page size cannot be greeater than 17',
    }),
    dateOfBirth: Joi.string().isoDate(),
    dateOfRetirement: Joi.string().isoDate().optional(),
    dateOfFirstAppointment: Joi.string().isoDate(),

    sort: Joi.string().optional(),
    pageNumber: Joi.number().max(100).messages({
      'string.max': 'Page number cannot be greater than 100',
    }),
    pageSize: Joi.number().max(100).messages({
      'string.max': 'Page size cannot be greater than 100',
    }),
    search: Joi.string(),
  }),
};

export default existingStaffValidationSchema;
