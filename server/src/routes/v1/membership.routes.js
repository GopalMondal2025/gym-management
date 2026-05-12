import e from 'express'

import {
  fetchAllMembership,
  createMembership,
  updateMembership,
  deleteMembership,
} from '../../controllers/membership.controller.js'

const router = e.Router({ mergeParams: true })

router.route('/').get(fetchAllMembership).post(createMembership)

router.route('/:membership_id').patch(updateMembership).delete(deleteMembership)

export default router
