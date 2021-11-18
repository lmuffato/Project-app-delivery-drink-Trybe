const express = require('express');
const rescue = require('express-rescue');

const { getAllProducts } = require('../controllers/Product');

const router = express.Router();

router
  .get('/', rescue(getAllProducts));

module.exports = router;