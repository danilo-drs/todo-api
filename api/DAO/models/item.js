
module.exports = (sequelize, DataTypes) => {
  const item = sequelize.define('Item', {
    code: {
      type: DataTypes.UUID,
      field: 'code',
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING,
      field: 'description',
    },
    done: {
      type: DataTypes.BOOLEAN,
      field: 'done',
    },
  }, {
    timestamps: false,
    tableName: 'Item',
    schema: 'public',
  });

  item.associate = (models) => {
    item.belongsTo(models.list, {
      foreignKey: 'listCode',
    });
  };

  return item;
};
