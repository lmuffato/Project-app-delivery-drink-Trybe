const { sale } = require('../service');

const createSale = async (req, res) => {
  const dataSales = req.body;
  const Sale = await sale.createSale(dataSales);
  console.log(sale);
  res.status(201).json(Sale);
};

const getSales = async (_req, res) => {
  const sales = await sale.getSales();
  res.status(200).json(sales);
};

module.exports = {
  createSale,
  getSales,
};
