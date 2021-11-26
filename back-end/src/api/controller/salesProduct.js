const {
    StatusCodes: { OK, INTERNAL_SERVER_ERROR },
  } = require('http-status-codes');
const { ProductsSale } = require('../../database/models');

const getAllSales = async (req, res, next) => {
    try {
    const saleId = 'sale_id';
    const { id } = req.body;
    const products = ProductsSale.findAll({ where: { [saleId]: id } });
    res.status(OK).json(products);
    } catch (e) {
      console.log(e);
      next({ statusCode: INTERNAL_SERVER_ERROR, message: e.message });
    }
  };

  module.exports = {
    getAllSales,
  };