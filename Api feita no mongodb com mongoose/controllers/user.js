import express from 'express'
import { UserService } from '../services/index.js'
import { validationCreateUser } from '../validations/users.js'
import validator from '../middleware/validate.js'
import auth from '../middleware/auth.js'

let service = new UserService()

const router = express.Router()

const prefix = 'user'

router.get('/health', (req, res) => {
    res.status(200).json({ message: 'Api Está Funcionando' })
})

router.post(
    '/create',
    validationCreateUser,
    validator,

    async (req, res) => {
        let { body } = req

        let user = await service.create(body)

        res.status(201).json(user)

    })

router.get('/search/:id', auth, async (req, res) => {
    let { id } = req.params
    let user = await service.getById(id)
    res.status(200).json(user)
})

router.get('/search', auth, async (req, res) => {
    const { query } = req
    let user = await service.get(query)
    res.status(200).json(user)
})

router.put('/update', auth, async (req, res) => {
    const { query, body: update } = req
    let user = await service.put(query, update)
    res.status(200).json(user)
})

router.delete('/delete', auth, async (req, res) => {
    const { query } = req
    let user = await service.delete(query)
    res.status(200).json({ success: true })
})

export default {
    controller: router,
    prefix,
}