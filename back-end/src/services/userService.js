const User = require('../database/models')
const { createJWT } = require('../auth/authJWT');

const login = async (email, password) => {
  const user = await User.findOne({ where: { email, password } })
  if (user === null) return { status: 404, message: { message: 'Incorrect username or password' } }
  const { name, role } = user;
  const token = createJWT({ name, email, role });
  return { status: 200, message: { token } };
}

module.exports = {
  login,
};
