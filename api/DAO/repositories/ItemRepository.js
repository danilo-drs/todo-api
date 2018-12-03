const models = require('../models');

const { Op } = models.sequelize;

class ItemRepository {
  constructor() {
    const { item } = models;
    this.item = item;
  }

  create(data) {
    return this.item.create(data);
  }

  read({ listCode, code, user }) {
    const conditions = [];
    let where;
    if (listCode) {
      conditions.push({ listCode });
    }
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
    return this.item.findAll({ where });
  }

  update(data) {
    const {
      code, user, description, done,
    } = data;
    return this.item.update(
      { description, done },
      {
        where: {
          [Op.and]: [
            { code },
            { user },
          ],
        },
      },
    );
  }

  delete(code, user) {
    return this.item.destroy({
      where: {
        [Op.and]: [
          { code },
          { user },
        ],
      },
    });
  }
}

module.exports = ItemRepository;
