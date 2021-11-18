const express = require('express');

const { saleController } = require('../controller');
const midleware = require('../middleware');

const router = express.Router();

router.post('/', midleware.token, saleController.createSale);
router.get('/', saleController.getSales);

module.exports = router;