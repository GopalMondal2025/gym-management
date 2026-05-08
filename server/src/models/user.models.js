import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
    {
        gymId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Gym",
            required: true
        },

        membershipId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Membership"
        },

        avatar: {
            url: {
                type: String,
                default: "https://placehold.co/100x100"
            },
            localPath: {
                type: String,
                default: ""
            }
        },

        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true
        },

        email: {
            type: String,
            lowercase: true,
            trim: true,
            unique: true
        },

        phoneNumber: {
            type: String,
            trim: true
        },

        dob: {
            type: Date
        },

        joiningDate: {
            type: Date,
            default: Date.now
        },

        address: {
            type: String,
            trim: true
        },

        paymentStatus: {
            type: String,
            enum: ["paid", "unpaid"],
            default: "unpaid"
        },

        status: {
            type: String,
            enum: ["active", "inactive"],
            default: "active"
        },
        tag: {
            type: String,
            enum: ["member", "trainer", "staff", "student", "Owner", "manager"]
        },

        lastPaymentDate: {
            type: Date
        },

        nextBillingDate: {
            type: Date
        }
    },
    {
        timestamps: true
    }
)

const User = mongoose.model("User", userSchema);

export default User;