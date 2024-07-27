import jwt from 'jsonwebtoken'
const SECRET = process.env.SECRET_KEY

export const generateToken = (payload) => {
    return jwt.sign(payload, SECRET)
}