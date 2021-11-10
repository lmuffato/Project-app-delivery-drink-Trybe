const userServices = require('../services/userServices')

const login = (req, res) => {
  const { email, password } = req.body;
  const response = userServices.login(email, password);
  res.status(response.status).json(response.message);
}

module.exports = {
  login,
};
