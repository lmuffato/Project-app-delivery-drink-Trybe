const express = require('express');

const { getAllProducts } = require('../controllers/Product');

const router = express.Router();

router.get('/products', getAllProducts);

module.exports = router;