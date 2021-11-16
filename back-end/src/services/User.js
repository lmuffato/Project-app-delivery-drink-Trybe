const md5 = require('md5');
const User = require('../models/User');
const { schemaCreatedUser, schemaLogin } = require('../validations/validations');

const login = async (email, password) => {
  const { error } = schemaLogin.validate({ email, password });
  if (error) {
    return { err1: { message: error.message } };
  }

  const user = await User.login(email, password);
  if (user === null) {
    return { err2: { message: 'User not found' } };
  }
  return { user };
};

const findUser = async (email) => {
  const user = await User.findUser(email);
  return user;
};

const createUser = async (name, email, password) => {
  const { error } = schemaCreatedUser.validate({ name, email, password });
  if (error) {
    return { err: { message: error.message } };
  }
  if (findUser) {
    return { err: { message: 'Usuário já cadastrado' } };
  }
  const passwordEncrypted = md5(password);
  const newUser = await User.createUser({ name, email, password: passwordEncrypted });
  return { newUser };
};

module.exports = {
  login,
  createUser,
};