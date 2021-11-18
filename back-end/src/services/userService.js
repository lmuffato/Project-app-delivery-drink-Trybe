const md5 = require('md5');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const { User } = require('../database/models');

const CUSTOMER = 'customer';
const SECRET = fs.readFileSync(path.join(__dirname, '../../jwt.evaluation.key'), 'utf8');

const create = async (name, email, password) => {
  const MD5password = md5(password);

  const user = await User.create(
    { name, email, password: MD5password, role: CUSTOMER },
  );
  if (!user) return { status: 500, message: 'Internal Server Error' };

  const { password: _, ...userPayload } = user;
  const token = jwt.sign(userPayload, SECRET);

  return { status: 201, token };
};

module.exports = {
  create,
};
