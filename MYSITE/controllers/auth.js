import express from 'express'
import UserService from '../services/users.js'


const router = express.Router()


router.post('/signin', async (req, res) => {
    let { body } = req

    let user = await UserService.signin(body)

    res.status(201).json(user)
})

export default router