const { Product } = require('../database/models');

const getAll = async () => {
  const products = await Product.findAll();
  if (!products) return { status: 500, message: 'Internal Server Error' };

  return { status: 200, products };
};

module.exports = {
  getAll,
};
