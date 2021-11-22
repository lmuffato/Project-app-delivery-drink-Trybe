const httpStatus = require('../utils/httpStatus');
const { createSale } = require('../services/salesService');

const registerSale = async (req, res) => {
  const { sale } = req;
  const { error, saleId } = await createSale(sale);
  if (error !== undefined) {
    return res.status(httpStatus.serverError).json({ error: { message: error } });
  }
  return res.status(httpStatus.created).json({ saleId });
};

module.exports = {
  registerSale,
};
