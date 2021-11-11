const Joi = require('joi');
const errorMessages = require('../utils/errorMessages');
const httpStatus = require('../utils/httpStatus');
const { User } = require('../database/models');

const emailExists = async (email) => {
  const user = await User.findOne({ where: { email } });
  if (user === null) {
    return false;
  }
  return true;
};

const validateLogin = async (req, res, next) => { 
  const { email, password } = req.body; 
  const loginSchema = Joi.object({ 
    email: Joi.string().email().required(), 
    password: Joi.string().min(6).required(), 
  });
  if (await !emailExists(email)) {
    return res.status(httpStatus.unauthorized).json({
      message: errorMessages.invalidEmail,
    });
  }
  const { error } = loginSchema.validate({ email, password });
  if (error) {
    const { message } = error;
    return res.status(httpStatus.badRequest).json({ message });
  }
  return next();
};

module.exports = {
  validateLogin,
};
