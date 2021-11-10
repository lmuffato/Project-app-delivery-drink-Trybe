const md5 = require('md5');

const checkPassword = (req, res, next) => {
  const { password } = req.body;

  if (!password) return res.status(400).json({ message: 'Invalid entries. Password is missing' });
  if (password.length < 6) {
    return res.status(400).json({ message: 'Invalid entries. Password length is too short' });
  }
  req.body.password = md5(password);
  return next();
};

module.exports = {
  checkPassword,
};
