const productService = require('../services/productService');

const HTTP_ERROR_STATUS = 400;
const HTTP_OK_STATUS = 200;
// const HTTP_CREATED_STATUS = 201;

const getAll = async (req, res) => {
  try {
    const response = await productService.getAll();
    return res.status(HTTP_OK_STATUS).json(response);
  } catch (error) {
    return res.status(HTTP_ERROR_STATUS).json({
      message: error,
  });
  }
};

module.exports = {
  getAll,
};