const Joi = require('joi');
const errorMessages = require('../utils/errorMessages');
const httpStatus = require('../utils/httpStatus');
const { User } = require('../database/models');

const emailNotExists = async (email) => {
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
  const { isExist } = await emailNotExists(email);
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