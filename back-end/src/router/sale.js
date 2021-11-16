const { Router } = require('express');
const loginValidate = require('../validations/validates');
const saleController = require('../database/controllers/saleController');

const router = Router();

router.post(
  '/',
  loginValidate.validateLogin,
  saleController.create,
);

module.exports = router;
