const express = require('express');
const { productController } = require('../controllers');

const Router = express.Router();

Router.get('/', productController.getAll);

Router.use((err, _req, res, _next) => {
  const { code, message } = err;
  return res.status(code).json({ message });
});

module.exports = Router; 
