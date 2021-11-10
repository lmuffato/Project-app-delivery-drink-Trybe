const { userService } = require('../services');
const { /* CREATED, */ OK } = require('../utils/statusCodeMap');

const login = async (req, res) => {
  const { email, password } = req.body;

  const result = await userService.login({ email, password });

  const { error } = result;

  if (error) return res.status(error.code).json({ message: error.message });

  return res.status(OK).json(result);
};

const loginGetAll = async (req, res) => {
  const result = await userService.loginGetAll();

  return res.status(OK).json(result);
};

module.exports = { login, loginGetAll }; 
