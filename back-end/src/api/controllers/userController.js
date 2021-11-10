const userService = require('../services/userService');

const login = (req, res, next) => {
  try {
    const { email, password } = req.body;

    const token = await userService.login({ email, password });

    res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  login,
};