const express = require('express');

const controller = require('../controller');
const midleware = require('../middleware');

const router = express.Router();

router.get('/', midleware.token, controller.product);

module.exports = router; 