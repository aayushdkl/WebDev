const { default: mongoose } = require("mongoose")

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    required: [true, "Email is required"],
    type: String,
    unique: true,
  },
  password: {
    required: [true, "Password is required"],
    type: String,
  },
  createdAt: Date,
})
