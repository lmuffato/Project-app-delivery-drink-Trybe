const router = require('express').Router();
const controlSales = require('../controller/sales');
const validateTWD = require('../middleware/validateJWT');
const validSalesInput = require('../middleware/sales');

router.get('/', validateTWD, controlSales.getAllSales);
router.get('/:id', validateTWD, controlSales.getSalesById);
router.post('/', validateTWD, validSalesInput, controlSales.createSale);

/* router.put('/:id', validateTWD, controlSales.controlUpdate);
router.delete('/:id', validateTWD, controlSales.controlDelete); */

module.exports = router;