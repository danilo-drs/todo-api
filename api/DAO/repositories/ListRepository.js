const models = require('../models');

class ListRepository {
  constructor() {
    const {
      list,
      item,
    } = models;
    this.list = list;
    this.item = item;
  }

  create(data) {
    return this.list.create(data);
  }

  read({ code, user }) {
    const where = [];
    if (user) {
      where.push({ user });
    }
    if (code) {
      where.push({ code });
    }
    return this.list.findAll({ where });
  }

  update(data) {
    const { code, name } = data;
    return this.list.update({ name }, { where: { code } });
  }

  delete(code) {
    return this.list.delete(code);
  }
}

module.exports = ListRepository;
