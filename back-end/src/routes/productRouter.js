const express = require('express');

const controller = require('../controller');
const midleware = require('../middleware');

const router = express.Router();

router.get('/', midleware.token, controller.product);
router.put(':id/images', midleware.multer.imageUpload());

module.exports = router; 
