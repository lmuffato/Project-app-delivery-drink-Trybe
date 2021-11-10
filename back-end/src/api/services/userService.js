const fs = require('fs');
const path = require('path');
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const { User } = require('../../database/models');
const AppError = require('../utils/AppError');

const JWT_SECRET = fs.readFileSync(
  path.join(__dirname, '..', '..', '..', 'jwt.evaluation.key'),
  'utf-8',
);

const login = async ({ email, password }) => {
  if (!email || !password) {
    throw new AppError(400, 'Invalid data');
  }

  const user = await User.findOne({ where: { email } });

  const passwordMd5 = md5(password);

  if (!user || user.dataValues.password !== passwordMd5) {
    throw new AppError(404, 'User not nound or incorrect password');
  }

  const token = jwt.sign({
    id: user.dataValues.id,
    email: user.dataValues.email,
    role: user.dataValues.role,
  }, JWT_SECRET);

  const userWithoutPassword = { ...user.dataValues, password: undefined };

  return { user: userWithoutPassword, token };
};

const register = async ({ name, email, password, role = 'customer' }) => {
  const encryptedPassword = md5(password);

  const user = await User.create({ name, email, password: encryptedPassword, role });

  const userWithoutPassword = { ...user.dataValues, password: undefined };
  return userWithoutPassword;
};

module.exports = {
  login,
  register,
};