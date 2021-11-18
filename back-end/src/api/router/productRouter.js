const express = require('express');
const rescue = require('express-rescue');

const productController = require('../controllers/product');

const productRouter = express.Router();

productRouter.get('/products', productController.getAllProducts);

module.exports = productRouter;
