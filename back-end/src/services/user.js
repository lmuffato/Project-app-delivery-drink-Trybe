const { User } = require('../database/models');

const getAllUser = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return { status: 200, data: users };
};

// const createUser = async ({ name, email, password, role }) => {
//   const user = await User.created(name, email, password, role);

//   return { status: 201, data: user };
// };

module.exports = {
  getAllUser,
  // createUser,
};