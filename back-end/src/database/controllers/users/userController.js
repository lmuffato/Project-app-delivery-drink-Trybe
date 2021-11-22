const { User } = require('../../models');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const userService = require('../../services/users/userService');
const rescue = require('express-rescue');

const SECRET = require('fs')
.readFileSync('jwt.evaluation.key', { encoding: 'utf-8' })
.trim();

const getUser = rescue(async (_req, res) => {
  const allUsers = await User.findAll();
  res.status(200).json(allUsers);
});

const create = rescue(async (req, res) => {
  const { name, email, password } = req.body;
  const role = 'customer';

  const newUser = await userService.validateEntries({ name, email, password, role });
  if (newUser.message) return res.status(newUser.status).json({ message: newUser.message });
  const md5Password = crypto.createHash('md5').update(password).digest('hex');
  const createdUser = await User.create({ name, email, password: md5Password, role });

  const { dataValues } = createdUser;
  const { password: _, ...userPayload } = dataValues;
  const token = jwt.sign(userPayload, SECRET);
  const userLogin = {
    ...userPayload,
    token,
  };
  res.status(201).json(userLogin);
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
