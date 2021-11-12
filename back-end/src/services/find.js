const lib = require('./lib');

const find = async (table, params) => {    
    const result = await lib[table].findAll({ where: params });
    return result;
};

module.exports = find;