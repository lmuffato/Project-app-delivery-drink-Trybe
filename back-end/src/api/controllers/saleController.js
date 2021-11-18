const saleService = require('../services/saleService');

const create = async (req, res, next) => {
  try {
    const {
      userId, sellerId, totalPrice,
      deliveryAddress, deliveryNumber, status,
    } = req.body;

    const newSale = await saleService.create({
      userId,
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      status,
    });

    return res.status(201).json({ sale: newSale });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = {
  create,
};