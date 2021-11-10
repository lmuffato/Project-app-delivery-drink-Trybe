const lib = require('./lib');

const deleteElement = async (table, param) => lib[table].destroy({ where: param });

module.exports = deleteElement;