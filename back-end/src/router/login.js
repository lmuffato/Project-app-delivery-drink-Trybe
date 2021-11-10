const { Router } = require('express');
const loginValidate = require('../validations/validates');

const router = Router();

router.post(
  '/',
  loginValidate.validateEmail,
  loginValidate.validatePassword,
);

module.exports = router;