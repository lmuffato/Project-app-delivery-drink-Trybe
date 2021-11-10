module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, allowNull: false },
  },
  {
    timestamps: false,
    tableName: 'users',
  });

  User.associate = ({ Sale }) => {
    User.hasMany(Sale, { foreignKey: 'id', as: 'user' });
  };

  return User;
};
