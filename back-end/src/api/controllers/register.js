const rescue = require('express-rescue');

const registerService = require('../services/register');

const register = rescue(async (req, res) => {
  const { name, email, password, role } = req.body;
  const user = await registerService.register(name, email, password, role);

  res.status(user.status).json(user);
});

module.exports = {
  register,
};
