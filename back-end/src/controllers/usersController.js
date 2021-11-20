const usersService = require('../services/usersService');
const httpStatus = require('../utils/httpStatus');

const listUsers = async (req, res) => {
  const { role } = req.query;
  const users = await usersService.listUsers(role);
  return res.status(httpStatus.ok).json(users);
};

module.exports = {
  listUsers,
};
