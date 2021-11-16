const router = require('express').Router();

const UserController = require('../controllers/userController');

router.post('/', UserController.register);

module.exports = router;
