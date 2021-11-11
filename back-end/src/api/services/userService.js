const { Op } = require('sequelize');
const md5 = require('md5');
const jwt = require('jsonwebtoken');

const { User } = require('../../database/models');
const {
  INCORRECT_USERNAME_OR_PASSWORD, ALL_FIELDS_FILLED, USER_ALREADY_EXIST, NO_REGISTRED_USERS,
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
  
  const { password: _, ...userWithoutPassword } = user.dataValues;
  
  return ({ status: 201, user: userWithoutPassword });
};

const login = async ({ email, password }) => {
  if (!email || !password) {
    return ({ status: 401, data: ALL_FIELDS_FILLED });
  }

  const hashPassword = md5(password);

  const loginCheck = await checkLogin(email, hashPassword);

  if (!loginCheck) {
    return ({ status: 401, data: INCORRECT_USERNAME_OR_PASSWORD });
  }

  const token = jwt.sign(loginCheck, secret, jwtConfig);

  return ({ status: 200, token });
};

const findAllUsers = async () => {
  const allUsers = await User.findAll();

  if (!allUsers) return ({ status: 404, data: NO_REGISTRED_USERS });

  const usersArray = allUsers.map((user) => {
    const { id, name, email, role } = user.dataValues;
    return ({ id, name, email, role });
  });

  return ({ status: 200, data: usersArray });
};

module.exports = {
  login,
  createUser,
  findAllUsers,
};
