import express from 'express'
import { UserService } from '../services/index.js'
import { validationCreateUser } from '../validations/users.js'
import validator from '../middleware/validate.js'

const router = express.Router()

router.get('/health', (req, res) => {
    res.status(200).json({ message: 'Api Está Funcionando' })
})

router.post('/users', validationCreateUser, validator, async (req, res) => {
    let { body } = req

    let user = await UserService.create(body)

    res.status(201).json(user)
})

router.get('/users/:id', async (req, res) => {
    let { id } = req.params
    let user = await UserService.getById(id)
    res.status(200).json(user)
})

router.get('/users', async (req, res) => {
    const { query } = req

    let user = await UserService.get(query)
    res.status(200).json(user)
})

router.put('/users', async (req, res) => {
    const { query, body: update } = req
    let user = await UserService.put(query, update)
    res.status(200).json(user)
})

router.delete('/users', async (req, res) => {
    const { query } = req
    let user = await UserService.delete(query)
    res.status(200).json({ success: true })
})

export default router