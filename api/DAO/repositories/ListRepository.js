const uuid = require('uuid/v1');
const models = require('../models');
const db = models.sequelize;
const {
    list,
    item,
  } = models;

  class ListRepository {
    create(name, user) {
      const data = {
        code: uuid(),
        name,
        user
      };
      return list.create({where});
    } 
    read(code) {
      let where;
      if (code) {
        where = {code}
      }
      return list.findAll({where});
    } 
  }

  module.exports = ListRepository;