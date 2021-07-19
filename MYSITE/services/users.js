import { UserRepository } from '../models/index.js'
import { generateToken } from '../helpers/token.js'

export default class UserService {
    constructor() { }

    static async create(obj) {
        let user = UserRepository(obj)
        await user.save()
        return user
    }

    static async upsert(query, update) {
        return UserRepository.findOneAndUpdate(query, update, {
            upsert: true,
            new: true,
        })

    }

    static async getById(id) {
        return UserRepository.findById(id)
    }

    static async get(filter) {
        let { name, ...rest } = filter
        let query = UserRepository

        if (name) {
            query = query.find({
                name: { $regex: name, $options: 'i' }
            })
        }
        query = query.find(rest)

        return query
    }

    static async put(filter, update) {
        return UserRepository.findOneAndUpdate(filter, update, {
            new: true,
        })
    }

    static async delete(filter) {
        return UserRepository.findOneAndUpdate(filter, {
            $set: { active: false },
        })
    }

    static async signin({ email, password }) {
        let user = await UserRepository.verifyUser(email, password)

        if (user) {
            return generateToken(user)
        } else {
            throw new Error('Email ou senha inválidos')
        }
    }

    static async verifyIfUserExist(cpf) {
        let user = await UserRepository.findOne({ cpf, active: true })

        return user ? true : false
    }
    // static async verifyIfUserExist(query) {
    //     let user = await UserRepository.findOne({ query })

    //     return user ? true : false
    // }
}