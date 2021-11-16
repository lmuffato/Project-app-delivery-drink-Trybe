const { StatusCodes: { CONFLICT, BAD_REQUEST, NOT_FOUND } } = require('http-status-codes');
const { users } = require('../../database/models');
const { userSchema } = require('../validations/schema');

const validUser = async (req, _res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) return next({ statusCode: BAD_REQUEST, message: error.message });
  const emailAlreadyExists = await users.findOne({ where: { email: req.body.email } });
  if (emailAlreadyExists) return next({ statusCode: CONFLICT, message: 'User already registered' });
next();
};

const checkIfUserExists = async (req, _res, next) => {
const { id } = req.params;
  const user = await users.findByPk(id);
  if (!user) return next({ statusCode: NOT_FOUND, message: 'User does not exist' });
  next();
};

module.exports = { validUser, checkIfUserExists };