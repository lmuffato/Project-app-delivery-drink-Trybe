const { saleService } = require('../services');

const registerSale = async (req, res) => {
  const { sellerId, totalPrice, deliveryAddress, deliveryNumber, products } = req.body;
  const { id } = req.user;

  const saleData = { userId: id, sellerId, totalPrice, deliveryAddress, deliveryNumber, products };

  const newSale = await saleService.registerSale(saleData);

  return res.status(201).json(newSale);
};

module.exports = {
  registerSale,
};