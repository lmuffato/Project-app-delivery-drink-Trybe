const Sale = require('../services/saleService');

const createSale = async (req, res) => {
  const data = req.body;
  const { status, id } = await Sale.createSale(data);
  return res.status(status).json(id);
};
const getSales = async (_req, res) => {
  const { data, status } = await Sale.getSales();
  return res.status(status).json(data);
};

module.exports = {
  createSale,
  getSales,
};
