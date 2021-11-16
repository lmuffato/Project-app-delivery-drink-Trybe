const Products = require('../services/productsService');

const getProducts = async (_req, res) => {
  const { data, status } = await Products.getProducts();
  return res.status(status).json(data);
};

module.exports = {
  getProducts,
};
