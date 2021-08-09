module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Games', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull: true,
        type: Sequelize.STRING
      },
      difficulty: {
        allowNull: false,
        type: Sequelize.STRING
      }
    })
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('Games')
  }
}
