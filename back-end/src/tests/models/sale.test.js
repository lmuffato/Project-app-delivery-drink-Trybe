const { expect } = require('chai');

const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const SaleModel = require('../../database/models/Sale');

describe('O model de Sale', () => {
  const Sale = SaleModel(sequelize, dataTypes);
  const sale = new Sale();

  describe('possui o nome "Sale"', () => {
    checkModelName(Sale)('Sale');
  });

  describe('possui as propriedades "user_id", "seller_id", "total_price", "delivery_address", "delivery_number", "sale_date", "status"', () => {
    ['user_id', 'seller_id', 'total_price', 'delivery_address', 'delivery_number', 'sale_date', 'status'].forEach(checkPropertyExists(sale));
  });
});
