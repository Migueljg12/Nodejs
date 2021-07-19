import jwt from 'jsonwebtoken'

const { SECRET } = process.env

function generateToken({ _id, name, email }) {
    let jwtToken = jwt.sign(
        {
            _id,
            name,
            email
        },
        SECRET,
        {
            expiresIn: '24h'
        }
    )

    return jwtToken
}

function verifyToken(token) {
    return jwt.verify(token, SECRET)
}


export { generateToken, verifyToken }