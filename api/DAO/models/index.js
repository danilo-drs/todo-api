const Sequelize = require('sequelize');
const config = require('../../../config').db;

let sequelize;
if (config.connectionString) {
  sequelize = new Sequelize(config.connectionString);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
const db = {
  item: sequelize.import('./item'),
  list: sequelize.import('./list'),
  sequelize,
};
db.list.associate(db);
db.item.associate(db);

module.exports = db;
