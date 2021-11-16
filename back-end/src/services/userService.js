const md5 = require('md5');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const { User } = require('../database/models');

const create = async (name, email, password, role) => {
  const MD5password = md5(password);
  // const SECRET = MD5password;

  const user = await User.create(
    { name, email, password: MD5password, role },
  );
  if (!user) return { status: 500, message: 'Internal Server Error' };

  const { password: _, ...userPayload } = user;
  const token = jwt.sign(userPayload, SECRET);

  return { status: 201, token };
};

module.exports = {
  create,
};
