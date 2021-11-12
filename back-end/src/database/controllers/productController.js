const { HTTP_NOT_FOUND, HTTP_BAD_REQUEST } = require('../../status');
const productService = require('../services/productService');

async function getAll(_req, res) {
  try {
    const { code, error, data } = await productService.getAll();

    if (error) return res.status(code).json({ error });

    return res.status(code).json(data);
  } catch (e) {
    return res.status(HTTP_NOT_FOUND).json({ error: e.message });
  }
};

module.exports = {
  getAll,
};
