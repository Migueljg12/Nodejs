module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Games', [{
      name: 'The Witcher 3',
      description: 'Jogo de RPG',
      difficulty: 'hard'
    }, {
      name: 'Medal of Honor',
      description: 'Jogo de FPS de Guerra',
      difficulty: 'medium'
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Games', null, {})
  }
};
