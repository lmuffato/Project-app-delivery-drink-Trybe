const { Op } = require('sequelize');

const jwt = require('jsonwebtoken');
const { User } = require('../../database/models');
const { INCORRECT_USERNAME_OR_PASSWORD, ALL_FILDES_FILLED } = require('../messages/errorMessages');
const { encrypt } = require('../auth/encriptation');

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
  const { iv } = encrypt(password);

  const [user, created] = await User.findOrCreate({
    where: {
      [Op.or]: [{ name }, { email }],
    },
    defaults: {
      name,
      email,
      password: iv,
      role,
    },
  });

  if (!created) {
    return { status: 409, message: 'User already exists!' };
  }

  return { status: 201, user };
};

const login = async ({ email, password }) => {
  if (!email || !password) {
    return ({ status: 401, data: ALL_FILDES_FILLED });
  }

  const { iv } = encrypt(password);

  const loginCheck = await checkLogin(email, iv);

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
