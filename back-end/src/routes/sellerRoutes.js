const express = require('express');
const rescue = require('express-rescue');

const { getSalesBySeller } = require('../controllers/Seller');

const router = express.Router();

router.get('/sales', rescue(getSalesBySeller));

module.exports = router;