const express = require('express')
const router = express.Router()

const gameController = require('../controllers')

router.get('/', (req, res) => {
  const games = gameController.listGames()

  res.send({
    games,
    statusCode: 200,
    message: 'ok'
  })
})

router.post('/', (req, res) => {
  gameController.createGame(req.body)

  res.send({
    game: req.body,
    statusCode: 201,
    message: 'created'
  })
})

router.put('/:id', (req, res) => {
  const { id } = req.params
  const { newName } = req.body
  gameController.updateGame(id, newName)

  res.send({
    game: req.body,
    statusCode: 201,
    message: 'created'
  })
})

router.delete('/', (req, res) => {
  const { name } = req.body
  gameController.deleteGame(name)

  res.send({
    statusCode: 200,
    message: 'ok'
  })
})

module.exports = router
