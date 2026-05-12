import { asyncHandler } from '../utils/async-handler.js'
import { apiError } from '../utils/api-error.js'
import { apiResponse } from '../utils/api-response.js'
import Membership from '../models/membership.models.js'

const fetchAllMembership = asyncHandler(async (req, res) => {
  const gymId = req.user._id

  const memberships = await Membership.find({
    gym_id: gymId,
  }).sort({ createdAt: -1 })
  if (memberships.length === 0) throw new apiError(404, 'Membership not found')

  return res.status(200).json(new apiResponse(200, memberships, 'Memberships fetched successfully'))
})

const createMembership = asyncHandler(async (req, res) => {
  const { name, price, duration } = req.body
  const gymId = req.user._id

  if (!name || !price || !duration) throw new apiError(400, 'All fields are required')

  const existedMembership = await Membership.findOne({
    gym_id: gymId,
    name: name.trim(),
  })

  if (existedMembership) throw new apiError(409, 'Membership already exists')

  const membership = await Membership.create({
    gym_id: gymId,
    name: name.trim(),
    price,
    duration,
  })

  if (!membership) throw new apiError(500, 'Failed to create membership')

  return res.status(200).json(new apiResponse(200, membership, 'Membership created successfully'))
})

const updateMembership = asyncHandler(async (req, res) => {
  const membershipId = req.params.membership_id

  const { name, price, duration } = req.body

  const membership = await Membership.findById(membershipId)

  if (!membership) throw new apiError(404, 'Membership not found')

  const updateFields = {}

  if (name !== undefined) {
    const nameExists = await Membership.findOne({
      gym_id: req.user._id,
      name: name.trim(),
      _id: { $ne: membershipId },
    })

    if (name.trim() === '') throw new apiError(409, 'Provide different membership name')

    updateFields.name = name.trim()
  }

  if (price !== undefined) updateFields.price = price

  if (duration !== undefined) updateFields.duration = duration

  if (Object.keys(updateFields).length === 0)
    throw new apiError(400, 'Please provide at least one field to update')

  const updatedMembership = await Membership.findByIdAndUpdate(
    membershipId,
    {
      $set: updateFields,
    },
    {
      returnDocument: 'after',
    },
  )

  if (!updatedMembership) throw new apiError(500, 'Something went wrong. Try again later')

  return res
    .status(200)
    .json(new apiResponse(200, updatedMembership, 'Membership updated successfully'))
})

const deleteMembership = asyncHandler(async (req, res) => {
  const membershipId = req.params.membership_id

  const membership = await Membership.findById(membershipId)

  if (!membership) throw new apiError(404, 'Membership not found')

  await Membership.findByIdAndDelete(membershipId)

  return res.status(200).json(new apiResponse(200, {}, 'Membership deleted successfully'))
})

export { fetchAllMembership, createMembership, updateMembership, deleteMembership }
