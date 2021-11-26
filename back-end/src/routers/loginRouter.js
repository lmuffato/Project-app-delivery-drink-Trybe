const express = require('express');
const { userController } = require('../controllers');
const { validateEmail, validatePassword } = require('../middlewares');

const Router = express.Router();

Router.post('/', validateEmail, validatePassword, userController.login);

Router.use((err, _req, res, _next) => {
  const { code, message } = err;
  return res.status(code).json({ message });
});

module.exports = Router; 
