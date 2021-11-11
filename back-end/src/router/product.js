const { Router } = require('express');

const productController = require('../database/controllers/productController');

const router = Router();

router.post(
  '/',
  productController.getAll,
);

module.exports = router;
