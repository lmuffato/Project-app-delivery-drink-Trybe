const { StatusCodes, ReasonPhrases } = require('http-status-codes');
const router = require('express').Router();
const SaleService = require('../services/sale');

router.get('/', async (_req, res) => {
  try {
    const sales = await SaleService.findAll();
    res.status(StatusCodes.OK).json({ result: sales });
  } catch (error) {
    console.error(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(ReasonPhrases.INTERNAL_SERVER_ERROR);
  }
});

module.exports = router;
