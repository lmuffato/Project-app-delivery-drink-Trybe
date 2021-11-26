const lib = require('./lib');

const find = async (table, params) => {    
    const result = await lib[table].findAll({ raw: true, where: params });
    return result;
};

module.exports = find;