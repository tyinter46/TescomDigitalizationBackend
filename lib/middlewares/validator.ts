import { NextFunction, Request, Response } from 'express';
import { Schema, ValidationErrorItem } from 'joi';
import CommonService from 'modules/common/service';

const ValidationMiddleware = (schema: Schema, property: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[property]);
    const valid = error == null;
    if (valid) {
      next();
    } else {
      const { details } = error;
      const message =
        details && Array.isArray(details)
          ? details.map((i: ValidationErrorItem) => i.message).join(',')
          : details;

      return CommonService.UnprocessableResponse(message as any, res);
    }
  };
};

export default ValidationMiddleware;
