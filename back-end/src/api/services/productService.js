const { Product } = require('../../database/models/');

const getAll = async () => {
  const result = await Product.findAll();
  return result;
};

const getOne = async (id) => {
  const result = await Product.findByPk(id);
  return result;
};

module.exports = {
  getAll,
  getOne,
};