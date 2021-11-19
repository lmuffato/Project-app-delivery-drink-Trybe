const { StatusCodes, ReasonPhrases } = require('http-status-codes');
const router = require('express').Router();
const SaleController = require('../controllers/sale');
const SaleService = require('../services/sale');
const validateToken = require('../middlewares/validateToken');
const { parseToken } = require('../../utils/parseToken');

router.get('/all', async (_req, res) => {
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

router.get('/', validateToken, async (req, res) => {
  const { authorization: token } = req.headers;
  const { email } = parseToken({ token });
  try {
    const sales = await SaleService.getOrdersByUserEmail({ email });
    res.status(StatusCodes.OK).json({ result: sales });
  } catch (error) {
    console.error(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(ReasonPhrases.INTERNAL_SERVER_ERROR);
  }
});

router.post('/', validateToken, SaleController.create);

module.exports = router;
