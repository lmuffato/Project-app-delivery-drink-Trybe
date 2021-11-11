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

const exclude = rescue(async (req, res) => {
  const { id } = req.params;
  await User.destroy( { where: { id } });
  res.status(204).end();
})

const getById = rescue(async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  if (!user) return res.status(404).json({ message: 'User does not exist' });
  res.status(200).json(user);
});

module.exports = { getUser, create, exclude, getById };
