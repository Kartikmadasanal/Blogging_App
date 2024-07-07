import mongoose, { Types } from "mongoose"

const UseSchema = new mongoose.Schema({
    username: {
        Type: String,
        required: true,
        unique: true
    },
    usn: {
        Type: String,
        required: true,
        unique: true
    },
    email: {
        Type: String,
        required: true,
        unique: true
    },
    password: {
        Type: String,
        required: true,
    }

},{timestamps:true})

const User = mongoose.model("User",UseSchema)

export default User;