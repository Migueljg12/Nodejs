import { Games } from '../models'
import { NotFoundError } from '../http-reponses/40X'

export const insertGame = async game => {
  const gameCreated = await Games.create({
    name: game.name,
    descripition: game.description,
    difficulty: game.difficulty
  })
  return gameCreated.dataValues.id
}

export const selectGames = async () => await Games.findAll()

export const delGame = async id => {
  const deleted = await Games.destroy({
    where: { id }
  })
  if (!deleted) throw new NotFoundError('id', id)
}

export const attGame = async (id, newName) => {
  const [updated] = await Games.update({ name: newName }, {
    where: { id }
  })
  console.log(Games)
  if (!updated) throw new NotFoundError('id', id)
}

export const oneGame = async name => {
  return await Games.findAll({ where: { name } })
}
