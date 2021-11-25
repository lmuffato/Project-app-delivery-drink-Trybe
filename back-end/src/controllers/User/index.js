const createUser = require('./createUser');
const removeUser = require('./removeUser');
const updateUser = require('./updateUser');
const findAllUsers = require('./findAllUsers');
const findByIdUser = require('./findByIdUser');
const findByEmailUser = require('./findByEmailUser');

module.exports = {
  createUser,
  removeUser,
  updateUser,
  findAllUsers,
  findByIdUser,
  findByEmailUser,
};