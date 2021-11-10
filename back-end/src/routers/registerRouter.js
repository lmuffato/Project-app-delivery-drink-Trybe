const express = require('express');
const { userController } = require('../controllers');
const { validateEmail, validatePassword, validateName } = require('../middlewares');


const Router = express.Router();

Router.post('/', validateName, validateEmail, validatePassword, userController.create);

Router.use((err, _req, res, _next) => {
  const { code, message } = err;
  return res.status(code).json({ message });
});

module.exports = Router; 
