const router = require('express').Router();
const controlUsers = require('../controller/users');
const userValidation = require('../middleware/user');
const loginValidation = require('../middleware/login');
// const validateTWD = require('../middleware/validateJWT');

router.post('/', userValidation.validUser, controlUsers.createNewUser);
router.get('/login', loginValidation, controlUsers.loginUser);

module.exports = router;