const rescue = require('express-rescue');
const { SaleProduct } = require('../../models');

const getSalesProducts = rescue(async (_req, res) => {
  const allSale = await SaleProduct.findAll();
  res.status(200).json(allSale);
});

// o create está no salesController

module.exports = { getSalesProducts };
