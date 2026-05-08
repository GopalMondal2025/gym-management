import mongoose, { Schema } from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import crypto from "crypto"

const gymSchema = new Schema(
    {
        avatar: {
            type: {
                url: String,
                localPath: String
            },
            default: {
                url: `https://placehold.co/100x100`,
                localPath: ""
            }
        },
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        fullname: {
            type: String,
            trim: true
        },
        phoneNumber: {
            type: String,
            trim: true
        },
        ownerName: {
            type: String,
            trim: true
        },
        location: {
            type: String,
            trim: true
        },
        password: {
            required: [true, "Password is required"],
            type: String
        },
        isEmailVerified: {
            type: Boolean,
            default: false
        },
        refreshToken: {
            type: String
        },
        forgotPasswordToken: {
            type: String
        },
        forgotPasswordExpiry: {
            type: Date
        },
        emailVerificationToken: {
            type: String
        },
        emailVerificationExpiry: {
            type: Date
        }
    },
    {
        timestamps: true
    }
)

gymSchema.pre("save", async function () {
    if (!this.isModified("password")) return

    this.password = await bcrypt.hash(this.password, 10)
})

gymSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

gymSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            username: this.username,
            email: this.email
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

gymSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            username: this.username,
            email: this.email
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

gymSchema.methods.generateTemporaryToken = function () {
    const unHashedToken = crypto.randomBytes(20).toString("hex")

    const hashedToken = crypto
        .createHash("sha256")
        .update(unHashedToken)
        .digest("hex")

    const tokenExpiry = Date.now() + 20 * 60 * 1000

    return {
        unHashedToken,
        hashedToken,
        tokenExpiry
    }
}

const Gym =
    mongoose.models.Gym ||
    mongoose.model("Gym", gymSchema)

export default Gym
