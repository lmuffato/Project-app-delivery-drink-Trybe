const { Router } = require('express');
const registrationValidate = require('../validations/validates');

const router = Router();

router.post(
  '/',
  registrationValidate.validateName,
);

module.exports = router;