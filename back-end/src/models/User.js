const { user } = require('../database/models');

const login = async (email, password) => {
  const userLogin = await user.findOne({ where: { email, password } });
  console.log(userLogin);
  return userLogin;
};

const createUser = async (name, email, password) => {
  const newUser = await user.create({ name, email, password });
  return newUser;
};

module.exports = {
  login,
  createUser,
};