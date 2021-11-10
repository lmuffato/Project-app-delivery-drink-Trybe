const userServices = require('../services/userService');

const login = async (req, res) => {
  const { email, password } = req.body;
  const response = await userServices.login(email, password);
  res.status(response.status).json(response.message);
};

module.exports = {
  login,
};
