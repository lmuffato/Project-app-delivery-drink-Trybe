/**
 * @param {import('sequelize').DataTypes} DataTypes
 * @return {import('sequelize').ModelAttributes<import('sequelize').Model<any, any>,any>}
 */
 module.exports = (DataTypes) => ({
  productId: {
    allowNull: false,
    field: 'product_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    primaryKey: true,
    references: { model: 'products', key: 'id' },
    type: DataTypes.INTEGER
  },
  saleId: {
    allowNull: false,
    field: 'sale_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    primaryKey: true,
    references: { model: 'sales', key: 'id' },
    type: DataTypes.INTEGER
  },
  quantity: {
    allowNull: false,
    type: DataTypes.INTEGER
  }
})
