import express from 'express'
import AuthController from '../controllers/AuthController.js'
const router = express.Router()

router.post('/users/login', AuthController.login)
router.post('/users/register', AuthController.register)

export default router