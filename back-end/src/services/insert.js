const lib = require('./lib');

const insert = async (table, values) => lib[table].create(values);

module.exports = insert;