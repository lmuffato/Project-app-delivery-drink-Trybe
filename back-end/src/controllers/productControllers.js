const productsService = require('../services/productsService');

const getAllProducts = async (_req, res) => {
  const response = await productsService.getAllProducts();
  return res.status(response.status).json(response.message);
};

module.exports = {
  getAllProducts,
};
