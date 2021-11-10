const { User } = require('../../models');
const userService = require('../../services/users/userService');
const rescue = require('express-rescue');

const getUser = rescue(async (_req, res) => {
  const allUsers = await User.findAll();
  res.status(200).json(allUsers);
});

const create = rescue(async (req, res) => {
  const { name, email, password, role } = req.body;
  const newUser = userService.validateEntries({ name, email, password, role });
  if (newUser.message) return res.status(newUser.status).json({ message: newUser.message });
  const createdUser = await User.create({ name, email, password, role });
  res.status(200).json(createdUser);
});

module.exports = { getUser, create };
