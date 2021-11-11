const rescue = require('express-rescue');
const { product } = require('../database/models');

const getAll = rescue(async (_req, res, _next) => {
  const result = await product.findAll();
  
  res.status(200).json(result);
});

module.exports = {
  getAll,
};
