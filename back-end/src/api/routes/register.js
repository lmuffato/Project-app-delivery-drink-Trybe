const express = require('express');
const User = require('../../controllers/User');
const validateUserOnRegister = require('../../middlewares/validateUserOnRegister');
const userRegisterSchema = require('../../schemas/userRegister');

const router = express.Router();

router.post('/', userRegisterSchema, validateUserOnRegister, User.createUser);

module.exports = router;
