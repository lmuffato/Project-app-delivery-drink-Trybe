const { Op } = require('sequelize');
const md5 = require('md5');
const jwt = require('jsonwebtoken');

const { User } = require('../../database/models');
const {
  INCORRECT_USERNAME_OR_PASSWORD, ALL_FIELDES_FILLED, USER_ALREADY_EXIST,
} = require('../messages/errorMessages');

const jwtConfig = {
  expiresIn: '2h',
  algorithm: 'HS256',
};

const secret = process.env.SECRET || 'e717vdd^DEp.';

const checkLogin = async (email, password) => {
  const existingUser = await User.findOne({ where: { email, password } });

  if (!existingUser) return false;

  const { id, name, role } = existingUser.dataValues;

  return ({ id, name, email, password, role });
};

const createUser = async ({ name, email, password, role }) => {
  const hashPassword = md5(password);

  const [user, created] = await User.findOrCreate({
    where: {
      [Op.or]: [{ name }, { email }],
    },
    defaults: {
      name,
      email,
      password: hashPassword,
      role,
    },
  });

  if (!created) {
    return ({ status: 409, data: USER_ALREADY_EXIST });
  }

  return ({ status: 201, user });
};

const login = async ({ email, password }) => {
  if (!email || !password) {
    return ({ status: 401, data: ALL_FIELDES_FILLED });
  }

  const hashPassword = md5(password);

  const loginCheck = await checkLogin(email, hashPassword);

  if (!loginCheck) {
    return ({ status: 401, data: INCORRECT_USERNAME_OR_PASSWORD });
  }

  const token = jwt.sign(loginCheck, secret, jwtConfig);

  return ({ status: 200, token });
};

module.exports = {
  login,
  createUser,
};
