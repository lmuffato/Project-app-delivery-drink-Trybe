const userService = require('../services/userService');

const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  const { status, message, token } = await userService.create(name, email, password);
  if (!token) return res.status(status).json({ message });

  return res.status(status).json(token);
};

const getUser = async (req, res) => {
  const { email, password } = req.body;

  const { status, message, token } = await userService.getUser(email, password);
  if (!token) return res.status(status).json({ message });

  return res.status(status).json(token);
};

module.exports = { createUser, getUser };
