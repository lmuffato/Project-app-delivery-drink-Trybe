const Joi = require('joi');

const login = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const register = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const user = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().required(),
});

const product = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  urlImage: Joi.string(),
});

const sale = Joi.object({
  userId: Joi.number().required(),
  sellerId: Joi.number().required(),
  totalPrice: Joi.number().required(),
  deliveryAddress: Joi.string().required(),
  deliveryNumber: Joi.string().required(),
  saleDate: Joi.date(),
  cart: Joi.array().required(),
});

const saleStatus = (role) => {
  const states = {
    administrator: ['Em Trânsito', 'Preparando', 'Entregue', 'Pendente'],
    seller: ['Em Trânsito', 'Preparando'],
    customer: ['Entregue'],
  };
  return Joi.object({
    status: Joi.string().valid(...states[role]).required(),
  });
};

module.exports = { login, register, user, product, sale, saleStatus };
