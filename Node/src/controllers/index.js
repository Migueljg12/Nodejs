const games = [
  {
    id: 1,
    name: 'The Medium',
    level: 'medium'
  },
  {
    id: 2,
    name: 'The Witcher 3',
    level: 'easy'
  }
]

const listGames = () => {
  return games
}

const createGame = game => {
  games.push(game)
}

const updateGame = (id, newName) => {
  const gameIndex = games.findIndex(game => game.id.toString() === id.toString())

  // console.log(trans)
  games[gameIndex].name = newName
}
const deleteGame = name => {
  const gameIndex = games.findIndex(game => game.name.includes(name))
  games.splice(gameIndex, 1)
}

module.exports = {
  createGame,
  deleteGame,
  listGames,
  updateGame
}
