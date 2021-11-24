const Joi = require('joi');

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
    totalPrice: Joi.number().required(),
    deliveryAddress: Joi.string().required(),
    deliveryNumber: Joi.string().required(),
    status: Joi.string().required(),
    saleDate: Joi.string().required(),
    userId: Joi.number().required(),
    sellerId: Joi.number().required(),
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