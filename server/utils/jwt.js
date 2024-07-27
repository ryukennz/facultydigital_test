import jwt from 'jsonwebtoken'
const SECRET_KEY = process.env.SECRET || "secret"

export const generateToken = (payload) => {
    return jwt.sign(payload, SECRET_KEY, { expiresIn: '1d' })
}