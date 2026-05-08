import e from 'express'
import { getUserProfile, listProfiles, updateProfile } from '../../controllers/user.controller.js'
const router = e.Router({ mergeParams: true })

// router.get('/register', register)
router.get('/profile', getUserProfile)
router.get('/profiles', listProfiles)
router.put('/profile/:profile_id', updateProfile)
export default router
