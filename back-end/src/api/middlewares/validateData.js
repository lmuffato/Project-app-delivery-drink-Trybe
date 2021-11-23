const Joi = require('joi');

const schema = Joi.object({
  name: Joi.string().min(12).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string(),
});

const errMessage = {
  status: 400,
  message: 'Dados inválidos',
};

module.exports = (req, _res, next) => {
  const result = schema.validate(req.body);

  if (result.error) next(errMessage);

  next();
};
