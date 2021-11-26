const userService = require('../services/userService');

const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  const { status, message, token, data } = await userService.create(name, email, password);
  if (!token) return res.status(status).json({ message });

  return res.status(status).json({ token, data });
};

const getUser = async (req, res) => {
  const { email } = req.body;

  const { status, message, token, data } = await userService.getUser(email);
  if (!token) return res.status(status).json({ message });

  return res.status(status).json({ token, data });
};

module.exports = { createUser, getUser };
