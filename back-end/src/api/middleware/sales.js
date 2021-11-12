const { StatusCodes: { BAD_REQUEST } } = require('http-status-codes');
const { salesSchema } = require('../validations/schema');
// const { Sale } = require('../../database/models');

module.exports = async (req, _res, next) => {
  const { error } = salesSchema.validate(req.body);
  if (error) return next({ statusCode: BAD_REQUEST, message: error.message });
  next();
  }; 
