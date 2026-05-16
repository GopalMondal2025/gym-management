import e from 'express'
import {
  getAllExpenses,
  createExpense,
  updateExpense,
  deleteExpense,
} from '../../controllers/expenses.controller.js'
const router = e.Router({ mergeParams: true })
router.route('/').get(getAllExpenses).post(createExpense)
router.route('/:expense_id').put(updateExpense).delete(deleteExpense)
export default router
