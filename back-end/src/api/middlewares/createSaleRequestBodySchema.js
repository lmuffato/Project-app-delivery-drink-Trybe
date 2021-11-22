const Joi = require('joi');

const schema = Joi.object({
  sellerName: Joi.string()
    .required(),
  userName: Joi.string()
    .required(),
  totalPrice: Joi.number()
    .required(),
  deliveryAddress: Joi.string()
    .required(),
  deliveryNumber: Joi.number()
    .required(),
  products: Joi.array()
    .items(Joi.object({
      name: Joi.string().required(),
      quantity: Joi.number().required(),
    }))
    .min(1)
    .required(),
}).required();

module.exports = schema;
