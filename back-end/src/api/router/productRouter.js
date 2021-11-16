const express = require('express');
const rescue = require('express-rescue');

const productController = require('../controllers/product');

const productRouter = express.Router();

productRouter.get('/products', rescue(productController.getAllProducts));

module.exports = productRouter;
