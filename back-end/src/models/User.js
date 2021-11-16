const { user } = require('../database/models');

const login = async ({ email, password }) => {
  try {
    const userLogin = await user.findOne({ where: { email, password } });
    return userLogin;
  } catch (e) {
    console.log(e);
    return null;
  }
};

const createUser = async ({ name, email, password }) => {
  const newUser = await user.create({ name, email, password });
  return newUser;
};

module.exports = {
  login,
  createUser,
};