const { Product } = require('../../database/models');

const getAllProducts = async () => {
  const products = await Product.findAll();
  return { status: 200, data: products };
};

module.exports = {
  getAllProducts,
};
