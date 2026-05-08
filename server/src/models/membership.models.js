import mongoose from 'mongoose'

const membershipSchema = new mongoose.Schema(
  {
    gym_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Gym', required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: Number, required: true },
  },
  { timestamps: true },
)

const Membership = mongoose.model('Membership', membershipSchema)

export default Membership
