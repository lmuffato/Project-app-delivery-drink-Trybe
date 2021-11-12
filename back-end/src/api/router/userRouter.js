const express = require('express');
const rescue = require('express-rescue');

const userController = require('../controllers/user');

const userRouter = express.Router();

userRouter.get('/', rescue(userController.getAllUser));

// userRouter.post('/', userController.createUser);

module.exports = userRouter;