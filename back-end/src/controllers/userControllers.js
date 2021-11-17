const userServices = require('../services/userService');

const login = async (req, res) => {
  const { email, password } = req.body;
  const response = await userServices.login(email, password);
  res.status(response.status).json(response.message);
};

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const response = await userServices.register(name, email, password);
  res.status(response.status).json(response.message);
};

const getAllUsers = async (_req, res) => {
  const response = await userServices.getAllUsers();
  return res.status(response.status).json(response.message);
};

const getAllSellers = async (_req, res) => {
  const response = await userServices.getAllSellers();
  return res.status(response.status).json(response.message);
};

module.exports = {
  login,
  register,
  getAllUsers,
  getAllSellers,
};
