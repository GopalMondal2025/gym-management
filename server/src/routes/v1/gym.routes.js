import e from 'express'
import { getGymProfile } from '../../controllers/gym.controller.js'
const router = e.Router({ mergeParams: true })

// router.get('/register', register)
router.get('/profile/:gym_id', getGymProfile)
export default router
