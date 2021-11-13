const { StatusCodes } = require('http-status-codes');
const router = require('express').Router();

router.get('/', (_req, res) => res.status(StatusCodes.OK).send('Login'));

module.exports = router;
