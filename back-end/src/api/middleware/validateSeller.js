const { ONLY_SELLERS_ACCESS } = require('../messages/errorMessages');

const validateSeller = (req, res, next) => {
  const { role } = req.user;

  if (role !== 'seller' && role !== 'administrator') {
    return res.status(401).json({ data: ONLY_SELLERS_ACCESS });
  }

  next();
};

module.exports = {
  validateSeller,
};