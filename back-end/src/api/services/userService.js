const { Op } = require('sequelize');
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const path = require('path');
const secret = require('fs')
.readFileSync(path.join(__dirname, '../../../jwt.evaluation.key'), { encoding: 'utf-8' }).trim(); 

const { user: User } = require('../../database/models');
const {
  INCORRECT_USERNAME_OR_PASSWORD, ALL_FIELDS_FILLED, USER_ALREADY_EXIST,
  NO_REGISTRED_USERS, NON_EXISTENTE_USER, NO_REGISTRED_SELLERS,
} = require('../messages/errorMessages');

const jwtConfig = {
  expiresIn: '2h',
  algorithm: 'HS256',
};

const checkLogin = async (email, password) => {
  const existingUser = await User.findOne({ where: { email, password } });

  if (!existingUser) return false;

  const { id, name, role } = existingUser.dataValues;

  return ({ id, name, email, role });
};

const createUser = async ({ name, email, password, role }) => {
  const hashPassword = md5(password);
  const [user, created] = await User.findOrCreate({
    where: {
      [Op.or]: [{ name }, { email }],
    },
    defaults: { name, email, password: hashPassword, role },
  });

  if (!created) {
    return ({ status: 409, data: USER_ALREADY_EXIST });
  }

  const { password: _, ...userWithoutPassword } = user.dataValues;
  const token = jwt.sign(userWithoutPassword, secret, jwtConfig);
  const { id } = userWithoutPassword;
    
  return ({ status: 201, token, id, name, email, role });
};

const login = async (email, password) => {
  if (!email || !password) {
    return ({ status: 404, data: ALL_FIELDS_FILLED });
  }

  const hashPassword = md5(password);

  const loginCheck = await checkLogin(email, hashPassword);

  if (!loginCheck) {
    return ({ status: 404, data: INCORRECT_USERNAME_OR_PASSWORD });
  }
  const { name, role, id } = loginCheck;

  const token = jwt.sign(loginCheck, secret, jwtConfig);

  return ({ status: 200, token, id, name, email, role });
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

const deleteUser = async (id) => {
  const deletedUser = await User.destroy({ where: { id } });
  
  if (deletedUser === 0) return ({ status: 404, data: NON_EXISTENTE_USER });

  return ({ status: 204, data: deletedUser });
};

const findAllSellers = async () => {
  const allSellers = await User.findAll({ where: { role: 'seller' } });

  if (!allSellers) return ({ status: 404, data: NO_REGISTRED_SELLERS });
  
  return ({ status: 200, data: allSellers });
};

module.exports = {
  login,
  createUser,
  findAllUsers,
  findAllSellers,
  deleteUser,
};
