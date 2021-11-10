/**
 * @param {import('sequelize').DataTypes} DataTypes
 * @return {import('sequelize').ModelAttributes<import('sequelize').Model<any, any>,any>}
 */
 module.exports = (DataTypes) => ({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  userId: {
    allowNull: false,
    field: 'user_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    references: { model: 'Users', key: 'id' },
    type: DataTypes.INTEGER,
  },
  sellerId: {
    allowNull: false,
    field: 'seller_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    references: { model: 'Users', key: 'id' },
    type: DataTypes.INTEGER,
  },
  totalPrice: {
    allowNull: false,
    field: 'total_price',
    type: DataTypes.DECIMAL(9, 2)
  },
  deliveryAddress: {
    allowNull: false,
    field: 'delivery_adress',
    type: DataTypes.STRING(100)
  },
  deliveryNumber: {
    allowNull: false,
    field: 'delivery_number',
    type: DataTypes.STRING(50)
  },
  status: {
    allowNull: false,
    defaultValue: 'Pendente',
    type: DataTypes.ENUM('Pendente', 'Preparando', 'Em Trânsito', 'Entregue')
  },
  role: {
    allowNull: false,
    type: DataTypes.ENUM('administrator', 'seller', 'customer')
  },
  saleDate: {
    allowNull: false,
    field: 'sale_date',
    type: DataTypes.DATE
  }
})
