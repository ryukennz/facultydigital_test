import express from 'express'
import AuthController from '../controllers/AuthController.js'
import PropertyController from '../controllers/PropertyController.js'
import { auth, authorization } from '../middlewares/auth.js'
const router = express.Router()
/** AUTH ROUTES */
router.post('/auth/login', AuthController.login)
router.post('/auth/register', AuthController.register)

/* PROPERTY ROUTES */
router.get('/properties', PropertyController.getAllProperties)

router.use(auth)
router.get('/properties/:id', PropertyController.getPropertyById)
// router.use(authorization)
router.get('/users', AuthController.getUsers)
router.get('/user/viewed-properties', PropertyController.getUserViewedProperties)

export default router