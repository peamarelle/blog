const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const Post = sequelize.define("posts", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ''
      },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ''
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
      },
  });
  
  (async () => {
    await sequelize.sync();
  })();


module.exports = Post;