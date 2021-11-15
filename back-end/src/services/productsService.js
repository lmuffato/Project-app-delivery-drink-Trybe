const database = require('../database/models');

const getAllProducts = async () => {
  const products = await database.product.findAll();
  const response = { status: 200, message: { products } };
  return response;
};

module.exports = {
  getAllProducts,
};