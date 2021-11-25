const salesService = require('../services/salesService');

const HTTP_ERROR_STATUS = 400;
const HTTP_OK_STATUS = 200;
const HTTP_CREATED_STATUS = 201;

const create = async (req, res) => {
  try {
    const { sellerId, totalPrice, deliveryAddress, deliveryNumber, productList } = req.body;
    const { userId } = req;
    const response = await salesService.create({ 
      userId,
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      productList,
    });
    return res.status(HTTP_CREATED_STATUS).json(response);
  } catch (error) {
    return res.status(HTTP_ERROR_STATUS).json({
      message: error,
  });
  }
};

const getAll = async (req, res) => {
  try {
    const { role } = req.user;
    const { userId } = req;
    const response = await salesService.getAll({ userId, role });
    return res.status(HTTP_OK_STATUS).json(response);
  } catch (error) {
    return res.status(HTTP_ERROR_STATUS).json({
      message: error,
  });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await salesService.getById({ id });
    return res.status(HTTP_OK_STATUS).json(response);
  } catch (error) {
    console.log(error);
    return res.status(HTTP_ERROR_STATUS).json({
      message: error,
  });
  }
};

module.exports = {
  create,
  getAll,
  getById,
};