
import User from "../models/User.js";
import { comparePassword } from "../utils/bcrypt.js";
import { generateToken } from "../utils/jwt.js";

class AuthController {

    static async register(req, res) {
        
    }
    static async login(req, res) {
        try {
            const { username, password } = req.body
            const user = await User.findOne({username})

            if (!user) {
                return res.status(400).json({
                    success: false,
                    message: 'User not found'
                })
            }

            const checkPassword = await comparePassword(password, user.password)

            if (!checkPassword) {
                return res.status(400).json({
                    success: false,
                    message: 'Wrong password'
                })
            }

            const token = generateToken({ id: user._id })

            return res.status(200).json({
                success: true,
                message: 'Login success',
                token
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export default AuthController