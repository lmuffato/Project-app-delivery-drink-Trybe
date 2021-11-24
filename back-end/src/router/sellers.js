const { Router } = require('express');

const userController = require('../database/controllers/useController');
const saleController = require('../database/controllers/saleController');

const router = Router();

router.get(
  '/',
  userController.readByRole,
);

router.put(
  '/orders/:id',
  saleController.updateStatus,
);

module.exports = router;