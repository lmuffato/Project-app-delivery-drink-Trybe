const md5 = require('md5');
const User = require('../models/User');
const { schemaCreatedUser } = require('../validations/validations');

const login = async (email, password) => {
  const user = await User.login(email, password);
  if (user === null) {
    return { err: { message: 'User not found' } };
  }
  return { user };
};

const createUser = async (name, email, password) => {
  const passwordEncrypted = md5(password);

  const { error } = schemaCreatedUser.validations(name, email, password);
  if (error) {
    return { err: { message: error.message } };
  }
  const newUser = await User.createUser({ name, email, password: passwordEncrypted });
  return { newUser };
};

module.exports = {
  login,
  createUser,
};