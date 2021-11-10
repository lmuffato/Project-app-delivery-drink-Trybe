const { productService } = require('../services');
const { /* CREATED, */ OK } = require('../utils/statusCodeMap');

const getAll = async (req, res) => {
  const result = await productService.getAll();

  return res.status(OK).json(result);
};

module.exports = { getAll }; 
