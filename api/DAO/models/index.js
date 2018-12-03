const Sequelize = require('sequelize');
const config = require('../../../config').db;

const sequelize = new Sequelize(config.database, config.username, config.password, config);
const db = {
  item: sequelize.import('./item'),
  list: sequelize.import('./list'),
  sequelize,
};
db.list.associate(db);
db.item.associate(db);

module.exports = db;
