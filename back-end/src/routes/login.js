const express = require('express');

const controller = require('../controller');

const router = express.Router();

router.post('/', controller.loginController);

module.exports = router; 