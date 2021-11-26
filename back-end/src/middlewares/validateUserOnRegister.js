const { validationResult } = require('express-validator');
const { User } = require('../database/models');

const validateUserOnRegister = async (req, res, next) => {
  const { email } = req.body;

  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

  const user = await User.findOne({ where: { email } });

  if (user) {
    return res
      .status(409)
      .json({ message: 'User with this email already registered.' });
  }

  next();
};

module.exports = validateUserOnRegister;
