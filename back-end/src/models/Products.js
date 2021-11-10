const products = require('../database/models/product');

const getProducts = async () => {
  const productsList = await products.findAll();
  return productsList;
};

module.exports = {
  getProducts,
};