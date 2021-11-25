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

const getAllSales = async (req, res) => {
  const { id } = req.params;

  const allSales = await Sale.getAllSales(id);

  if (allSales.message) {
    return res.status(404).json(allSales.message);
  }

  return res.status(200).json(allSales);
};

const setSaleStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const updatedSale = await Sale.setSaleStatus(id, status);
  return res.status(201).json(updatedSale);
};

const getProductsSale = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await Sale.getProductsOfSale(id);
  res.status(status).json(data);
};

module.exports = {
  createSale,
  getSales,
  getAllSales,
  setSaleStatus,
  getProductsSale,
};
