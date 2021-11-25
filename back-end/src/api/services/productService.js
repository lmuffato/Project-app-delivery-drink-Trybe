const { products } = require('../../database/models');

const getAll = async () => {
  const response = await products.findAll();
  return response;
};

const getById = async (id) => {
  const response = await products.findOne({ where: { id } });
  return response;
};

module.exports = {
  getAll,
  getById,
};