const { Router } = require('express');
const { findAllProducts } = require('../controllers/productController');

const router = Router();

router.get('/', findAllProducts);

module.exports = router; 
