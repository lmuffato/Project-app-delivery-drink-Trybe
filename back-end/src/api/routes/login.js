const express = require('express');
const User = require('../../controllers/User');
const validateUserLogin = require('../../middlewares/validateUserLogin');

const router = express.Router();

router.post('/', validateUserLogin, User.getUser);

module.exports = router;
