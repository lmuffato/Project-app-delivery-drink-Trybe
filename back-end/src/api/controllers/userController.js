const { userService } = require('../services');

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = { name, email, password, role: 'customer' };

  const { status, data, user } = await userService.createUser(newUser);

  if (!user) {
    return res.status(status).json({ data });
  }
  
  return res.status(status).json(user);
};

const login = async (req, res) => {
  const { body } = req;

  const { status, data, token, role } = await userService.login(body);

  if (token) {
    return res.status(status).json({ token, role });
  }

  return res.status(status).json({ data });
};

const findAllUsers = async (_req, res) => {
  const { status, data } = await userService.findAllUsers();

  return res.status(status).json(data);
};

const createAdmin = async (req, res) => {
  const { status, user, data } = await userService.createUser(req.body);

  if (!user) {
    return res.status(status).json({ data });
  }
  
  return res.status(status).json(user);
};

const deleteUser = async (req, res) => {
  const { id } = req.body;

  const { status, data } = await userService.deleteUser(id);

  return res.status(status).json(data);
};

module.exports = {
  login,
  createUser,
  findAllUsers,
  createAdmin,
  deleteUser,
};
