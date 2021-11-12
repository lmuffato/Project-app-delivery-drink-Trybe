const rescue = require('express-rescue');
const LoginService = require('../../services/login/loginService');

const login = rescue(async (req, res) => {
  const { email, password } = req.body;
  const loginUser = await LoginService.userLogin(email, password);
  if (loginUser.message) return res.status(loginUser.code).json({ message: loginUser.message });
  res.status(200).json(loginUser);
})

module.exports = {
  login,
};
