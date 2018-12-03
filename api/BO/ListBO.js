const uuid = require('uuid/v1');
const ListRepository = require('../DAO/repositories/ListRepository');

module.exports = {
  create: data => new ListRepository().create({ ...data, code: uuid() }),
  get: ({ code, user }) => new ListRepository().read({ code, user }),
  update: data => new ListRepository().update({ ...data }),
  destroy: (code, user) => new ListRepository().delete(code, user),
};
