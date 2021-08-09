module.exports = (sequelize, DataTypes) => {
  const Games = sequelize.define('Games', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    difficulty: DataTypes.STRING
  })

  return Games
}
