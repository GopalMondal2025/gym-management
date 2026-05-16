import mongoose, { Schema } from 'mongoose'

const attendanceSchema = new Schema(
  {
    gymId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Gym',
      required: true,
      index: true,
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },

    attendanceType: {
      type: String,
      enum: ['member', 'trainer', 'staff', 'student', 'Owner', 'manager'],
      default: 'member',
    },

    checkInTime: {
      type: Date,
      default: Date.now,
      required: true,
    },

    checkOutTime: {
      type: Date,
    },

    date: {
      type: Date,
      default: Date.now,
    },

    status: {
      type: String,
      enum: ['present', 'absent', 'late', 'half_day'],
      default: 'present',
    },

    method: {
      type: String,
      enum: ['manual', 'qr', 'rfid', 'biometric'],
      default: 'manual',
    },

    recordedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },

    notes: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
)

attendanceSchema.index({
  gymId: 1,
  userId: 1,
})

attendanceSchema.index({
  date: -1,
})

attendanceSchema.index(
  {
    userId: 1,
    date: 1,
  },
  {
    unique: true,
  },
)

const Attendance = mongoose.models.Attendance || mongoose.model('Attendance', attendanceSchema)

export default Attendance
