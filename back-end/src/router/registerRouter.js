const express = require('express');
const rescue = require('express-rescue');

const registerController = require('../controllers/register');
const validateData = require('../middlewares/validateData');

const registerRouter = express.Router();

registerRouter.post('/', validateData, rescue(registerController.register));

module.exports = registerRouter;
