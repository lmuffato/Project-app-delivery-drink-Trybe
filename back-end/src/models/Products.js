const { products } = require('../database/models/product');

const getProducts = async () => {
  const products = await products.findAll();
  return products;
};

module.exports = {
  getProducts,
}