const { Router } = require('express');

const productController = require('../database/controllers/productController');

const router = Router();

router.get(
  '/',
  productController.getAll,
);

module.exports = router;
