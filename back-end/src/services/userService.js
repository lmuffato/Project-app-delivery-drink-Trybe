const User = require('../database/models')
const createJWT = require('../auth/createJWT');

const login = async (email, password) => {
  const user = await User.findOne({ where: { email, password } })
  if (user === null) return { status: 401, message: { message: 'Incorrect username or password' } }
  const { password, ...userWithoutPassword } = user;
  const token = createJWT(userWithoutPassword);
  return { status: 200, message: { token } };
}

module.exports = {
  login,
};
