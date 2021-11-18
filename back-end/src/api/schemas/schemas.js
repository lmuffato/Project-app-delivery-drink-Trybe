const Joi = require('joi');

module.exports = {
  createSalesSchemas: Joi.object({
    sellerId: Joi.number().required(),
    totalPrice: Joi.number().required(),
    deliveryAddress: Joi.string().required(),
    deliveryNumber: Joi.number().required(),
    status: Joi.string().required(),
  }),
};
