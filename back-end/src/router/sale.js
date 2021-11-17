const { Router } = require('express');

const saleController = require('../database/controllers/saleController');
const tokenValidate = require('../validations/auth/validateJWT');

const router = Router();

router.post(
  '/',
  tokenValidate.verifyToken,
  saleController.create,
);

module.exports = router;
