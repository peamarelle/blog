const ExpressServer = require('./server/expressServer');
const logger = require('./logger/index');
const config = require('../config/index')
const expressServer = new ExpressServer();

module.exports = async () => {
    expressServer.start();
    logger.info(`########################################
    Server listen on port ${config.port}!
    ########################################`);
    
}