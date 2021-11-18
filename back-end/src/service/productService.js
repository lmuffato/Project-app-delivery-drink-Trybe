const { Product, Sale } = require('../database/models');

const getAllProducts = async () => {
  const getProduct = await Product.findAll({
    include: [
      { model: Sale, as: 'sales', though: { attributes: [] } },
    ],
  });
  return getProduct;
};

module.exports = {
  getAllProducts,
};