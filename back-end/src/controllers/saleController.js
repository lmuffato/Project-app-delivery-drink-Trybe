const saleService = require('../services/saleService');

const createSale = async (req, res) => {
  const order = req.body;

  const { status, message, sale } = await saleService.create(order);
  if (!sale) return res.status(status).json({ message });
  return res.status(status).json(sale);
};

const getSaleById = async (req, res) => {
  const { id } = req.user;
  
  const { status, message, sales } = await saleService.getSale(id);
  if (!sales) return res.status(status).json({ message });
  return res.status(status).json(sales);
};

module.exports = {
  createSale,
  getSaleById,
};
