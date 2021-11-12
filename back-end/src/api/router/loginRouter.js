const express = require('express');
const rescue = require('express-rescue');

const loginController = require('../controllers/login');
const validateLogin = require('../middlewares/validateLogin');

const loginRouter = express.Router();

loginRouter.post('/', validateLogin, rescue(loginController.loginUser));

module.exports = loginRouter;
