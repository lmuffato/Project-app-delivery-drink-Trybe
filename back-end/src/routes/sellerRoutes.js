const express = require('express');

const { getSalesBySeller } = require('../controllers/Seller');

const router = express.Router();

router.get('/sales', getSalesBySeller);

module.exports = router;