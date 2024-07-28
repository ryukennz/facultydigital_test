import express from 'express'
import AuthController from '../controllers/AuthController.js'
const router = express.Router()

router.post('/auth/login', AuthController.login)
router.post('/auth/register', AuthController.register)

export default router