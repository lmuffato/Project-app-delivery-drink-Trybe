const { HTTP_NOT_FOUND, HTTP_BAD_REQUEST } = require('../../status');
const saleService = require('../services/saleService');

async function create(req, res) {
  try {
    const { code } = await saleService.create(req.body);

    return res.status(code).json({ message: 'Works' });
  } catch(e) {
    return res.status(HTTP_NOT_FOUND).json({ error: e.message });
  }
};

module.exports = {
  create,
}
