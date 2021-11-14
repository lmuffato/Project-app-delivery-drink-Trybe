const productService = require('../services/product');

const getAllProducts = async (_req, res) => {
  const { status, data } = await productService.getAllProducts();
  res.status(status).json(data);
};

module.exports = {
  getAllProducts,
};
