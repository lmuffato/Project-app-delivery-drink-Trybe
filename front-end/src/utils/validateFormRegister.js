import Joi from 'joi';

const minCharactersName = 12;
const minCharactersPassword = 6;

export default (userData) => Joi.object({
  name: Joi.string().min(minCharactersName).required(),
  email: Joi.string().required()
    .email({
      tlds: { allow: ['com', 'net', 'br'] },
    }).required(),
  password: Joi.string().min(minCharactersPassword).required(),
  role: Joi.string().required(),
}).validate(userData);
