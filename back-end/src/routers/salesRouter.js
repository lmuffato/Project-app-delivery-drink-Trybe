const { Router } = require('express');
const {
  registerSale,
  getAllSales,
  getSpecificSale,
  getSaleById,
} = require('../controllers/salesController');
const { saleValidations } = require('../middlewares/saleValidations');
const { validateJWT } = require('../middlewares/validateJwt');

const router = Router();

router.post('/', validateJWT, saleValidations, registerSale);
// router.get('/:id', getSaleById);

router.get('/:id', getSpecificSale);

router.get('/', validateJWT, getAllSales);

module.exports = router; 
