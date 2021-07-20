import express from 'express'
import UserService from '../services/users.js'

let service = new UserService()

const router = express.Router()

const prefix = 'auth'

router.post('/signin', async (req, res) => {
    let { body } = req
    try {
        let token = await service.signin(body)

        res.status(201).json({ token: token })
    }
    catch ({ message }) {
        res.status(401).json({ message })
    }
})

export default {
    controller: router,
    prefix,
}