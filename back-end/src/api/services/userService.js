const jwt = require('jsonwebtoken');
const md5 = require('md5');
const { users } = require('../../database/models');
require('dotenv').config();

const SECRET = process.env.SECRET || 'secret_key';

const login = async (user) => {
  const { password: _, ...userPayload } = user;

  const token = jwt.sign(userPayload, SECRET);

  return { name: user.name, email: user.email, token, role: user.role };
};

const create = async ({ email, requestPassword, name, requestRole }) => {
  let role = 'customer';
  if (requestRole) role = requestRole;
  const password = md5(requestPassword);

  const response = await users.create({ email, password, name, role });
  return response;
};

const getUsers = async ({ role }) => {
  const response = await users.findAll({ where: { role } });
  return response;
};

module.exports = {
  login,
  create,
  getUsers,
};