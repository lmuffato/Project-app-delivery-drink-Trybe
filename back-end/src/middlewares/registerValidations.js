const httpStatus = require('../utils/httpStatus');
const { User } = require('../database/models');
const Joi = require('joi');

const emailNotExists = async (email) => {
  const user = await User.findOne({ where: { email } });
  if (user != null) {
    return false;
  }
  return true
};

const validateRegister = async (req, res, next) => { 
  const { email, password } = req.body; 
  const  registerSchema = Joi.object({ 
    email: Joi
      .string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
      .pattern(new RegExp('\S+@\S+\.\S+'))
      .required(), 
    password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
      .required()
      .min(6), 
  });
  if (await emailExists(email)) {
    return res.status(httpStatus.unauthorized).json({
      message: '',
    });
  }
  const { error } = registerSchema.validate({ email, password });
  if (error) {
    const { message } = error;
    return res.status(httpStatus.badRequest).json({ message });
  }
  return next ();
};

module.exports = {
  validateRegister
};

const Joi = require('joi');
const errorMessages = require('../utils/errorMessages');
const httpStatus = require('../utils/httpStatus');
const { User } = require('../database/models');

const userNotExists = async (email) => {
  const searchResult = await User.findOne({ where: { email } });
  if (searchResult !== null) {
    return { isExist: false };
  }
  return { isExist: true};
};

const validateNewUserData = async (req, res, next) => {
  const { email, password } = req.body;
  const registerSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });
  const { error } = registerSchema.validate({ email, password });
  if (error) {
    const { message } = error;
    return res.status(httpStatus.badRequest).json({ message });
  }
  const { isExist } = await userNotExists(email);
  if (isExist) {
    return res.status(httpStatus.conflict).json({
      message: errorMessages.userExists,
    });
  }

  return next();
};
module.exports = {
  validateNewUserData,
};