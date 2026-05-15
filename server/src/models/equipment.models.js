import mongoose, { Schema } from 'mongoose'

const equipmentSchema = new Schema(
  {
    gymId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Gym',
      required: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      index: true,
    },

    brand: {
      type: String,
      trim: true,
    },

    model: {
      type: String,
      trim: true,
    },

    serialNumber: {
      type: String,
      trim: true,
    },

    purchaseDate: {
      type: Date,
    },

    cost: {
      type: Number,
    },

    warrantyExpiry: {
      type: Date,
    },

    assignedBranch: {
      type: String,
      trim: true,
    },

    status: {
      type: String,
      enum: ['working', 'maintenance', 'damaged', 'discarded'],
      default: 'working',
    },

    images: [
      {
        url: {
          type: String,
          default: '',
        },

        localPath: {
          type: String,
          default: '',
        },
      },
    ],
    notes: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true },
)

const Equipment = mongoose.model('Equipment', equipmentSchema)

export default Equipment
