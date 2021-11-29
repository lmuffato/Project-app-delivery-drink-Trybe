module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define(
    "Sale",
    {
      user_id: DataTypes.INTEGER,
      seller_id: DataTypes.INTEGER,
      total_price: DataTypes.STRING,
      delivery_address: DataTypes.STRING,
      delivery_number: DataTypes.STRING,
      sale_date: DataTypes.DATE,
      status: DataTypes.STRING(50),
    },
    {
      timestamps: false,
      tableName: "sales",
      underscored: true,
      createdAt: "saleDate",
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
