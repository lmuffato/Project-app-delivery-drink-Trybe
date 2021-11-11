const express = require('express');
const rescue = require('express-rescue');

const loginController = require('../controllers/login');

const loginRouter = express.Router();

loginRouter.post('/', rescue(loginController.loginUser));

module.exports = loginRouter;
