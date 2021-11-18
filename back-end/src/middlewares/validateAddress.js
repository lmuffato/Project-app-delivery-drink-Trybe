const validateAddress = (req, res, next) => {
  const { address } = req.body;
  if (address.street.length > 10 && address.number.length > 0) return next();
  return res.status(400).json({ message: { message: 'Invalid address' } });
};

module.exports = validateAddress;
