const md5 = require('md5');
const { User } = require('../database/models');

const CUSTOMER_ROLE = 'customer';

const createUser = async (req, res) => {
  try {
    const userData = req.body;
    const { password, name, email, role } = userData;
    const MD5password = md5(password);

    const user = await User.create(
      { name, email, password: MD5password, role },
    );
    if (!user) throw new Error('Algo deu errado');

    return res.status(201).json(user);
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
