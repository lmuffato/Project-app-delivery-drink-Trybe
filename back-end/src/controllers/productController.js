const { productService } = require('../services');
const { /* CREATED, */ OK } = require('../utils/statusCodeMap');

const getAll = async (req, res) => {
  const result = await productService.getAll();

  return res.status(OK).json(result);
};

const postProducts = async (req, res) => {
  const { data } = req.body;
  const result = await productService.postProducts(data);

  return res.status(OK).json(result);
};

module.exports = {
  getAll,
  postProducts,
}; 
