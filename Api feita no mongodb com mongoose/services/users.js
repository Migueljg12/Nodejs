import { UserRepository } from '../models/index.js'
import { generateToken } from '../helpers/token.js'
import Service from './service.js'

export default class UserService extends Service {
    constructor() {
        super(UserRepository)
    }

    async get(filter) {
        let { name, ...rest } = filter
        let query = this.repository.find().populate('posts')

        if (name) {
            query = query.find({
                name: { $regex: name, $options: 'i' }
            })
        }
        query = query.find(rest)

        return query
    }

    async put(filter, update) {
        return this.repository.findOneAndUpdate(filter, update, {
            new: true,
        })
    }

    async signin({ email, password }) {
        let user = await this.repository.verifyUser(email, password)

        if (user) {
            return generateToken(user)
        } else {
            throw new Error('Email ou senha inválidos')
        }
    }

    async verifyIfUserExist(cpf) {
        let user = await this.repository.findOne({ cpf, active: true })

        return user ? true : false
    }

    async addPost(userId, postId) {
        await this.repository.findOneAndUpdate(
            {
                _id: userId,
            },
            { $push: { posts: postId } }
        )
    }

}