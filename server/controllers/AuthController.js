import User from "../models/User.js";
import { comparePassword, hashPassword } from "../utils/bcrypt.js";
import { generateToken } from "../utils/jwt.js";
import { isSpaceOnlyLogin, isSpaceOnlyRegister } from "../utils/isSpaceOnly.js";

class AuthController {
  static async register(req, res) {
    try {
      const { username, password, role, firstName, lastName } = req.body;
      if (!username || !password || !firstName || !lastName || isSpaceOnlyRegister(username, password, firstName, lastName)) {
        return res.status(400).json({
          success: false,
          message: 'Invalid input',
        });
      }
      if (password.length < 6 || username.length < 6) {
        return res.status(400).json({
          success: false,
          message: 'Password or username must be at least 6 characters',
        });
      }

      const user = await User.findOne({ username });

      if (user) {
        return res.status(422).json({
          success: false,
          message: 'User already exists',
        });
      }

      const registerFormField = {
        ...req.body,
        password: await hashPassword(password)
      };

      const addUser = new User(registerFormField);

      const result = await addUser.save();

      return res.status(201).json({
        success: true,
        message: 'Successfully created new account',
        data: result,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  }

  static async login(req, res) {
    try {
      const { username, password } = req.body;
      if (!username || !password || isSpaceOnlyLogin(username, password)) {
        return res.status(400).json({
          success: false,
          message: 'Invalid input',
        });
      }
      const user = await User.findOne({ username });

      if (!user) {
        return res.status(400).json({
          success: false,
          message: 'User not found',
        });
      }

      const checkPassword = await comparePassword(password, user.password);

      if (!checkPassword) {
        return res.status(400).json({
          success: false,
          message: 'Wrong password',
        });
      }

      const token = generateToken({ id: user._id });

      return res.status(200).json({
        success: true,
        message: 'Login success',
        data: token,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  }

  static async getUsers(req, res) {
    try {
      const users = await User.find()

      return res.status(200).json({
        success: true,
        message: 'Get users success',
        users
      })
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  }
}

export default AuthController;
