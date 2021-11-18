const { User } = require('../database/models');
const md5 = require('md5');

const validateUserLogin = async (req, res, next) => {
  const { email, password: loginPass } = req.body;

  const MD5password = md5(loginPass);

  const user = await User.findOne({ where: { email }, raw: true });

  if (!user) {
    return res.status(404).json({ message: 'Not found user' });
  }

  if (user.password !== MD5password) {
    return res.status(401).json({ message: 'Incorrect password' });
  }

  const { password, ...rest } = user;

  req.user = rest;
  next();
};

module.exports = validateUserLogin;
