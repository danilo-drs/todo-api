const uuid = require('uuid/v1');
const ItemRepository = require('../DAO/repositories/ItemRepository');

module.exports = {
  create: data => new ItemRepository().create({ ...data, code: uuid() }),
  get: ({ listCode, code, user }) => new ItemRepository().read({ listCode, code, user }),
  update: data => new ItemRepository().update({ ...data }),
  destroy: (code, user) => new ItemRepository().delete(code, user),
};
