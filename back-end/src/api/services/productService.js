const { products } = require('../../database/models');

const getAll = async () => {
  const response = await products.findAll();
  return response;
};

module.exports = {
  getAll,
};