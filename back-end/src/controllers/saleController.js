const { saleService } = require('../services');
const { CREATED } = require('../utils/statusCodeMap');

const postSale = async (req, res) => {
  const data = req.body;
  const user = req.token;

  const result = await saleService.postSale(data, user);

  const { error } = result;

  if (error) return res.status(error.code).json({ message: error.message });

  return res.status(CREATED).json(result);
};

module.exports = {
  postSale,
}; 
