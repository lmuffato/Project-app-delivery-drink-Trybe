const productService = require('../services/productService');

const getAll = async (_req, res) => {
  const result = await productService.getAll();
  return res.status(200).json(result);
};

const getOne = async (req, res) => {
  const { id } = req.params;
  const result = await productService.getOne(id);
  return res.status(200).json(result);
};

module.exports = {
  getAll,
  getOne,
};