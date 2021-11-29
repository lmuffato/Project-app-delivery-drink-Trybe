const md5 = require('md5');
const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const CUSTOMER = 'customer';

const SECRET = 'secret_key';

const create = async (name, email, password) => {
  const MD5password = md5(password);

  const user = await User.create({
    name,
    email,
    password: MD5password,
    role: CUSTOMER,
  });
  if (!user) return { status: 500, message: 'Internal Server Error' };

  const { password: _, ...userPayload } = user.dataValues;
  const token = jwt.sign(userPayload, SECRET);
  const data = {
    name: user.dataValues.name,
    email: user.dataValues.email,
    role: user.dataValues.role,
  };

  return { status: 201, token, data };
};

const getUser = async (email) => {
  const user = await User.findOne({
    where: { email },
    attributes: { exclude: ['password'] },
    raw: true,
  });

  if (!user) return { status: 500, message: 'Internal Server Error' };

  const token = jwt.sign(user, SECRET);

  return { status: 200, token, data: user };
};

const getSellers = async () => {
  const sellers = await User.findAll({
    where: { role: 'seller' },
    attributes: { exclude: ['password'] },
  });

  return sellers;
};

module.exports = {
  create,
  getUser,
  getSellers,
};
