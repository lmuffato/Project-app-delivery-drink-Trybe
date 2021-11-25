const Sale = require('../services/saleService');

const createSale = async (req, res) => {
  const data = req.body;
  const { status, id } = await Sale.createSale(data);
  return res.status(status).json(id);
};

const getAllSales = async (req, res) => {
  const { id } = req.params;

  const allSales = await Sale.getAllSales(id);

  if (allSales.message) {
    return res.status(404).json(allSales.message);
  }

  return res.status(200).json(allSales);
};

const getProductsSale = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await Sale.getProductsOfSale(id);
  res.status(status).json(data);
};

module.exports = {
  createSale,
  getAllSales,
  getProductsSale,
};
