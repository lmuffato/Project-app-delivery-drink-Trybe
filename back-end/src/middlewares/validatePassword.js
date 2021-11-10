const {
  passwordIsRequired,
  passwordCantBeEmpty,
  passwordGreaterThanSix,
} = require('../utils/errorMap');

const validatePassword = (req, _res, next) => {
  const { password } = req.body;

  if (password.length === 0) next(passwordCantBeEmpty.error);

  if (password.length < 6) next(passwordGreaterThanSix.error);

  if (!password) next(passwordIsRequired.error);

  next();
};

module.exports = { validatePassword };
