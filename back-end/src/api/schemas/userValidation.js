const Joi = require('joi');

const loginSchema = Joi.object({
  password: Joi.string()
    .min(6)
    .required(),

  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
});

const resgisterSchema = Joi.object({
  name: Joi.string()
  .min(12)
  .required(),

  password: Joi.string()
    .min(6)
    .required(),

  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'br'] } })
    .required(),
});

const validateLogin = ({ email, password }) => loginSchema.validate({
    email,
    password,
  });

const validateRegistration = ({ email, password, name }) => resgisterSchema.validate({
  email,
  password,
  name,
});

module.exports = {
  validateLogin,
  validateRegistration,
};
