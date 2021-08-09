import express from 'express';
import { PostService } from '../services/index.js';
import { validationCreatePost } from '../validations/posts.js';
import validator from '../middleware/validate.js';
import auth from '../middleware/auth.js';

let service = new PostService();

const router = express.Router();

const prefix = 'post';

router.post(
    '/create',
    auth,
    validationCreatePost,
    validator,
    async (req, res) => {
        let { body } = req;

        let post = await service.create({
            ...body,
            user: req.user._id,
        });

        res.status(201).json(post);
    }
);

router.get('/search', auth, async (req, res) => {
    const { _id } = req.user;
    let user = await service.get({ user: _id });
    res.status(200).json(user);
});

export default {
    controller: router,
    prefix,
};







// import express from 'express'
// import { PostService } from '../services/index.js'
// import { validationCreatePost } from '../validations/posts.js'
// import validator from '../middleware/validate.js'
// import auth from '../middleware/auth.js'

// let service = new PostService()

// const router = express.Router()

// const prefix = 'post'


// router.post('/create', auth, validationCreatePost, validator, async (req, res) => {
//     let { body } = req

//     let post = await service.create({
//         ...body,
//         user: req.user._id
//     })

//     res.status(201).json(post)

// })

// router.get('/search', auth, async (req, res) => {
//     const { query } = req;
//     const { _id } = req.user;
//     let user = await service.get({ user: _id });
//     res.status(200).json(user);
// });

// // router.get('/search', auth, async (req, res) => {
// //     const { query } = req
// //     const { _id } = req.user
// //     const oi = { ..._id }
// //     let user = await service.get({ user: oi })
// //     res.status(200).json(user)
// // })


// export default {
//     controller: router,
//     prefix,
// }