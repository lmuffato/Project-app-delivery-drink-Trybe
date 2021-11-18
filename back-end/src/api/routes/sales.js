const { StatusCodes, ReasonPhrases } = require('http-status-codes');
const router = require('express').Router();
const SaleController = require('../controllers/sale');
const SaleService = require('../services/sale');
const validateToken = require('../middlewares/validateToken');

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
/*
  userName (13),
  sellerName (29),
  totalPrice (28),
  deliveryAddress (30),
  deliveryNumber(31),
  status: 'Pendente',
  saleDate: Date.now()
*/
router.post('/', validateToken, SaleController.create);

module.exports = router;
