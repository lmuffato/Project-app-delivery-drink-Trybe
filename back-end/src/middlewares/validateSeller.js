const database = require('../database/models');

const validateSeller = async (req, res, next) => {
  const seller = req.body;
  const sellers = await database.user.find({ where: { role: 'seller' } });
  if (sellers.some((s) => seller.name === s.name)) return next();
  return res.status(404).json({ message: { message: 'Seller not found' } });
};

module.exports = validateSeller;
