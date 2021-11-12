const { User } = require('../../database/models');

const getAllUser = async () => {
  // const users = await User.findAll({ attributes: { exclude: ['password'] } });
  const users = await User.findAll();
  return { status: 200, data: users };
};

module.exports = {
  getAllUser,
};
