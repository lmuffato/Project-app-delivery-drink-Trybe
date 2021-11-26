const deleteElement = require('./delete');
const insert = require('./insert');
const update = require('./update');
const find = require('./find');
const takeToken = require('./takeToken');
const getSaleById = require('./getSaleById');
const passwordToken = require('./tokenPassword');

module.exports = {
    update,
    deleteElement,
    insert,
    find,
    takeToken,
    getSaleById,
    passwordToken,    
};
