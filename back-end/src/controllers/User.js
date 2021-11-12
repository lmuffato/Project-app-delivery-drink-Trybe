const { User } = require('../database/models');

const createUser = async (req, res) => {
  try {
    const userData = req.body;

    const user = await User.create(userData);

    if (!user) {
      throw new Error('Algo deu errado');
    }

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: e.message });
  }
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
