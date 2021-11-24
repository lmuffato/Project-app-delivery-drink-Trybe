const { Router } = require('express');
const { registerSale, getSaleById } = require('../controllers/salesController');
const { saleValidations } = require('../middlewares/saleValidations');
const { validateJWT } = require('../middlewares/validateJwt');

const router = Router();

router.post('/', validateJWT, saleValidations, registerSale);
router.get('/:id', getSaleById);

module.exports = router; 