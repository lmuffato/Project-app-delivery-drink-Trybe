const userService = require('../services/userService');

const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  const { status, message, token, data } = await userService.create(
    name,
    email,
    password,
  );
  if (!token) return res.status(status).json({ message });

  return res.status(status).json({ token, data });
};

const getUser = async (req, res) => {
  const { email } = req.body;

  const { status, message, token, data } = await userService.getUser(email);
  if (!token) return res.status(status).json({ message });

  return res.status(status).json({ token, data });
};

const getSellers = async (req, res) => {
  try {
    const sellers = await userService.getSellers();

    if (!sellers) {
      throw new Error('Nenhum vendedor cadastrado.');
    }

    return res.status(200).json(sellers);
  } catch (err) {
    if (!err.message) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }
    return res.status(404).json({ message: err.message });
  }
};

module.exports = { createUser, getUser, getSellers };
