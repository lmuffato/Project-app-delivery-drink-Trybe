const express = require('express');
const Sale = require('../controllers/sale');
const JoiValidate = require('../middlewares/JoiValidate');
const { sale, saleStatus } = require('../utils/JoiSchemas');
const validate = require('../middlewares/validators');

const route = express.Router();

route.use(validate.token);

route.post('/', JoiValidate(sale), Sale.create);
route.get('/', Sale.findAll);
route.get('/:id', Sale.findOne);
route.put('/:id', Sale.update);
route.post('/status/:id', 
(req, res, nxt) => JoiValidate(saleStatus(req.user.role))(req, res, nxt),
Sale.updateStatus);
route.delete('/:id', Sale.destroy);

module.exports = route;
