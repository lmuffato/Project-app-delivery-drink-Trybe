const Product = require('../models/Products');

const getProducts = async () => {
  const products = await Product.getProducts();
  return products;
};

module.exports = {
    getProducts,
};
