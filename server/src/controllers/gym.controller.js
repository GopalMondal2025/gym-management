import Gym from "../models/gym.models.js";
import { asyncHandler } from "../utils/async-handler.js";
import { apiError } from "../utils/api-error.js";
import { apiResponse } from "../utils/api-response.js";
const register=(req, res)=> {
    console.log("Hello")
    res.status(200).json(new apiResponse(true, "Gym registered successfully", null));
}

export {
    register
}