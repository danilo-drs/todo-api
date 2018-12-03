const uuid = require('uuid/v1');
const ListRepository = require('../DAO/repositories/ListRepository');

module.exports = {
  get: ({ code, user }) => new ListRepository().read({ code, user }),
  create: data => new ListRepository().create({ ...data, code: uuid() }),
};
