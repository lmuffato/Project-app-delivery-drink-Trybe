const router = require('express').Router();

const userRoutes = require('./userRoutes');
const sellerRoutes = require('./sellerRoutes');
const productRoutes = require('./productRoutes');

router
  .use('/products', productRoutes)
  .use('/seller', sellerRoutes)
  .use('/user', userRoutes);

module.exports = router;
