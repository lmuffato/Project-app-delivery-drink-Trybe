const { saleService } = require('../services');
const { CREATED } = require('../utils/statusCodeMap');

const postSale = async (req, res) => {
  const data = req.body;
  const user = req.token;

  const result = await saleService.postSale(data, user);

  return res.status(CREATED).json(result);
};

module.exports = {
  postSale,
}; 
