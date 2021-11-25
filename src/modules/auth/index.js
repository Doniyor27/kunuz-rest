import express from 'express'
const router = express.Router()

import { registerController } from './controller.js'
import { loginController } from './controller.js'

router.post('/register',registerController)
router.post('/login',loginController)

export default router