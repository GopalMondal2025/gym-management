import e from 'express'
import authRouter from '../../auth/routes/auth.route.js'
import { healthCheck } from '../../auth/controllers/healthcheck.controller.js'
import { verifyJWT } from '../../auth/middlewares/auth.middleware.js'
import gymRouter from './gym.routes.js'
import membershipRouter from './membership.routes.js'
import userRouter from './user.routes.js'
import equipmentRouter from './equipment.routes.js'
import expenseRouter from './expenses.routes.js'
import paymentRouter from './payments.routes.js'
import attendanceRouter from './attendance.routes.js'
const router = e.Router()
router.use('/auth', authRouter)
router.use('/healthckeck', healthCheck)
// protected routes
router.use('/gym', verifyJWT, gymRouter)
router.use('/memberships', verifyJWT, membershipRouter)
router.use('/profile', verifyJWT, userRouter)
router.use('/equipment', verifyJWT, equipmentRouter)
router.use('/expenses', verifyJWT, expenseRouter)
router.use('/payments', verifyJWT, paymentRouter)
router.use('/attendance', verifyJWT, attendanceRouter)
export default router
