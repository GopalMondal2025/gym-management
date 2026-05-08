import e from 'express'
import authRouter from '../../auth/routes/auth.route.js'
import { healthCheck } from '../../auth/controllers/healthcheck.controller.js'
import { verifyJWT } from '../../auth/middlewares/auth.middleware.js'
import gymRouter from './gym.routes.js'
const router = e.Router()
router.use('/auth', authRouter)
router.use('/healthckeck', healthCheck)
// protected routes
router.use('/gym', verifyJWT, gymRouter)
export default router
