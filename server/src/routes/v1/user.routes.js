import e from 'express'
import {
  getUserProfile,
  listProfiles,
  updateProfile,
  createProfile,
  deleteProfile,
} from '../../controllers/user.controller.js'
const router = e.Router({ mergeParams: true })

router.route('/').get(listProfiles).post(createProfile)
router.route('/:profile_id').get(getUserProfile).patch(updateProfile).delete(deleteProfile)

export default router
