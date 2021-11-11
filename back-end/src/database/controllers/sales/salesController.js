const { Sale, SaleProduct } = require('../../models');
const SaleService = require('../../services/sale/saleSevice');
const rescue = require('express-rescue');

const getSale = rescue(async (_req, res) => {
  const allSale = await Sale.findAll();
  res.status(200).json(allSale);
});

const create = rescue(async (req, res) => {
  const { totalPrice, deliveryAddress, deliveryNumber, status, products } = req.body;
  const { id } = req.user;                                  // productId vem daqui

  const newSale = SaleService.validateEntries({ totalPrice, deliveryAddress, deliveryNumber, status });
  if (newSale.message) return res.status(newSale.status).json({ message: newSale.message });

  const createdSale = await Sale.create({ totalPrice, deliveryAddress, deliveryNumber, status, userId: id });

  await products.forEach((product) => {
    SaleProduct.create({
      saleId: createdSale.id,
      productId: product.id,
      quantity: product.quantity,
    });
  });

  res.status(200).json(createdSale); // saleId vem daqui
});

const getSalesProducts = rescue(async (_req, res) => {
  const allSale = await SaleProduct.findAll();
  res.status(200).json(allSale);
})

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

module.exports = { getSale, create, exclude, getById, getSalesProducts };
