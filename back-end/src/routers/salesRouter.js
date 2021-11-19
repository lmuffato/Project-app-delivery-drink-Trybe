const { Router } = require('express');
const { registerSale, getSpecificSale } = require('../controllers/salesController');
const { saleValidations } = require('../middlewares/saleValidations');
const { validateJWT } = require('../middlewares/validateJwt');

const router = Router();

router.post('/', validateJWT, saleValidations, registerSale);

router.get('/:id', getSpecificSale);

module.exports = router; 
