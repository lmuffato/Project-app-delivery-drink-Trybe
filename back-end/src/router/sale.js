const { Router } = require('express');

const saleController = require('../database/controllers/saleController');
const tokenValidate = require('../validations/auth/validateJWT');

const router = Router();

router.post(
  '/',
  tokenValidate.verifyToken,
  saleController.create,
);

router.get(
  '/costumer/:id',
  tokenValidate.verifyToken,
  saleController.getByUserId,
);

router.get(
  '/:id',
  tokenValidate.verifyToken,
  saleController.getByOrderId,
);

module.exports = router;
