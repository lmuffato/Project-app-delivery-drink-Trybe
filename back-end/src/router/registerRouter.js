const express = require('express');
const rescue = require('express-rescue');

const registerController = require('../controllers/register');

const registerRouter = express.Router();

registerRouter.post('/', rescue(registerController.register));

module.exports = registerRouter;
