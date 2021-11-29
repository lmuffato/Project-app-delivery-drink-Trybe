const express = require('express');
const User = require('../../controllers/User');

const router = express.Router();

router.get('/', User.getSellers);

module.exports = router;
