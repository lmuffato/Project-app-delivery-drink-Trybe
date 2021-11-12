const { User } = require('../database/models');

const validateUserLogin = async (req, res, next) => {
  const { email, password: loginPass } = req.body;

  const user = await User.findOne({ where: { email }, raw: true });

  if (!user) {
    return res.status(404).json({ message: 'Not found user' });
  }

  if (user.password !== loginPass) {
    return res.status(401).json({ message: 'Incorrect password' });
  }

  const { password, ...rest } = user;

  req.user = rest;
  next();
};

module.exports = validateUserLogin;
