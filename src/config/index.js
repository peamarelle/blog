const notenv = require('dotenv').config();

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    port: process.env.PORT,
    log_level: process.env.LOG_LEVEL,
    database: {
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        database: process.env.DATABASE_NAME,
        password: process.env.DATABASE_KEY,
    },
}