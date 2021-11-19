const { StatusCodes, ReasonPhrases } = require('http-status-codes');
const router = require('express').Router();
const ProductService = require('../services/product');

router.get('/', async (_req, res) => {
  try {
    const products = await ProductService.findAll();
    res.status(StatusCodes.OK).json({ result: products });
  } catch (error) {
    console.error(error);
    res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send(ReasonPhrases.INTERNAL_SERVER_ERROR);
  }
});

module.exports = router;
