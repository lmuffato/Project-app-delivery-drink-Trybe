const Joi = require('joi');

const ids = {
  user: 'user_id',
  seller: 'seller_id',
  deliveryNmb: 'delivery_number',
  saleDate: 'sale_date',
  deliveryAdd: 'delivery_address',
  price: 'total_price',
};

const userSchema = Joi.object({
  name: Joi.string().required().min(8),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6).message('"password" length must be 6 characters long'),
  role: Joi.string().required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const categorySchema = Joi.object({
  name: Joi.string().required(),
});

const postSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().items(Joi.number()).required(),
});

const updatePostSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
});

const salesSchema = Joi.object({
  sellInfo: Joi.object({
    [ids.price]: Joi.number().required(),
    [ids.deliveryAdd]: Joi.string().required(),
    [ids.deliveryNmb]: Joi.string().required(),
    status: Joi.string().required(),
    [ids.saleDate]: Joi.string().required(),
    [ids.user]: Joi.number().required(),
    [ids.seller]: Joi.number().required(),
  }),
  data: Joi.array().required(),
});

module.exports = {
  userSchema,
  loginSchema,
  categorySchema,
  postSchema,
  updatePostSchema,
  salesSchema,
};