import { body } from 'express-validator'


const validationCreatePost = [
    body('message')
        .isString()
        .withMessage('Mensagem precisa ser uma string')
        .notEmpty()
        .withMessage('Mensagem é obrigatório'),

]

export { validationCreatePost }