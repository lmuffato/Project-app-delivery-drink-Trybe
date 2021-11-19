const express = require('express');

const { getSalesBySeller } = require('../controllers');

const router = express.Router();

router.get('/sales', getSalesBySeller);

module.exports = router;