const { Product } = require('../database/models/index');

const getProducts = async () => {
  const products = await Product.findAll();
  return { status: 200, data: products };
};

module.exports = {
  getProducts,
};
