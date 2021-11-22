const User = require('../services/User');

const login = async (req, res) => {
  const { email, password } = req.body;
  
  const { err, user } = await User.login(email, password);

  if (err) return res.status(404).json({ error: err.message });

  res.status(200).json({ token: user.token, data: user.userLogin });
};

const createUser = async (req, res) => {
  const { name, email, password, type = 'customer' } = req.body;
  const { err, token } = await User.createUser(name, email, password, type);
  if (err) return res.status(409).json(err.message);
  return res.status(201).json(token);
};

const listUsers = async (req, res) => {
  const { role } = req.query;

  const { err, users } = await User.listUsers(role);
  if (err) return res.status(500).json({ error: err });
  return res.status(200).json({ result: users });
};

module.exports = {
  login,
  createUser,
  listUsers,
};
