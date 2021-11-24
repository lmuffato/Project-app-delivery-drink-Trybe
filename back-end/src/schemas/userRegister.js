const { body } = require('express-validator');

module.exports = [
  body('name').isString().exists(),
  body('email').isEmail().exists(),
  body('password').isString().exists(),
];
