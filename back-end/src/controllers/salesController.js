const httpStatus = require('../utils/httpStatus');
const { createSale, saleById } = require('../services/salesService');

const registerSale = async (req, res) => {
  const { sale } = req;
  const { error, saleId } = await createSale(sale);
  if (error !== undefined) {
    return res.status(httpStatus.serverError).json({ error: { message: error } });
  }
  return res.status(httpStatus.created).json({ saleId });
};

const getSaleById = async (req, res) => {
  const { id } = req.params;

  const response = await saleById(id);
  return res.status(httpStatus.ok).json(response);
}

module.exports = {
  registerSale,
  getSaleById,
};
