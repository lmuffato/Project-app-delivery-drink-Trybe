const { nameIsRequired, nameLessThanTwelve } = require('../utils/errorMap');

const validateName = (req, _res, next) => {
  const { name } = req.body;
  if (!name) {
    next(nameIsRequired.error);
  }

  if (name.length < 12) {
    next(nameLessThanTwelve.error);
  }

  next();
};

module.exports = { validateName };
