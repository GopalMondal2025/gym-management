import mongoose, { Schema } from 'mongoose'

const expenseSchema = new Schema(
  {
    gymId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Gym',
      required: true,
      index: true,
    },

    title: {
      type: String,
      required: [true, 'Expense title is required'],
      trim: true,
    },

    category: {
      type: String,
      required: true,
      enum: [
        'rent',
        'salary',
        'electricity',
        'maintenance',
        'equipment',
        'water',
        'internet',
        'marketing',
        'cleaning',
        'tax',
        'other',
      ],
      lowercase: true,
    },

    amount: {
      type: Number,
      required: true,
      min: 0,
    },

    expenseDate: {
      type: Date,
      default: Date.now,
    },

    paymentMethod: {
      type: String,
      enum: ['cash', 'upi', 'card', 'bank transfer', 'cheque', 'other'],
      default: 'cash',
    },

    vendor: {
      type: String,
      trim: true,
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

    addedBy: {
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

const Expense = mongoose.model('Expense', expenseSchema)

export default Expense
