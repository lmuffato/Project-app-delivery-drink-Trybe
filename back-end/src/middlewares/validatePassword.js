const {
  passwordIsRequired,
  passwordCantBeEmpty,
} = require('../utils/errorMap');

const validatePassword = (req, _res, next) => {
  const { password } = req.body;

  if (password.length === 0) next(passwordCantBeEmpty.error);

  if (!password) next(passwordIsRequired.error);

  next();
};

module.exports = { validatePassword };
