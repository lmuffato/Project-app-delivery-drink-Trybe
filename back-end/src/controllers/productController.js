const { Product } = require('../database/models');
const httpStatus = require('../utils/httpStatus');

const findAllProducts = async (_req, res) => {
  const products = await Product.findAll();
  return res.status(httpStatus.ok).json({ products });
};

module.exports = {
  findAllProducts,
};
