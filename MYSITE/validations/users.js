import { body } from 'express-validator'

const validationCreateUser = [
    body('name')
        .isString()
        .withMessage('Nome precisa ser uma string')
        .notEmpty()
        .withMessage('Nome é obrigatório'),
    body('email')
        .isEmail()
        .withMessage('Email inválido')
        .notEmpty()
        .withMessage('Email é obrigatório'),
    body('cpf')
        .isString()
        .withMessage('CPF precisa ser uma string')
        .notEmpty()
        .withMessage('CPF é Obrigatório'),
    body('password')
        .isString()
        .withMessage('Senha precisa ser uma string')
        .notEmpty()
        .withMessage('Senha é obrigatória'),
]

export { validationCreateUser }