const saleService = require('../services/saleService');

const create = async (req, res, next) => {
  try {
    const {
      userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status, products,
    } = req.body;

    const newSale = await saleService.create({
      userId,
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      status,
      products,
    });

    return res.status(201).json({ sale: newSale });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const findBySellerId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const sale = await saleService.findBySellerId(id);

    return res.status(200).json(sale);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const getAll = async (req, res) => {
  const sale = await saleService.getAll();
  return res.status(200).json(sale);
};

const findByIdSale = async (req, res, next) => {
  try {
    const { id } = req.params;
    const sale = await saleService.findByIdSale(id);

    return res.status(200).json(sale);
  } catch (err) {
    next(err);
  }
};

const findByUserId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const sale = await saleService.findSaleByUserId(id);

    return res.status(200).json(sale);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
  findBySellerId,
  getAll,
  findByIdSale,
  findByUserId,
};