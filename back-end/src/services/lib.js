const { User, Sale, Product, SalesProduct } = require('../database/models');

const lib = {
    users: User,
    sales: Sale,
    products: Product,
    salesProducts: SalesProduct,
};

module.exports = lib;