const express = require('express');
const { userController } = require('../controllers');
const { validateEmail, validatePassword, validateName, validateToken } = require('../middlewares');

const Router = express.Router();

Router.post('/', validateName, validateEmail, validatePassword, userController.create);

Router.post('/admin/', validateToken, userController.adminCreate);

Router.use((err, _req, res, _next) => {
  const { code, message } = err;
  return res.status(code).json({ message });
});

module.exports = Router; 
