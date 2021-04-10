import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';

export const validation = (objectSchema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction): Response => {
    const { body } = req;

    const { error } = objectSchema.validate(body);
    const valid = error == null;

    if (!valid) {
      return res.status(400).json(error.details);
    }

    next();
  };
};
