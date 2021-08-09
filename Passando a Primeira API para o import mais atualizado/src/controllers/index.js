import { insertGame, selectGames, delGame, attGame, oneGame } from '../services'

export const listGames = async () => await selectGames()
export const createGame = async game => await insertGame(game)
export const deleteGame = async id => await delGame(id)
export const updateGame = async (id, newName) => await attGame(id, newName)
export const searchGame = async name => await oneGame(name)
