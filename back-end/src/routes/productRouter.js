const express = require('express');

const { productController } = require('../controller');
const midleware = require('../middleware');

const router = express.Router();

router.get('/', midleware.token, productController.getAllProducts);
router.put(':id/images', midleware.multer.imageUpload());

module.exports = router; 
