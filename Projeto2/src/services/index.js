const { Games } = require('../models')
const { NotFoundError } = require('../http-reponses/40X')

const insertGame = async game => {
  const gameCreated = await Games.create({
    name: game.name,
    descripition: game.description,
    difficulty: game.difficulty
  })
  return gameCreated.dataValues.id
}

const selectGames = async () => await Games.findAll()


const delGame = async id => {
  const deleted = await Games.destroy({
    where: { id }
  })
  if (!deleted) throw new NotFoundError('id', id)
}

const attGame = async (id, newName) => {
  const [updated] = await Games.update({ name: newName }, {
    where: { id }
  })
  if (!updated) throw new NotFoundError('id', id)
}

const oneGame = async name => {
  return await Games.findAll({ where: { name } })
}

module.exports = {
  insertGame,
  delGame,
  selectGames,
  attGame,
  oneGame
}
