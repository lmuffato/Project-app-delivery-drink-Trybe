const rescue = require('express-rescue');

const saleService = require('../services/sales');

const getAllSale = rescue(async (_req, res) => {
  const { status, data } = await saleService.getAllSale();
  res.status(status).json(data);
});

// const createSale = rescue(async (req, res) => {
  const createSale = async (req, res) => {
    const { email } = req.user;
    
    const { sellerId, totalPrice, deliveryAddress, deliveryNumber, status, putItem } = req.body;
    
    const { statusCode, data } = await saleService
    .createSale({ sellerId, totalPrice, deliveryAddress, deliveryNumber, status }, email, putItem );

    res.status(statusCode).json(data);
  };
  // });
  
  const getById = async (req, res) => {
    const { id } = req.params;
    const { status, data } = await saleService.getById(id);
    res.status(status).json(data);
  };
  
module.exports = {
  getAllSale,
  createSale,
  getById,
};
