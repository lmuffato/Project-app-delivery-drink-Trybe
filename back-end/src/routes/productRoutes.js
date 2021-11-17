const express = require('express');

const { getAllProducts } = require('../controllers/Product');

const router = express.Router();

router
  .get('/', getAllProducts);

module.exports = router;