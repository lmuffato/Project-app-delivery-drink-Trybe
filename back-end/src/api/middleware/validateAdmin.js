const { ONLY_ADMINISTRATORS_ACCESS } = require('../messages/errorMessages');

const validateAdmin = (req, res, next) => {
  const { role } = req.user;

  if (role !== 'administrator') return res.status(401).json({ data: ONLY_ADMINISTRATORS_ACCESS });

  next();
};

module.exports = {
  validateAdmin,
};
