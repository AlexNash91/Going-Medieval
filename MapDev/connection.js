const Sequelize = require('sequelize');

const sequelize = new Sequelize('test_db', 'root', 'rootroot', {
  host: 'localhost',
  dialect: 'sqlite',
});
