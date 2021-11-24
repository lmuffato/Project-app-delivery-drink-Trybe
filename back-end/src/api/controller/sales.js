const {
  StatusCodes: { CREATED, OK, INTERNAL_SERVER_ERROR, NOT_FOUND },
} = require('http-status-codes');

const { Sale } = require('../../database/models');
const { User: users, ProductsSale } = require('../../database/models');

const ids = {
  user: 'user_id',
  seller: 'seller_id',
  sale: 'sale_id',
  product: 'product_id',
};
const getAllSales = async (req, res, next) => {
  try {
    const { email } = req.user;
    const { dataValues } = await users.findOne({ where: { email } });

    const { role } = dataValues;
    if (role === 'customer') {
      const sale = await Sale.findAll({ where: { [ids.user]: dataValues.id } });
      return res.status(OK).json(sale);
    }
    if (role === 'seller') {
      const sale = await Sale.findAll({ where: { [ids.seller]: dataValues.id } });
      return res.status(OK).json(sale);
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
    const params = req.body;
    const { data, sellInfo } = params;
    const sale = await Sale.create(sellInfo);

    data.forEach(async (product) => {
    const { id } = sale.dataValues;
    const { product_id: prodId, quantity } = product;
    await ProductsSale.create({ [ids.product]: prodId, quantity, [ids.sale]: id });
    });
    
    return res.status(CREATED).json(sale);
    } catch (e) {
    next({ statusCode: INTERNAL_SERVER_ERROR, message: e.message });
    } 
};

module.exports = {
  getAllSales,
  getSalesById,
  createSale,
};