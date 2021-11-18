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
  name: {
    allowNull: false,
    type: DataTypes.STRING(100),
    unique: true
  },
  price: {
    allowNull: false,
    type: DataTypes.DECIMAL(4, 2)
  },
  urlImage: {
    allowNull: false,
    default: '',
    field: 'url_image',
    type: DataTypes.STRING(200)
  }
})
