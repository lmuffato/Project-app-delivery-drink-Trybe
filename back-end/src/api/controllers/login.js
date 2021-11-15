const serviceLogin = require('../services/login');

const loginUser = async (req, res) => {
  const { password, email } = req.body;
  const data = await serviceLogin.loginUser(password, email);
  
  return res.status(data.status).json(data);
};

module.exports = {
  loginUser,
};
