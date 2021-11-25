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
    type: DataTypes.STRING(100)
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING(100),
    unique: true
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING(32)
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING(20)
  },
})
