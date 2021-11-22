const express = require('express');

const { userController } = require('../controller');

const router = express.Router();

router.post('/', userController.createUser);
router.get('/', userController.getusers);
router.delete('/:id', userController.deleteUser);

module.exports = router;