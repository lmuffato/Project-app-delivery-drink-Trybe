const { Product } = require('../database/models');

const getProducts = async () => {
  const productsList = await Product.findAll();
  return productsList;
};

module.exports = {
  getProducts,
};