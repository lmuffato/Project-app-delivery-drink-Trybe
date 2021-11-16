const jwt = require('jsonwebtoken');
const { users } = require('../../database/models');
require('dotenv').config();

const { SECRET } = process.env;

const login = async (user) => {
  // eslint-disable-next-line no-unused-vars
  const { password: _, ...userPayload } = user;

  const token = jwt.sign(userPayload, SECRET);

  return { token, role: user.role };
};

const create = async ({ email, password, name }) => {
  const response = await users.create({ email, password, name });

  return response;
};

module.exports = {
  login,
  create,
};