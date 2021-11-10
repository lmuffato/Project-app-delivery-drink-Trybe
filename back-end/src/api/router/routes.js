const router = require('express').Router();

const userController = require('../controllers/userController');
const productController = require('../controllers/productController');
const saleController = require('../controllers/saleController');

const middlewares = require('../middlewares/userValidations');
const auth = require('../middlewares/auth');

router.post('/login', auth.generateToken, userController.validUser);

router.get('/sellers', userController.getAllSellers);

router.post('/users', middlewares.findUserByNameOrEmail, userController.addUser);
router.get('/users', userController.getAllUsers);
router.post('/users/admin',
  auth.verifyToken,
  middlewares.verifyRoleAdmin,
  middlewares.findUserByNameOrEmail,
  userController.addUserByAdmin,
);
router.delete('/users/:id', userController.removeUser);

router.get('/products', productController.getAllProducts);

router.get('/sellersales', auth.verifyToken, saleController.findSalesById);
router.get('/sales', saleController.getAllSales);
router.get('/sales/:id', saleController.getOneSale);
router.post('/sales', auth.verifyToken, saleController.createSales);
router.put('/sales/:id', auth.verifyToken, saleController.updateStatus);

module.exports = router;
