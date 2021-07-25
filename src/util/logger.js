const winston = require('winston');

const logger = new (winston.Logger)({
    level: process.env.NODE_ENV === 'production' ? 'error' : 'debug',
    transports: [
        new (winston.transports.Console)({ colorize: true, prettyPrint: true }),
    ],
});

module.exports = logger;
