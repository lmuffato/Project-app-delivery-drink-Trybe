const saleService = require('../services/saleService');

const createSale = async (req, res) => {
  const order = req.body;
  // const user = req.token;

  const { status, message, sale } = await saleService.create(order);
  if (!sale) return res.status(status).json({ message });
  return res.status(status).json(sale);
};

module.exports = {
  createSale,
};
