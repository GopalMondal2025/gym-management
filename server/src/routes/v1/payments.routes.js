import e from 'express'
import {
  getAllPayments,
  createPayment,
  updatePayment,
  deletePayment,
} from '../../controllers/payments.controller.js'
const router = e.Router({ mergeParams: true })
router.route('/').get(getAllPayments).post(createPayment)
router.route('/:payment_id').put(updatePayment).delete(deletePayment)
export default router
