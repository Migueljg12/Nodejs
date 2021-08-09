const express = require('express')
const router = express.Router()

const { HttpCreated, HttpOK } = require('../http-reponses/20X')
const gameController = require('../controllers')

router.post('/', async (req, res, next) => {
  try {
    const { name, description, difficulty } = req.body
    const id = await gameController.createGame({ name, description, difficulty })
    const httpResponse = new HttpCreated({ id })
    res.status(httpResponse.statusCode).send(httpResponse)
  } catch (error) {
    next(error)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const games = await gameController.listGames()
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
    await gameController.deleteGame(id)

    res.status(httpResponse.statusCode).send(httpResponse)
  } catch (error) {
    next(error)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const { newName } = req.body
    await gameController.updateGame(id, newName)

    res.send({
      game: req.body,
      statusCode: 201,
      message: 'created'
    })
  } catch (error) {
    next(error)
  }
})

router.get('/:name', async (req, res, next) => {
  try {
    const { name } = req.params
    const games = await gameController.searchGame(name)
    res.send({
      games,
      statusCode: 200,
      message: 'ok'
    })
  } catch (error) {
    next(error)
  }
})
module.exports = router
