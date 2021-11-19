const httpStatus = require('../utils/httpStatus');
const { createSale } = require('../services/salesService');
const { Sale, Product } = require('../database/models');

const registerSale = async (req, res) => {
  const { sale } = req;
  const { error, saleId } = await createSale(sale);
  if (error !== undefined) {
    return res.status(httpStatus.serverError).json({ error: { message: error } });
  }
  return res.status(httpStatus.created).json({ message: `Sale was created with id: ${saleId}` });
};

const getSpecificSale = async (req, res) => {
  const { id } = req.params;

  const sale = await Sale.findOne(
    { where: { id }, include: { all: true } }
  );
  return res.status(200).json(sale);
};

module.exports = {
  registerSale,
  getSpecificSale,
};
