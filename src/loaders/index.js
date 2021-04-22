const ExpressServer = require('./server/expressServer');
const logger = require('./logger/index');
const config = require('../config/index');
const sequelize = require('../database');

const expressServer = new ExpressServer();

module.exports = async () => {

    await sequelize.authenticate();
    logger.info('Connection has been established successfully.');

    expressServer.start();
    logger.info(`########################################
    Server listen on port ${config.port}!
    ########################################`);
}
