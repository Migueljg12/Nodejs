const gameService = require('../services')

const listGames = async () => await gameService.selectGames()
const createGame = async game => await gameService.insertGame(game)
const deleteGame = async id => await gameService.delGame(id)
const updateGame = async (id, newName) => await gameService.attGame(id, newName)
const searchGame = async name => await gameService.oneGame(name)


module.exports = {
  createGame,
  listGames,
  deleteGame,
  updateGame,
  searchGame
}
