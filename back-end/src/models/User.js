const { user } = require('../database/models');
const { newToken } = require('../auth/newJWT');

const login = async ({ email, password }) => {
  try {
    const userLogin = await user.findOne({ where: { email, password } });

    const { email: userEmail, name: userName, role: userRole } = userLogin;

    const token = newToken(userEmail, userName, userRole);

    return { userLogin, token };
  } catch (e) {
    return null;
  }
};


const createUser = async ({ name, email, password, type }) => {
  try {
    const newUser = await user.create({ name, email, password, role: type });
    return newUser;
  } catch (e) {
    return { err: e.message };
  }

const findUser = async (email) => {
  const userFound = await user.findOne({ where: { email } });
  return userFound;
};

module.exports = {
  login,
  createUser,
  findUser,
};