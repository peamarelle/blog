const notenv = require('dotenv').config();

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    port: process.env.PORT,
    log_level: process.env.LOG_LEVEL,
}