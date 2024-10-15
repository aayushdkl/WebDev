const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true, // this does not allow the username to be empty, if it si empty, it will throw an error like "Path `username` is required.".
    unique: true, // this does not allow the username to be duplicated, if it is duplicated, it will throw an error like "E11000 duplicate key error collection: ebookmarketplace.authors index: username_1 dup key: { username: "username" }".
  },
  password: {
    type: String,
    required: true,
  },
});

//After defining the schema, we need to create a model from it. A model is a class with which we construct documents. In this case, each document will be an author with properties and behaviors as declared in our schema.
const Author = mongoose.model("Author", authorSchema);

module.exports = Author;
