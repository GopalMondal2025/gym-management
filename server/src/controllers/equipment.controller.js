import Equipment from '../models/equipment.models.js'
import { asyncHandler } from '../utils/async-handler.js'
import { apiError } from '../utils/api-error.js'
import { apiResponse } from '../utils/api-response.js'

const getAllEquipment = asyncHandler(async (req, res) => {
  const gymId = req.user._id

  const equipment = await Equipment.find({
    gymId,
  }).sort({ createdAt: -1 })

  return res.status(200).json(new apiResponse(200, equipment, 'Equipment fetched successfully'))
})

const createEquipment = asyncHandler(async (req, res) => {
  const gymId = req.user._id

  const {
    name,
    brand,
    model,
    serialNumber,
    purchaseDate,
    cost,
    warrantyExpiry,
    assignedBranch,
    status,
    images,
    notes,
  } = req.body

  if (!name) {
    throw new apiError(400, 'Equipment name is required')
  }

  const existedEquipment = await Equipment.findOne({
    gymId,
    name: name.trim().toLowerCase(),
  })

  if (existedEquipment) {
    throw new apiError(409, 'Equipment already exists')
  }

  const equipment = await Equipment.create({
    gymId,
    name,
    brand,
    model,
    serialNumber,
    purchaseDate,
    cost,
    warrantyExpiry,
    assignedBranch,
    status,
    images,
    notes,
  })

  return res.status(201).json(new apiResponse(201, equipment, 'Equipment created successfully'))
})

const updateEquipment = asyncHandler(async (req, res) => {
  const equipmentId = req.params.equipment_id

  const equipment = await Equipment.findById(equipmentId)

  if (!equipment) {
    throw new apiError(404, 'Equipment not found')
  }

  const updatedEquipment = await Equipment.findByIdAndUpdate(
    equipmentId,
    {
      $set: req.body,
    },
    {
      returnDocument: 'after',
    },
  )

  return res
    .status(200)
    .json(new apiResponse(200, updatedEquipment, 'Equipment updated successfully'))
})

const deleteEquipment = asyncHandler(async (req, res) => {
  const equipmentId = req.params.equipment_id

  const equipment = await Equipment.findById(equipmentId)

  if (!equipment) {
    throw new apiError(404, 'Equipment not found')
  }

  await Equipment.findByIdAndDelete(equipmentId)

  return res.status(200).json(new apiResponse(200, {}, 'Equipment deleted successfully'))
})

export { getAllEquipment, createEquipment, updateEquipment, deleteEquipment }
