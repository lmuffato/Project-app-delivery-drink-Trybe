const Sales = require('../services/salesService');

const getSales = async (_req, res) => {
  const { data, status } = await Sales.getSales();
  return res.status(status).json(data);
};

module.exports = {
  getSales,
};

