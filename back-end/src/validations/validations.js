const Joi = require('joi');

const schemaCreatedUser = Joi.object({
  name: Joi.string()
    .max(12)
    .required(),
  email: Joi.string() 
    .email()
    .required(),
  password: Joi.string()
    .min(6)
    .required(),
});

const schemaLogin = Joi.object({
  email: Joi.string() 
  .email()
  .required(),
  password: Joi.string()
  .min(6)
  .required(),
});

module.exports = {
  schemaCreatedUser,
  schemaLogin,
};
