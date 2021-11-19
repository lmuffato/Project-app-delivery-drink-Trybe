const { product } = require('../database/models/index');

const getProducts = async () => {
  const products = await product.findAll();
  return { status: 200, data: products };
};

const getProductId = async (name) => {
  const prod = await product.findOne({ where: { name } });
  return prod.id;
};

module.exports = {
  getProducts,
  getProductId,
};
