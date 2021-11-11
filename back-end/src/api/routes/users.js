const router = require('express').Router();
const controlUsers = require('../controller/users');
const userValidation = require('../middleware/user');
const loginValidation = require('../middleware/login');
const validateTWD = require('../middleware/validateJWT');

router.post('/', userValidation.validUser, controlUsers.createNewUser);
// router.get('/', validateTWD, controlUsers.controlAdminCreate);
router.get('/login', validateTWD, loginValidation, controlUsers.loginUser);
// router.put('/', validateTWD, controlUsers.controlAdminCreate);
// router.delete('/', validateTWD, controlUsers.controlAdminCreate);

module.exports = router;