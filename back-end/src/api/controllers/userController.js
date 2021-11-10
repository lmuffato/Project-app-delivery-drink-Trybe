const { userService } = require('../services');

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
};
