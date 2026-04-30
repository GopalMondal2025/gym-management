import mongoose from "mongoose";

const gymSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
    },
    owner_name: {
        type: String,
    },
    phone_number: {
        type: String,
    },
    profile_image: {
        type: String,
    },
    reset_password_token: {
        type: String,
    },
    reset_password_expires: {
        type: Date,
    }
}, { timestamps: true });

const Gym = mongoose.model("Gym", gymSchema);

export default Gym;