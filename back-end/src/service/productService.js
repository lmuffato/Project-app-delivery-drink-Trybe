const { Product, Sale } = require('../database/models');

const getAllProducts = async () => {
  const getProduct = await Product.findAll({
    include: [
      { model: Sale, as: 'sales', though: { attributes: [] } },
    ],
  });
  return getProduct;
};

const getProduct = async (id) => {
  const searchProduct = await Product.findOne({ where: { id } });
  return searchProduct;
};

module.exports = {
  getAllProducts,
  getProduct,
};