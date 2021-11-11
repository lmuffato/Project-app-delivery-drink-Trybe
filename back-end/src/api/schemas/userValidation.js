const Joi = require('joi');

const loginSchema = Joi.object({
  password: Joi.string()
    .min(6)
    .required(),

  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
});

  const validateLogin = ({ email, password }) => loginSchema.validate({
      email,
      password,
    });

module.exports = {
  validateLogin,
};
