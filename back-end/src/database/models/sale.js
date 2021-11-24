/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 * @return
 */
module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define(
    "Sale",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: DataTypes.INTEGER,
      seller_id: DataTypes.INTEGER,
      total_price: DataTypes.STRING,
      delivery_address: DataTypes.STRING,
      delivery_number: DataTypes.STRING,
      sale_date: DataTypes.DATE,
      status: DataTypes.STRING,
    },
    { tableName: 'sales', timestamps: false }
  );
  Sale.associate = ( { User } ) => {
    Sale.belongsTo(User, {foreignKey: 'user_id' ,as: "customer" });
    Sale.belongsTo(User, { foreignKey: 'seller_id', as: "seller" });
  };
  return Sale;
};
