const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  purchasedEbooks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ebook",
    },
  ],
});

const Reader = mongoose.model("Reader", userSchema);
module.exports = Reader;
