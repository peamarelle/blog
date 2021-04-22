const { Sequelize } = require('sequelize');
const config = require('./config/index');

const {database, host, password, user} = config.database;

const sequelize = new Sequelize(database, user, password, {
    host,
    dialect: 'mysql'
});

module.exports = sequelize;