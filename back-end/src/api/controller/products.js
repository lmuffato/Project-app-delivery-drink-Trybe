const {
  StatusCodes: { CREATED, OK, INTERNAL_SERVER_ERROR},
} = require('http-status-codes');

const { Product } = require('../../database/models');

const getAllProducts = async (_req, res, next) => {
  try {
    const products = await Product.findAll();
    res.status(OK).json(products);
  } catch (e) {
    next({ statusCode: INTERNAL_SERVER_ERROR, message: e.message });
  }
};

const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    res.status(OK).json(product);
  } catch (e) {
    next({ statusCode: INTERNAL_SERVER_ERROR, message: e.message });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
}