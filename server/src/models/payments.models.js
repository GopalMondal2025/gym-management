import mongoose, { Schema } from 'mongoose'

const paymentSchema = new Schema(
  {
    gymId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Gym',
      required: true,
      index: true,
    },

    memberId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },

    membershipId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Membership',
    },

    paymentType: {
      type: String,
      enum: [
        'membership',
        'personal_training',
        'diet_plan',
        'supplement',
        'merchandise',
        'day_pass',
        'other',
      ],
      default: 'membership',
    },

    amount: {
      type: Number,
      required: true,
      min: 0,
    },

    discount: {
      type: Number,
      default: 0,
      min: 0,
    },

    tax: {
      type: Number,
      default: 0,
      min: 0,
    },

    finalAmount: {
      type: Number,
      required: true,
      min: 0,
    },

    paymentMethod: {
      type: String,
      enum: ['cash', 'upi', 'card', 'bank_transfer', 'cheque'],
      required: true,
    },

    transactionId: {
      type: String,
      trim: true,
    },

    invoiceNumber: {
      type: String,
      unique: true,
      sparse: true,
    },

    billingPeriodStart: {
      type: Date,
    },

    billingPeriodEnd: {
      type: Date,
    },

    paymentDate: {
      type: Date,
      default: Date.now,
    },

    status: {
      type: String,
      enum: ['paid', 'pending', 'failed', 'refunded'],
      default: 'paid',
    },

    collectedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },

    receiptImages: [
      {
        url: {
          type: String,
          default: '',
        },

        localPath: {
          type: String,
          default: '',
        },

        publicId: {
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
  {
    timestamps: true,
  },
)

paymentSchema.index({
  gymId: 1,
  memberId: 1,
})

paymentSchema.index({
  paymentDate: -1,
})

const Payment = mongoose.models.Payment || mongoose.model('Payment', paymentSchema)

export default Payment
