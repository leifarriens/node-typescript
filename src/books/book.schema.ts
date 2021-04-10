import Joi from 'joi';

export const BookSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  description: Joi.string(),
  authors: Joi.array().items(Joi.string()).required(),
});
