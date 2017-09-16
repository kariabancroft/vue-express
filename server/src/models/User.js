module.exports = (sequelize, DataTypes) =>
  sequelize.define('User', {
    // Options/attributes on this table
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  })
