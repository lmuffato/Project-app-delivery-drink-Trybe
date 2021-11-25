const { Router } = require('express');
const {
  listUsers,
  adminList,
} = require('../controllers/usersController');
const { validateJWT } = require('../middlewares/validateJwt');

const router = Router();

router.get('/', listUsers);

router.get('/admin', validateJWT,  adminList);

module.exports = router;
