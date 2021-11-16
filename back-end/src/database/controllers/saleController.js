const { HTTP_NOT_FOUND, HTTP_BAD_REQUEST } = require('../../status');
const saleService = require('../services/saleService');

async function create(req, res) {
  try {
    await saleService.create(req.body);
  } catch(e) {
    return res.status(HTTP_NOT_FOUND).json({ error: e.message });
  }
};
