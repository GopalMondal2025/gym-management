import { asyncHandler } from '../utils/async-handler.js'
import { apiError } from '../utils/api-error.js'
import { apiResponse } from '../utils/api-response.js'
import User from '../models/user.models.js'

const getUserProfile = asyncHandler(async (req, res) => {
  const profileId = req.user.profile_id
  const user = await User.findById(profileId)
  if (!user) {
    throw new apiError(400, 'User does not exists')
  }
  return res.status(200).json(new apiResponse(200, { user }, 'User profile fetched successfully'))
})

const listProfiles = asyncHandler(async (req, res) => {
  const gymId = req.params.id
  const profiles = await req.User.findOne(gymId)
  if (!profiles) {
    throw new apiError(400, 'No profiles have been found')
  }
  return res
    .status(200)
    .json(new apiResponse(200, profiles, 'Profiles have been fetched successfully'))
})

const updateProfile = asyncHandler(async (req, res) => {
  const profileId = req.params.profile_id
  const {
    changedName,
    email,
    phoneNumber,
    dob,
    joiningdate,
    address,
    paymentStatus,
    status,
    tag,
    lastPaymentDate,
    nextBillingDate,
  } = req.body
  const profile = await User.findById(profileId)
  if (!profile) {
    throw new apiError(400, 'No profiles have been found')
  }
  const updateFields = {}
  if (changedName !== undefined) {
    const nameExists = await User.findOne({
      name: changedName,
    })
    if (changedName === '' || nameExists) {
      throw new apiError(400, 'Please provide a different User name')
    }
    updateFields.name = changedName
  }
  if (email !== undefined) updateFields.email = email
  if (phoneNumber !== undefined) updateFields.phoneNumber = phoneNumber
  if (dob !== undefined) updateFields.joiningdate = joiningdate
  if (address !== undefined) updateFields.address = address
  if (paymentStatus !== undefined) updateFields.paymentStatus = paymentStatus
  if (status !== undefined) updateFields.status = status
  if (tag !== undefined) updateFields.tag = tag
  if (lastPaymentDate !== undefined) updateFields.lastPaymentDate = lastPaymentDate
  if (nextBillingDate !== undefined) updateFields.nextBillingDate = nextBillingDate
  if (Object.keys(updateFields).length === 0) {
    throw new apiError(400, 'Please provide at least one field to update')
  }
  const updatedProfile = await User.findByIdAndUpdate(
    profileId,
    {
      $set: updateFields,
    },
    {
      new: true,
    },
  )
  return res
    .status(200)
    .json(
      new apiResponse(200, { profile: updatedProfile }, 'Profile has been updated successfully'),
    )
})

const createProfile = asyncHandler(async (req, res) => {
  const gymId = req.params.id
  const {
    name,
    email,
    phoneNumber,
    dob,
    joiningdate,
    address,
    paymentStatus,
    status,
    tag,
    lastPaymentDate,
    nextBillingDate,
  } = req.body
  if (!name) {
    throw new apiError(400, 'Name is required')
  }
  const nameExists = await User.findOne({
    name: name,
  })
  if (nameExists) {
    throw new apiError(400, 'User with this name already exists')
  }
  const newProfile = await User.create({
    gymId,
    name,
    email,
    phoneNumber,
    dob,
    joiningdate,
    address,
    paymentStatus,
    status,
    tag,
    lastPaymentDate,
    nextBillingDate,
  })
  return res
    .status(201)
    .json(new apiResponse(201, { profile: newProfile }, 'Profile has been created successfully'))
})
const deleteProfile = asyncHandler(async (req, res) => {
  const profileId = req.params.profile_id
  const profile = await User.findById(profileId)
  if (!profile) throw new apiError(400, 'Profile not found')
  const deleted = User.deleteOne({ id: profileId })
  return res.status(200).json(new apiResponse(200, 'Profie has been deleted'))
})

export { getUserProfile, listProfiles, updateProfile, createProfile, deleteProfile }
