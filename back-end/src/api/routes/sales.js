const express = require('express');
const Sales = require('../../controllers/saleController');

const router = express.Router();

router.post('/', /* inserir validação aqui */ Sales.createSale);

module.exports = router;
