module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define(
    "Sale",
    {
      status: DataTypes.STRING(50),
    },
    {
      timestamps: false,
      tableName: "sales",
      underscored: true,
      createdAt: "saleDate",
      updatedAt: "updated",
    }
  );

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user",
    });
    Sale.belongsTo(models.User, {
      foreignKey: "seller_id",
      as: "seller",
    });
  };

  return Sale;
};
