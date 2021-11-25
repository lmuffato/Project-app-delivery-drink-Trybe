'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];

/**
 * @typedef {{ name: string, price: number, urlImage: string}} Product
 */
/**
 * @typedef {{
  userId: number,
  sellerId: number,
  totalPrice: number,
  deliveryAddress: string,
  deliveryNumber: string,
  saleDate: string,
  status: string,
}} Sale
 */
/**
 * @typedef {{ name: string, email: string, password: string, role: string}} User
 */

/**
 * @type{{
 *  Product: import('sequelize').ModelCtor<Model<Product>>,
 *  Sale: import('sequelize').ModelCtor<Model<Sale>>,
 *  User: import('sequelize').ModelCtor<Model<{postId: number, categoryId: number}>>
 *  SalesProduct: import('sequelize').ModelCtor<Model<User>>,
 * }}
 */
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
