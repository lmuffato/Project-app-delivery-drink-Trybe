const { Router } = require('express');
const { registerUser } = require('../controllers/registerController');
const { validateNewUserData } = require('../middlewares/registerValidations');

const router = Router();

router.post('/', validateNewUserData, registerUser);

module.exports = router; 
