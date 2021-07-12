import { UserRepository } from '../models/index.js'

export default class UserService {
    constructor() { }

    static async create(obj) {
        try {
            const user = UserRepository(obj)
            await user.save()
            return user
        } catch (error) {
            console.log('oi', error)
        }
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

        query = query.find({ active: true })

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
        let user = UserRepository.verifyUser(email, password)

        return user
    }
}