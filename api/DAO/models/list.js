
module.exports = (sequelize, DataTypes) => {
    const list = sequelize.define('List', {
      code: {
        type: DataTypes.UUID,
        field: 'code',
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        field: 'name',
      },
      user: {
        type: DataTypes.UUID,
        field: 'user',
      },
    }, {
      timestamps: false,
      tableName: 'List',
      schema: 'public',
    });
  
    list.associate = (models) => {
        list.hasMany(models.item, {
        foreignKey: 'listCode',
      });
    };
  
    return list;
  };
  