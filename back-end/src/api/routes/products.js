const router = require('express').Router();
const controlProducts = require('../controller/products');
const validateTWD = require('../middleware/validateJWT');

router.get('/', validateTWD, controlProducts.getAllProducts);
router.get('/:id', validateTWD, controlProducts.getProductById);

module.exports = router;