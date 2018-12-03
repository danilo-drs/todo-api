const models = require('../models');

const { Op } = models.sequelize;

class ListRepository {
  constructor() {
    const { list } = models;
    this.list = list;
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
    const { code, name, user } = data;
    return this.list.update({ name }, {
      where: {
        [Op.and]: [
          { code },
          { user },
        ],
      },
    });
  }

  delete(code, user) {
    return this.list.destroy({
      where: {
        [Op.and]: [
          { code },
          { user }],
      },
    });
  }
}

module.exports = ListRepository;
