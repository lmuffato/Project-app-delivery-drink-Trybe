const router = require('express').Router();
const controlUsers = require('../controller/users');
const userValidation = require('../middleware/user');
const loginValidation = require('../middleware/login');
const validateTWD = require('../middleware/validateJWT');

router.post('/', userValidation.validUser, controlUsers.createNewUser);
router.post('/login', loginValidation, controlUsers.loginUser);
router.get('/sellers', validateTWD, controlUsers.findAllSellers);

module.exports = router;