const dao = require('./dao');

const getAll = async () => {
    return await dao.fetchAll();
}

module.exports = {
    getAll
}