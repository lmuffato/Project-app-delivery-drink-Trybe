const { Product } = require('../models');

const getAll = async () => {
  const products = await Product.findAll();

  if (!products) return { status: 400, message: 'Products are empty' };

  return { status: 200, data: products };
};

module.exports = {
  getAll,
};