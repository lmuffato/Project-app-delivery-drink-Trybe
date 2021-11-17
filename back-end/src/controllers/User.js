// const { User } = require('../database/models');
const userService = require('../services/userService');

const createUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  const { status, message, token } = await userService.create(name, email, password, role);
  if (!token) return res.status(status).json({ message });

  return res.status(status).json(token);
};

const getUser = async (req, res) => {
  try {
    const { user } = req;

    if (!user) {
      throw new Error('Algo deu errado');
    }

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: e.message });
  }
};

module.exports = { createUser, getUser };
