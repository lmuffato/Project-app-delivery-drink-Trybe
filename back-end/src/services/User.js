const md5 = require('md5');
const User = require('../models/User');
const { schemaCreatedUser, schemaLogin } = require('../validations/validations');

const login = async (email, password) => {
  const { error } = schemaLogin.validate({ email, password });

  if (error) {
    return { err: { message: error.message } };
  }

  const passwordEncrypted = md5(password);
  const user = await User.login({ email, password: passwordEncrypted });

  if (user === null) {
    return { err: { message: 'User not found' } };
  }

  return { user };
};

const createUser = async (name, email, password, type) => {
  const { error } = schemaCreatedUser.validate({ name, email, password });

  if (error) {
    return { err: { message: error.message } };
  }

  const passwordEncrypted = md5(password);
  const res = await User.createUser({ name, email, password: passwordEncrypted, type });

  if (res.err) return { err: { message: 'User already registered' } };

  return { res };
};

const listUsers = async (role) => {
  try {
    const users = await User.listUsers(role);
    return { users };
  } catch (error) {
    return { err: error.message };
  }
};

module.exports = {
  login,
  createUser,
  listUsers,
};
