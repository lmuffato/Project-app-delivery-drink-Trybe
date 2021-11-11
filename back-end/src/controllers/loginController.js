const rescue = require('express-rescue');
const loginService = require('../services/loginService');
const success = require('../utils/success');

const login = rescue(async (req, res, next) => {
  const { email, password } = req.body;
  const result = await loginService.login({ email, password });

  if (result.error) return next(result);

  const { token, role, id, name } = result;
  
  res.status(success.OK).json({ token, role, id, name, email });
});

module.exports = {
  login,
};
