const serviceLogin = require('../services/login');

const loginUser = async (req, res) => {
  const { password, email } = req.body;
  const { status, data: token } = await serviceLogin.loginUser(password, email);
  return res.status(status).json({ token });
};

module.exports = {
  loginUser,
};