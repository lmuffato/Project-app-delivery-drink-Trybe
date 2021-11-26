const express = require('express');
const { saleController } = require('../controllers');
const { validateToken } = require('../middlewares');

const Router = express.Router();

Router.post('/', validateToken, saleController.postSale);

Router.get('/:id', validateToken, saleController.getSaleDetailById);

Router.get('/seller/:id', validateToken, saleController.getSalesBySellerId);

Router.use((err, _req, res, _next) => {
  const { code, message } = err;
  return res.status(code).json({ message });
});

module.exports = Router; 
