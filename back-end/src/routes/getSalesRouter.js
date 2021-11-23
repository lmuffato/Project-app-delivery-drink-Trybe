const express = require('express');

const { getSalesBySeller } = require('../controllers');

const router = express.Router();

router.get('/seller', getSalesBySeller);

module.exports = router;