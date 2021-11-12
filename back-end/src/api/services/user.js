const { User } = require('../../database/models');

const getAllUser = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return { status: 200, data: users };
};

module.exports = {
  getAllUser,
};
