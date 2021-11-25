const usersService = require('../services/usersService');
const httpStatus = require('../utils/httpStatus');
const { User } = require('../database/models');

const listUsers = async (req, res) => {
  const { role } = req.query;
  const users = await usersService.listUsers(role);
  return res.status(httpStatus.ok).json(users);
};

const adminList = async (req, res) => {
  const { role } = req.user;

  if (role.toLowerCase() !== 'administrator') {
    return res
      .status(httpStatus.unauthorized)
      .json();
  }
  const users = await User.findAll(
    { where: { role: ['seller', 'customer'] } }
  );

  const serializedUsers = users
    .map(({ id, name, email, role }) => ({ id, name, email, role }));

  return res.status(httpStatus.ok).json(serializedUsers);
};

module.exports = {
  listUsers,
  adminList,
};
