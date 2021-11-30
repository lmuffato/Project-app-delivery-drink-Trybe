const createUser = require('./createUser');
const createAdminUser = require('./createAdminUser');
const removeUser = require('./removeUser');
const updateUser = require('./updateUser');
const findAllUsers = require('./findAllUsers');
const findByIdUser = require('./findByIdUser');
const findByEmailUser = require('./findByEmailUser');
const getSalesByUser = require('./getSalesByUser');
const login = require('./login');

module.exports = {
  createUser,
  createAdminUser,
  removeUser,
  updateUser,
  findAllUsers,
  findByIdUser,
  findByEmailUser,
  getSalesByUser,
  login,
};