const express = require('express');
const router = express.Router();

const saleController = require('../../controllers/saleController');

router.post('/', /* inserir validação aqui */ saleController.createSale);

module.exports = router;
