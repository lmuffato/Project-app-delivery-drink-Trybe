const User = require('../services/User');

const login = async (req, res) => {
  const { email, password } = req.body;
  
  const { err1, err2, user } = await User.login(email, password);
  const err = err1 ? err1.message : err2.message;

  if (err) return res.status(400).json({ error: err });

  return res.status(200).json(user);    
};

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  const { err, newUser } = await User.createUser(name, email, password);
  if (err) return res.status(400).json({ error: err });
  return res.status(201).json({ newUser });
};

module.exports = {
  login,
  createUser,
};