import Joi from 'joi';

const minCharactersName = 12;
const minCharactersPassword = 6;

const initialData = {
  name: '',
  email: '',
  password: '',
  role: 'client',
};

const schema = Joi.object({
  name: Joi.string().min(minCharactersName).required(),
  email: Joi.string().required()
    .email({
      tlds: { allow: ['com', 'net', 'br'] },
    }).required(),
  password: Joi.string().min(minCharactersPassword).required(),
  role: Joi.string().required(),
});

const explicitCheck = {
  name: false,
  email: false,
  password: false,
};

export { initialData, schema, explicitCheck };
