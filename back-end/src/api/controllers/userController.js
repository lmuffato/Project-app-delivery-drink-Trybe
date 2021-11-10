const userService = require('../services/userService');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const { user, token } = await userService.login({ email, password });

    res.status(200).json({ user, token });
  } catch (err) {
    next(err);
  }
};

const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const user = await userService.register({ name, email, password });

    res.status(201).json({ user });
  } catch (err) {
    err.code = 409;
    next(err);
  }
};

module.exports = {
  login,
  register,
};