const md5 = require('md5');
const { users } = require('../../database/models');
const userValidation = require('../schemas/userValidation');

const HTTP_NOT_FOUND_STATUS = 404;
const HTTP_ERROR_STATUS = 400;

module.exports = async (req, res, next) => {
  const { email, password } = req.body;

  const validations = userValidation.validateLogin({ email, password });
  
  if (validations.error) {
    return res.status(HTTP_ERROR_STATUS).json({
      message: validations.error.details,
  });
  }

  const alreadyExists = await users.findOne({ where: { email } });

  if (!alreadyExists) {
    return res.status(HTTP_NOT_FOUND_STATUS).json({ message: 'User not registered' });
  } 

  if (alreadyExists.password !== md5(password)) {
    return res.status(HTTP_NOT_FOUND_STATUS).json({ message: 'Invalid Password' });
  }

  req.user = alreadyExists;

  next();
};