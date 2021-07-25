const knex = require('knex');
const { dbConfig } = require('../../config');

const initDb = () => {
    const db = knex({
        client: dbConfig.client,
        connection: dbConfig.connection,
    });
    return db;
};

module.exports = {
    initDb,
};
