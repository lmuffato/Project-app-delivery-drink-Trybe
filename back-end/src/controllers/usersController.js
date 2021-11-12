const User = require('../services/usersService');

const getUserbyEmail = async (req, res) => {
  const { email } = req.body;
  const { status, message, data } = await User.getUserbyEmail(email);
  if (message) return res.status(status).json({ message });
  return res.status(status).json({ user: data });
};

module.exports = {
  getUserbyEmail,
};
