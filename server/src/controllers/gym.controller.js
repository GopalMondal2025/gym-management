import Gym from '../models/gym.models.js'
import { asyncHandler } from '../utils/async-handler.js'
import { apiError } from '../utils/api-error.js'
import { apiResponse } from '../utils/api-response.js'

const getGymProfile = asyncHandler(async (req, res) => {
  const gym = req.gym

  return res.status(200).json(new apiResponse(200, gym, 'Profile fetched successfully'))
})

export { getGymProfile }
