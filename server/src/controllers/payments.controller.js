import Payment from '../models/payments.models.js'
import User from '../models/user.models.js'

import { asyncHandler } from '../utils/async-handler.js'
import { apiError } from '../utils/api-error.js'
import { apiResponse } from '../utils/api-response.js'

const getAllPayments = asyncHandler(async (req, res) => {
  const gymId = req.user._id

  const payments = await Payment.find({
    gymId,
  })
    .populate('memberId membershipId')
    .sort({ paymentDate: -1 })

  return res.status(200).json(new apiResponse(200, payments, 'Payments fetched successfully'))
})

const createPayment = asyncHandler(async (req, res) => {
  const gymId = req.user._id

  const {
    memberId,
    membershipId,
    paymentType,
    amount,
    discount,
    tax,
    finalAmount,
    paymentMethod,
    transactionId,
    invoiceNumber,
    billingPeriodStart,
    billingPeriodEnd,
    paymentDate,
    status,
    receiptImages,
    notes,
  } = req.body

  if (!memberId || !amount || !finalAmount || !paymentMethod) {
    throw new apiError(400, 'Required fields are missing')
  }

  const payment = await Payment.create({
    gymId,
    memberId,
    membershipId,
    paymentType,
    amount,
    discount,
    tax,
    finalAmount,
    paymentMethod,
    transactionId,
    invoiceNumber,
    billingPeriodStart,
    billingPeriodEnd,
    paymentDate,
    status,
    receiptImages,
    notes,
    collectedBy: req.user._id,
  })

  await User.findByIdAndUpdate(memberId, {
    paymentStatus: 'paid',
    lastPaymentDate: paymentDate || new Date(),
    nextBillingDate: billingPeriodEnd,
  })

  return res.status(201).json(new apiResponse(201, payment, 'Payment recorded successfully'))
})

const updatePayment = asyncHandler(async (req, res) => {
  const paymentId = req.params.payment_id

  const payment = await Payment.findById(paymentId)

  if (!payment) {
    throw new apiError(404, 'Payment not found')
  }

  const updatedPayment = await Payment.findByIdAndUpdate(
    paymentId,
    {
      $set: req.body,
    },
    {
      returnDocument: 'after',
    },
  )

  return res.status(200).json(new apiResponse(200, updatedPayment, 'Payment updated successfully'))
})

const deletePayment = asyncHandler(async (req, res) => {
  const paymentId = req.params.payment_id

  const payment = await Payment.findById(paymentId)

  if (!payment) {
    throw new apiError(404, 'Payment not found')
  }

  await Payment.findByIdAndDelete(paymentId)

  return res.status(200).json(new apiResponse(200, {}, 'Payment deleted successfully'))
})

export { getAllPayments, createPayment, updatePayment, deletePayment }
