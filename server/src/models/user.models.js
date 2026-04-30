import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    gym_id: { type: mongoose.Schema.Types.ObjectId, ref: "Gym", required: true },
    membership_id: { type: mongoose.Schema.Types.ObjectId, ref: "Membership" },
    name: { type: String, required: true },
    email: { type: String,},
    dob: { type: Date },
    // type: { type: String, enum: ["admin", "member"], default: "member" },
    joining_date: { type: Date, default: Date.now },
    address: { type: String },
    profile_image: { type: String },
    payment_status: { type: String, enum: ["paid", "unpaid"], default: "unpaid" },
    status: { type: String, enum: ["active", "inactive"], default: "active" },
    last_payment_date: { type: Date },
    next_billing_date: { type: Date },
    // password: { type: String, required: true },
}, { timestamps: true })

const User = mongoose.model("User", userSchema);

export default User;