const Sale = require('../services/saleService');

const createSale = async (req, res) => {
  const data = req.body;
  const { status, id } = await Sale.createSale(data);
  return res.status(status).json(id);
};

module.exports = {
  createSale,
};
