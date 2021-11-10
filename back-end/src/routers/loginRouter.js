const express = require('express');
const { userController } = require('../controllers');

const Router = express.Router();

Router.post('/', userController.login);

// somente para ver todos usuários no banco
Router.get('/getAll', userController.loginGetAll);

Router.use((err, _req, res, _next) => {
  const { code, message } = err;
  return res.status(code).json({ message });
});

module.exports = Router; 
