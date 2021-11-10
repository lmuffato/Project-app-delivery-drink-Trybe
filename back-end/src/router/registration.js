const { Router } = require('express');
const registrationValidate = require('../validations/validates');

const router = Router();

router.post(
  '/',
  registrationValidate.validate,
);

module.exports = router;