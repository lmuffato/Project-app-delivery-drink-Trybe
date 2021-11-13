const { StatusCodes, ReasonPhrases } = require('http-status-codes');
const router = require('express').Router();
const UserService = require('../services/user');

router.get('/', async (_req, res) => {
  try {
    const users = await UserService.findAll();
    res.status(StatusCodes.OK).json({ result: users });
  } catch (error) {
    console.error(error);
    res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send(ReasonPhrases.INTERNAL_SERVER_ERROR);
  }
});

module.exports = router;
