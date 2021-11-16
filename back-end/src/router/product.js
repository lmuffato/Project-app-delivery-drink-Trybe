const { Router } = require('express');

const productController = require('../database/controllers/productController');
const tokenValidate = require('../validations/auth/validateJWT');

const router = Router();

router.get(
  '/',
  tokenValidate.verifyToken,
  productController.getAll,
);

module.exports = router;
