module.exports = {
    dbConfig: {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            user: 'root',
            password: 'password',
            timezone: 'UTC',
            dateStrings: true,
            database: 'keyUpdate',
        },
        tables: {
            objKey: 'keyValue'
        }
    }
}
