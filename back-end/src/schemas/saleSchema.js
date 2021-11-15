const Joi = require('joi');

const validateSale = Joi.object({
  user_id: Joi.number().required(),
  seller_id: Joi.number().required(),
  total_price: Joi.string().required(),
  delivery_address: Joi.string().required(),
  delivery_number: Joi.string().required(),
  sale_date: Joi.date().required(),
  status: Joi.string().required(),
});

module.exports = {
  validateSale,
};
