const { users } = require('../../database/models');
const userValidation = require('../schemas/userValidation');

const HTTP_ERROR_STATUS = 400;
const HTTP_CONFLICT_STATUS = 409;

module.exports = async (req, res, next) => {
  const { email, password, name } = req.body;

  const validations = userValidation.validateRegistration({ email, password, name });
  
  if (validations.error) {
    return res.status(HTTP_ERROR_STATUS).json({
      message: validations.error.details,
  });
  }

  const alreadyExists = await users.findOne({ where: { email } });

  if (alreadyExists) {
    return res.status(HTTP_CONFLICT_STATUS).json({ message: 'User already registered' });
  }

  next();
};