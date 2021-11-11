const { Sale } = require('../../models');
const SaleService = require('../../services/users/SaleService');
const rescue = require('express-rescue');

const getSale = rescue(async (_req, res) => {
  const allSale = await Sale.findAll();
  res.status(200).json(allSale);
});

const create = rescue(async (req, res) => {
  const { totalPrice, deliveryAdress, deliveryNumber, status } = req.body;
  const newSale = SaleService.validateEntries({ totalPrice, deliveryAdress, deliveryNumber, status });
  if (newSale.message) return res.status(newSale.status).json({ message: newSale.message });
  const createdSale = await Sale.create({ totalPrice, deliveryAdress, deliveryNumber, status });
  res.status(200).json(createdSale);
});

const exclude = rescue(async (req, res) => {
  const { id } = req.params;
  await Sale.destroy( { where: { id } });
  res.status(204).end();
})

const getById = rescue(async (req, res) => {
  const { id } = req.params;
  const sale = await Sale.findByPk(id);
  if (!sale) return res.status(404).json({ message: 'Sale does not exist' });
  res.status(200).json(sale);
});

// const update = rescue(async (res, req) => {
//   const { id } = req.params;
//   const {  } = req.body;
// });

module.exports = { getSale, create, exclude, getById };
