const jwt = require('jsonwebtoken');
require('dotenv').config();

const { SECRET } = process.env;

const login = async (user) => {
  // eslint-disable-next-line no-unused-vars
  const { password: _, ...userPayload } = user;

  const token = jwt.sign(userPayload, SECRET);

  return { token, role: user.role };
};

module.exports = {
  login,
};