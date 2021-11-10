const { User } = require('../../database/models');
const AppError = require('../utils/AppError');

const login = async ({ email, password }) => {
  if (!email || !password) {
    throw new AppError(400, 'Invalid data');
  }

  const user = await User.findOne({ where: { email }});

  return user;
};

module.exports = {
  login,
};