const { Router } = require('express');

const userController = require('../database/controllers/useController');

const router = Router();

router.get(
  '/',
  userController.readByRole,
);

module.exports = router;