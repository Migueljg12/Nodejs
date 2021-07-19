import express from 'express'
import UserService from '../services/users.js'

const router = express.Router()


router.post('/signin', async (req, res) => {
    let { body } = req
    try {
        let token = await UserService.signin(body)

        res.status(201).json({ token: token })
    }
    catch ({ message }) {
        res.status(401).json({ message })
    }
})

export default router