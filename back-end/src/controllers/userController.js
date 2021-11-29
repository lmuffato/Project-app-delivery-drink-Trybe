const { userService } = require('../services');
const { CREATED, OK } = require('../utils/statusCodeMap');

const login = async (req, res) => {
  const { email, password } = req.body;

  const result = await userService.login({ email, password });

  const { error } = result;

  if (error) return res.status(error.code).json({ message: error.message });

  return res.status(OK).json(result);
};

const create = async (req, res) => {
  const { name, email, password } = req.body;

  const result = await userService.create({ name, email, password });

  const { error } = result;

  if (error) return res.status(error.code).json({ message: error.message });

  return res.status(CREATED).json(result);
};

const adminCreate = async (req, res) => {
  const { name, email, password, role } = req.body;

  const result = await userService.adminCreate({ name, email, password, role });

  const { error } = result;

  if (error) return res.status(error.code).json({ message: error.message });

  return res.status(CREATED).json(result);
};

module.exports = { login, create, adminCreate }; 
