const logger = require('./src/util/logger');
const app = require('./src/app');

(async () => {
    try {
        const port = process.env.PORT || 8080;

        app.listen(port, () => {
            logger.info(`Listening on port ${port}`);
        });
    } catch (e) {
        logger.error(e.message, 'unable to initialize application:');
        process.exit(1);
    }
})();
