const { saleService } = require('../services');
const { CREATED, OK } = require('../utils/statusCodeMap');

const postSale = async (req, res) => {
  const data = req.body;
  const user = req.token;

  const result = await saleService.postSale(data, user);

  const { error } = result;

  if (error) return res.status(error.code).json({ message: error.message });

  return res.status(CREATED).json(result);
};

const getSalesBySellerId = async (req, res) => {
  const { id } = req.params;

  const result = await saleService.getSalesBySellerId(id);

  const { error } = result;

  if (error) return res.status(error.code).json({ message: error.message });

  return res.status(OK).json(result);
  
}

module.exports = {
  postSale, getSalesBySellerId,
}; 
