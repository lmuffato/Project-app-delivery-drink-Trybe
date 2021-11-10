const { getAll } = require('../services/productService');
const { OK } = require('../services/statusCode');

const getAllProducts = async (_req, res) => {
  const products = await getAll();
  
  return res.status(OK).json(products);
};

module.exports = {
  getAllProducts,
};
