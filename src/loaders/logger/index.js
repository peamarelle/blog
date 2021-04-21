const winston = require('winston');
const config = require('../../config/index');

let transports = [];
transports.push(new winston.transports.Console())

const logger = winston.createLogger({
    level: config.log_level,
    format: winston.format.simple(),
    transports
  });

module.exports = logger;