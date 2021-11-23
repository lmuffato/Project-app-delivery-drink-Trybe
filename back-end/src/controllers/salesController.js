const httpStatus = require('../utils/httpStatus');
const { createSale } = require('../services/salesService');
const { Sale } = require('../database/models');

const registerSale = async (req, res) => {
  const { sale } = req;
  const { error, saleId } = await createSale(sale);
  if (error !== undefined) {
    return res.status(httpStatus.serverError).json({ error: { message: error } });
  }
  return res.status(httpStatus.created).json({ saleId });
};

const getAllSales = async (req, res) => {
  const { id } = req.user;
  const sales = await Sale.findAll({ where: { userId: id } })
    .catch((e) => ({ error: { message: e.message } }));
  if (sales.error !== undefined) {
    return res.status(httpStatus.serverError).json({ error: sales });
  }
  return res.status(httpStatus.ok).json({ sales });
};

module.exports = {
  registerSale,
  getAllSales,
};
