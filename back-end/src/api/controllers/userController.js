const { userService } = require('../services');

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = { name, email, password, role: 'customer' };

  const { status, data, token, id, role } = await userService.createUser(newUser);

  if (token) {    
    return res.status(status).json({ token, id, name, email, role });
  }
  
  return res.status(status).json({ data });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const { 
    status, 
    data, 
    token, 
    id, 
    name, 
    role,
  } = await userService.login(email, password);

  if (token) {
    return res.status(status).json({ token, id, name, email, role });
  }

  return res.status(status).json({ data });
};

const findAllUsers = async (_req, res) => {
  const { status, data } = await userService.findAllUsers();

  return res.status(status).json(data);
};

const createAdmin = async (req, res) => {
  const { status, data, token, id, name, email, role } = await userService.createUser(req.body);
  if (data) {
    return res.status(status).json({ data });
  }
  return res.status(status).json({ token, id, name, email, role });
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
