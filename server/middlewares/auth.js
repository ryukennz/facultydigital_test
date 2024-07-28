import User from "../models/User.js";
import { verifyToken } from "../utils/jwt.js";

export const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Unauthorized'
            })
        }
        const payload = verifyToken(token)
        const user = await User.findById(payload.id)
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Unauthorized'
            })
        }
        req.user = user
        next()
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
        })
    }
}