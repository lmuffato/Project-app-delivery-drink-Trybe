const express = require('express');

const controller = require('../controller');
const { imageUpload } = require('../middleware/multer');
// const midleware = require('../middleware');

const router = express.Router();

router.get('/', /* midleware.token, */controller.product);
router.put(':id/images', imageUpload());
// products/:id/image

module.exports = router; 