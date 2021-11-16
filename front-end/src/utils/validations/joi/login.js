import Joi from 'joi';

const MIN_PASSWORD_LENGTH = 6;
const schema = Joi.object({
  email: Joi
    .string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi
    .string()
    .min(MIN_PASSWORD_LENGTH)
    .required(),
});

export default schema;
