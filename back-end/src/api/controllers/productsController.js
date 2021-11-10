const { productsService } = require('../services');

const findAllProducts = async (_req, res) => {
  const { status, data } = await productsService.findAllProducts();

  return res.status(status).json({ data });
};

module.exports = {
  findAllProducts,
}
