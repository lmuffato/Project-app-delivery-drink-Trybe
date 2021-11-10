const lib = require('./lib');

const update = async (table, params, values) => {
    const result = await lib[table].update(values, { where: params });
    return result;
};

module.exports = update;