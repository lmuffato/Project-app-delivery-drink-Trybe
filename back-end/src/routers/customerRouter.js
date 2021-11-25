const express = require('express');
const { saleController } = require('../controllers');
const { validateToken } = require('../middlewares');

const Router = express.Router();

Router.get('/orders', validateToken, saleController.getSalesByCustomerId);

Router.get('/checkout', validateToken, saleController.getAllSellers);

Router.use((err, _req, res, _next) => {
  const { code, message } = err;
  return res.status(code).json({ message });
});

module.exports = Router; 
