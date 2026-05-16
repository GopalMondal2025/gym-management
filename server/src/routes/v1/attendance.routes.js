import e from 'express'
import {
  getAllAttendance,
  createAttendance,
  updateAttendance,
  deleteAttendance,
} from '../../controllers/attendance.controller.js'
const router = e.Router({ mergeParams: true })
router.route('/').get(getAllAttendance).post(createAttendance)
router.route('/:attendance_id').put(updateAttendance).delete(deleteAttendance)
export default router
