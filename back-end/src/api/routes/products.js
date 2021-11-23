const express = require('express');
const Products = require('../../controllers/productController');

const router = express.Router();

router.get('/', Products.getProducts);

module.exports = router;
