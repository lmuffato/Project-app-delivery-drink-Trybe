const { expect } = require('chai');

const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const ProductModel = require('../../database/models/Product');

describe('O model de Product', () => {
  const Product = ProductModel(sequelize, dataTypes);
  const product = new Product();

  describe('possui o nome "Product"', () => {
    checkModelName(Product)('Product');
  });

  describe('possui as propriedades "name", "price", "url_image"', () => {
    ['name', 'price', 'url_image'].forEach(checkPropertyExists(product));
  });
});
