import { HttpCreated, HttpOK } from '../http-reponses/20X'
import { listGames, createGame, deleteGame, updateGame, searchGame } from '../controllers'

const express = require('express')
const router = express.Router()

router.post('/', async (req, res, next) => {
  try {
    const { name, description, difficulty } = req.body
    const id = await createGame({ name, description, difficulty })
    const httpResponse = new HttpCreated({ id })
    res.status(httpResponse.statusCode).send(httpResponse)
  } catch (error) {
    next(error)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const games = await listGames()
    const httpResponse = new HttpOK({ games })
    res.status(httpResponse.statusCode).send(httpResponse)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const httpResponse = new HttpOK({ id })
    await deleteGame(id)

    res.status(httpResponse.statusCode).send(httpResponse)
  } catch (error) {
    next(error)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const { newName } = req.body
    const httpResponse = new HttpOK({ id, newName })
    await updateGame(id, newName)

    res.status(httpResponse.statusCode).send(httpResponse)
  } catch (error) {
    next(error)
  }
})

router.get('/:name', async (req, res, next) => {
  try {
    const { name } = req.params
    const games = await searchGame(name)
    res.send({ games })
  } catch (error) {
    next(error)
  }
})
export default router
