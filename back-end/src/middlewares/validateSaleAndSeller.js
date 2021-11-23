const database = require('../database/models');

const validateSaleAndSeller = async (req, res, next) => {
  const { id, sellerId } = req.body;
  const sellerFound = await database.sale.findOne({ where: { id, sellerId } });
  if (sellerFound) return next();
  return res.status(404).json({ message: { message: 'Sale or Seller Incorrect' } });
};

module.exports = validateSaleAndSeller;
