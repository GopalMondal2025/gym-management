import Gym from '../models/gym.models.js'
import { asyncHandler } from '../utils/async-handler.js'
import { apiError } from '../utils/api-error.js'
import { apiResponse } from '../utils/api-response.js'

const getGymProfile = asyncHandler(async (req, res) => {
  const gymId = req.params.gym_id
  const gymProfile = await Gym.findById(gymId).select(
    '-password -refreshToken -emailVerificationToken -emailVerificationExpiry',
  )
  if (!gymProfile) throw new apiError(400, 'Gym profile not found')
  return res.status(200).json(new apiResponse(200, gymProfile, 'Profile fetched successfully'))
})

// const createGymProfile=asyncHandler(async (req, res)=>{
//   const {
//     username,
//     email,
//     fullname,
//     phoneNumber,
//     ownerName,
//     location
//   }=req.body
//   if(!username)
//     throw new apiError(400, "Username is required")
//   const existedProfile=await Gym.findOne({username: username})
//   if(existedProfile)
//     throw new apiError(400, "User already exists")

// })

// const updateGymProfile = asyncHandler(async (req, res) => {
//   const gymId = req.params.gym_id
//   const {
//     username,
//     email,
//     fullname,
//     phoneNumber,
//     ownerName,
//     location
//   } = req.body
//   const updateFields = {}
//   if (username !== undefined) {
//     const nameExists = await Gym.findOne({
//       username: username
//     })
//     if (username === "" || nameExists)
//       throw new apiError(400, "Please provide a different username")
//     updateFields.username = username
//   }
//   if (email !== undefined) updateFields.email = email
//   if (fullname !== undefined) updateFields.fullname = fullname
//   if (phoneNumber !== undefined) updateFields.phoneNumber = phoneNumber
//   if (ownerName !== undefined) updateFields.ownerName = ownerName
//   if (location !== undefined) updateFields.location = location
//   if (Object.keys(updateFields).length === 0)
//     throw new apiError(400, 'Please provide at least one field to update')
//   const updatedGymProfile =await Gym.findByIdAndUpdate(
//     gymId,
//     {
//       $set: updateFields,
//     },
//     {new: true}
//   )
//   if(!updateGymProfile)
//     throw new apiError(400, "Something went wrong. Try again later")
//   return res
//   .status(200)
//   .json(
//     new apiResponse(200, updateGymProfile, "Updated successfully")
//   )
// })

export {
  getGymProfile,
  // updateGymProfile
}
