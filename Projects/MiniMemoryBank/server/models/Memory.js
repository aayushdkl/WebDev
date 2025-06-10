const { default: mongoose, model } = require("mongoose")
const Schema = mongoose.Schema

const memorySchema = new Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  memory: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  emotion: {
    type: String,
    required: true,
    enum: ["happy", "bittersweet", "sad", "angry", "fine"],
  },
  photo: {
    type: String,
    required: true,
  },
})

module.exports = model("Memory", memorySchema)
