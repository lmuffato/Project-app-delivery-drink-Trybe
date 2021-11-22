const express = require('express');

const controller = require('../controller');
const midleware = require('../middleware');

const router = express.Router();

router.post('/', midleware.token, controller.sale);

module.exports = router;