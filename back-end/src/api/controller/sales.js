const {
  StatusCodes: { CREATED, OK, INTERNAL_SERVER_ERROR, NOT_FOUND },
} = require('http-status-codes');
const { verify } = require('jsonwebtoken');

const { Sale, ProductsSale, User } = require('../../database/models');

const getAllSales = async (req, res, next) => {
  try {
    const { email, password } = req.user;
    const { dataValues } = await User.findOne({ where: { email, password } })

    const role = dataValues.role;
    if (role === 'customer') {
      const sale = await Sale.findAll({ where: { userId: dataValues.id } });
      return res.status(OK).json(sale);;
    }
    if (role === 'seller') {
      const sale = await Sale.findAll({ where: { sellerId: dataValues.id } });
      return res.status(OK).json(sale);;
    }

    res.status(NOT_FOUND).json({ message: 'User not found' });
  } catch (e) {
    next({ statusCode: INTERNAL_SERVER_ERROR, message: e.message });
  }
};

const getSalesById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const sale = await Sale.findByPk(id);
    res.status(OK).json(sale);
  } catch (e) {
    next({ statusCode: INTERNAL_SERVER_ERROR, message: e.message });
  }
};

const createSale = async (req, res, next) => {
  try {
    const params = { totalPrice, deliveryAddress, deliveryNumber, status, saleDate, userId, sellerId, data } = req.body;

    const sale = await Sale.create(params);
    data.forEach(async product => {
    const { id: saleId } = sale.dataValues
    const { productId, quantity } = product
    await ProductsSale.create({productId, quantity, saleId})
  });
    res.status(OK).json(sale);
  } catch (e) {
    next({ statusCode: INTERNAL_SERVER_ERROR, message: e.message });
  }
};

module.exports = {
  getAllSales,
  getSalesById,
  createSale,
}