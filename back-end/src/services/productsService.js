const { product } = require('../database/models/index');

const getProducts = async () => {
  const products = await product.findAll();
  return { status: 200, data: products };
};

module.exports = {
  getProducts,
};
