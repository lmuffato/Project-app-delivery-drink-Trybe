const { saleService } = require('../service');

const createSale = async (req, res) => {
  const dataSales = req.body;
  const Sale = await saleService.createSale(dataSales);
  return res.status(201).json(Sale);
};

const getSales = async (_req, res) => {
  const sales = await saleService.getSales();
  return res.status(200).json(sales);
};

module.exports = {
  createSale,
  getSales,
};