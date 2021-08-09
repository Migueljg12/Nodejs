import Service from './service.js'
import { PostRepository } from '../models/index.js'
import UserService from './users.js'


let userService = new UserService()

export default class PostService extends Service {
    constructor() {
        super(PostRepository)
    }

    async create(obj) {
        let model = this.repository(obj)
        await model.save()

        await userService.addPost(model.user, model._id)

        return model
    }
    async get(filter) {
        return this.repository.find(filter).populate('user')
    }
}