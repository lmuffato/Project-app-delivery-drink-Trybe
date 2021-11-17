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

const findUser = async (email) => {
  const userFound = await user.findOne({ where: { email } });
  return userFound;
};

const createUser = async ({ name, email, password }) => {
  const newUser = await user.create({ name, email, password });
  return newUser;
};

const listUsers = async (role) => (
  role
    ? user.findAll({ where: { role } })
    : user.findAll()
);

module.exports = {
  login,
  createUser,
  findUser,
  listUsers,
};
