const express = require('express');

const { loginController } = require('../controller');

const router = express.Router();

router.post('/', loginController.loginUser);

module.exports = router; 