const Joi = require('joi');

const validateUser = Joi.object({
  name: Joi.string().required().min(8),
  email: Joi.string().email().required(),
  password: Joi.string().required().length(6),
  role: Joi.string(),
}).required();

module.exports = {
  validateUser
}
