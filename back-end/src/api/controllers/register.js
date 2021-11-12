const registerService = require('../services/register');

const register = async (req, res) => {
  const { name, email, password, role } = req.body;

  const data = await registerService.register(name, email, password, role);

  res.status(201).json(data);
};

module.exports = {
  register,
};
