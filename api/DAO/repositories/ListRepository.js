const models = require('../models');

const { Op } = models.sequelize;

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
    const conditions = [];
    let where;
    if (user) {
      conditions.push({ user });
    }
    if (code) {
      conditions.push({ code });
    }
    if (conditions.length < 2) {
      [where] = conditions;
    } else {
      where = { [Op.and]: [...conditions] };
    }
    return this.list.findAll({ where });
  }

  update(data) {
    const { code, name } = data;
    return this.list.update({ name }, { where: { code } });
  }

  delete(code) {
    return this.list.destroy({ where: { code } });
  }
}

module.exports = ListRepository;
