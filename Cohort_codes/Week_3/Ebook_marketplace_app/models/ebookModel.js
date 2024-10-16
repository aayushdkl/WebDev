const mongoose = require("mongoose");

const ebookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  downloadLink: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
    default: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
    required: true,
  },
});

const Ebook = mongoose.model("Ebook", ebookSchema);

module.exports = Ebook;
