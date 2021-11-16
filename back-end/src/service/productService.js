const { Product } = require('../database/models');

const getAllProducts = async () => {
  const getProduct = await Product.findAll();
  return getProduct;
};

module.exports = getAllProducts;