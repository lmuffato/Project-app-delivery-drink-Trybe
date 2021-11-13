const express = require('express');
const { productController } = require('../controllers');
const { validateToken } = require('../middlewares');

const Router = express.Router();

Router.get('/', productController.getAll);
Router.post('/', validateToken, productController.postProducts);

Router.use((err, _req, res, _next) => {
  const { code, message } = err;
  return res.status(code).json({ message });
});

module.exports = Router; 
