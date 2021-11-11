const Joi = require('joi');

const create = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().min(4).required(),
});

const checkId = Joi.string().min(1).required();

const updateById = Joi.object({
  name: Joi.string().min(2),
  email: Joi.string().email(),
  password: Joi.string().min(6),
  role: Joi.string().min(4),
});

module.exports = {
  create,
  checkId,
  updateById,
};
