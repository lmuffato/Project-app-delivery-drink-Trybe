const httpStatus = require('../utils/httpStatus');
const { User } = require('../database/models');
const Joi = require('joi');

const emailExists = async (email) => {
  const user = await User.findOne({ where: { email } });
  if (user === null) {
    return false;
  }
  true
};

const validateLogin = async (req, res, next) => { 
  const { email, password } = req.body; 
  const  loginSchema = Joi.object({ 
    email: Joi
      .string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
      .pattern(new RegExp('\S+@\S+\.\S+'))
      .required(), 
    password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
      .required(), 
  });
  if (await !emailExists(email)) {
    return res.status(httpStatus.unauthorized).json({
      message: '',
    });
  }
  const { error } = loginSchema.validate({ email, password });
  if (error) {
    const { message } = error;
    return res.status(httpStatus.badRequest).json({ message });
  }
  return next ();
};

module.exports = {
  validateLogin
};
