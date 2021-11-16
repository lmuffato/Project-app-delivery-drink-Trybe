/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 * @return
 */
module.exports = (sequelize, DataTypes) => {
  const sales = sequelize.define(
    "sales",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: DataTypes.INTEGER,
      sellerId: DataTypes.INTEGER,
      totalPrice: DataTypes.STRING,
      deliveryAddress: DataTypes.STRING,
      deliveryNumber: DataTypes.STRING,
      salesDate: DataTypes.DATE,
      status: DataTypes.STRING,
    },
    { timestamps: false }
  );
  sales.associate = ( { users } ) => {
    sales.belongsTo(users, { as: "users" });
    sales.belongsTo(users, { as: "seller" });
  };
  return sales;
};
