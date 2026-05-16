import Expense from '../models/expenses.models.js'
import { asyncHandler } from '../utils/async-handler.js'
import { apiError } from '../utils/api-error.js'
import { apiResponse } from '../utils/api-response.js'

const getAllExpenses = asyncHandler(async (req, res) => {
  const gymId = req.user._id

  const expenses = await Expense.find({
    gymId,
  }).sort({ expenseDate: -1 })

  return res.status(200).json(new apiResponse(200, expenses, 'Expenses fetched successfully'))
})

const createExpense = asyncHandler(async (req, res) => {
  const gymId = req.user._id

  const { title, category, amount, expenseDate, paymentMethod, vendor, receiptImages, notes } =
    req.body

  if (!title || !category || !amount) {
    throw new apiError(400, 'Title, category and amount are required')
  }

  const expense = await Expense.create({
    gymId,
    title,
    category,
    amount,
    expenseDate,
    paymentMethod,
    vendor,
    receiptImages,
    notes,
    addedBy: req.user._id,
  })

  return res.status(201).json(new apiResponse(201, expense, 'Expense added successfully'))
})

const updateExpense = asyncHandler(async (req, res) => {
  const expenseId = req.params.expense_id

  const expense = await Expense.findById(expenseId)

  if (!expense) {
    throw new apiError(404, 'Expense not found')
  }

  const updatedExpense = await Expense.findByIdAndUpdate(
    expenseId,
    {
      $set: req.body,
    },
    {
      returnDocument: 'after',
    },
  )

  return res.status(200).json(new apiResponse(200, updatedExpense, 'Expense updated successfully'))
})

const deleteExpense = asyncHandler(async (req, res) => {
  const expenseId = req.params.expense_id

  const expense = await Expense.findById(expenseId)

  if (!expense) {
    throw new apiError(404, 'Expense not found')
  }

  await Expense.findByIdAndDelete(expenseId)

  return res.status(200).json(new apiResponse(200, {}, 'Expense deleted successfully'))
})

export { getAllExpenses, createExpense, updateExpense, deleteExpense }
