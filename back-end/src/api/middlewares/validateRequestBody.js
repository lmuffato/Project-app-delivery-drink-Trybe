const { StatusCodes } = require('http-status-codes');
const Joi = require('joi');
const validateCreateSale = require('./createSaleRequestBodySchema');

/** @type {import('express').RequestHandler} */
const validateRequestBody = async (req, res, next) => {
  try {
    await validateCreateSale.validateAsync(req.body);
    next();
  } catch (error) {
    if (Joi.isError(error)) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
    }
    console.error(error.message);
    next(error);
  }
};

module.exports = validateRequestBody;
