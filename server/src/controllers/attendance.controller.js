import Attendance from '../models/attendance.models.js'

import { asyncHandler } from '../utils/async-handler.js'
import { apiError } from '../utils/api-error.js'
import { apiResponse } from '../utils/api-response.js'

const getAllAttendance = asyncHandler(async (req, res) => {
  const gymId = req.user._id

  const attendance = await Attendance.find({
    gymId,
  })
    .populate('userId')
    .sort({ date: -1 })

  return res.status(200).json(new apiResponse(200, attendance, 'Attendance fetched successfully'))
})

const createAttendance = asyncHandler(async (req, res) => {
  const gymId = req.user._id

  const { userId, attendanceType, checkInTime, checkOutTime, date, status, method, notes } =
    req.body

  if (!userId) {
    throw new apiError(400, 'User is required')
  }

  const alreadyMarked = await Attendance.findOne({
    userId,
    date: new Date(date).setHours(0, 0, 0, 0),
  })

  if (alreadyMarked) {
    throw new apiError(409, 'Attendance already marked for today')
  }

  const attendance = await Attendance.create({
    gymId,
    userId,
    attendanceType,
    checkInTime,
    checkOutTime,
    date,
    status,
    method,
    notes,
    recordedBy: req.user._id,
  })

  return res.status(201).json(new apiResponse(201, attendance, 'Attendance marked successfully'))
})

const updateAttendance = asyncHandler(async (req, res) => {
  const attendanceId = req.params.attendance_id

  const attendance = await Attendance.findById(attendanceId)

  if (!attendance) {
    throw new apiError(404, 'Attendance not found')
  }

  const updatedAttendance = await Attendance.findByIdAndUpdate(
    attendanceId,
    {
      $set: req.body,
    },
    {
      returnDocument: 'after',
    },
  )

  return res
    .status(200)
    .json(new apiResponse(200, updatedAttendance, 'Attendance updated successfully'))
})

const deleteAttendance = asyncHandler(async (req, res) => {
  const attendanceId = req.params.attendance_id

  const attendance = await Attendance.findById(attendanceId)

  if (!attendance) {
    throw new apiError(404, 'Attendance not found')
  }

  await Attendance.findByIdAndDelete(attendanceId)

  return res.status(200).json(new apiResponse(200, {}, 'Attendance deleted successfully'))
})

export { getAllAttendance, createAttendance, updateAttendance, deleteAttendance }
