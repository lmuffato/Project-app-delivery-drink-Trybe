const { userService } = require('../services');

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = { name, email, password, role: 'customer' };

  const { status, data, user } = await userService.createUser(newUser);

  if (!user) {
    return res.status(status).json({ data });
  }
  
  res.status(status).json(user);
};

const login = async (req, res) => {
  const { body } = req;

  const { status, data, token } = await userService.login(body);

  if (token) {
    return res.status(status).json({ token });
  }

  return res.status(status).json({ data });
};

module.exports = {
  login,
  createUser,
};