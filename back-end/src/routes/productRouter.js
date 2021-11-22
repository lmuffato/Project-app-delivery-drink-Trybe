const express = require('express');

const { productController } = require('../controller');
const midleware = require('../middleware');

const router = express.Router();

router.get('/', midleware.token, productController.getAllProducts);
router.get(':id/images', midleware.multer.imageUpload());
router.get('/:id', productController.getProduct);

module.exports = router; 
