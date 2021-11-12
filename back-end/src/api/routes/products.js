const express = require('express');
const Products = require('../../controllers/productController');

const router = express.Router();

router.get('/', /* inserir validação do login aqui */ Products.getProducts);

module.exports = router;
