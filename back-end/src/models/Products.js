const { product } = require('../database/models');

const getProducts = async () => {
  const productsList = await product.findAll();
  return productsList;
};

module.exports = {
  getProducts,
};