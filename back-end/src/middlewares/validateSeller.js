const database = require('../database/models');

const validateSeller = async (req, res, next) => {
  const { seller } = req.body;
  console.log(seller);
  const sellerFound = await database.user.findOne({ where: { role: 'seller', id: seller.id } });
  console.log(sellerFound);
  if (sellerFound) return next();
  return res.status(404).json({ message: { message: 'Seller not found' } });
};

module.exports = validateSeller;
