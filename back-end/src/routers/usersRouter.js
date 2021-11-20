const { Router } = require('express');
const { listUsers } = require('../controllers/usersController');

const router = Router();

router.get('/', listUsers);

module.exports = router;