const database = require('../database/models');

const validateCustomer = async (req, res, next) => {
  const { customer } = req.body;
  const customers = await database.user.findAll({ where: { role: 'customer' } });
  if (customers.some((c) => customer.name === c.name && customer.id === c.id)) return next();
  return res.status(404).json({ message: { message: 'Seller not found' } });
};

module.exports = validateCustomer;