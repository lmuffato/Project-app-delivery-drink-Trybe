const { Router } = require('express');
const { loginUser } = require('../controllers/loginController');
const { emailValidateLogin, passwordValidate } = require('../middlewares/validations');

const router = Router();

router.post('/', emailValidateLogin, 
passwordValidate, loginUser);

module.exports = router; 
