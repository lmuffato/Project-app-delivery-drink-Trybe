const { StatusCodes, ReasonPhrases } = require('http-status-codes');
const router = require('express').Router();

const UserService = require('../services/user');

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    const jwt = await UserService.login({ email, password });
    if (jwt) {
      return res.status(StatusCodes.OK).json({ hasToken: true, token: jwt });
    }
    return res.status(StatusCodes.NOT_FOUND).end();
  } catch (error) {
    console.error(error);
    res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send(ReasonPhrases.INTERNAL_SERVER_ERROR);
  }
});

module.exports = router;
