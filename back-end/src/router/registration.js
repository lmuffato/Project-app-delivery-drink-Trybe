const { Router } = require('express');
const registrationValidate = require('../validations/validates');
const userController = require('../database/controllers/useController')

const router = Router();

router.post(
  '/',
  registrationValidate.validateRegistration,
  userController.createUser,
);

module.exports = router;
