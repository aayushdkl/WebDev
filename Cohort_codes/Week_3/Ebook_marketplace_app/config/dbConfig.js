const mongoose = require("mongoose");
require("dotenv").config(); // to use .env file, where we store our database connection string. We use this to hide our database connection string from the public.

//MongoDB connection function

const connectToDatabase = async () => {
  try {
    //Connect to mongodb using the connection string from the .env file
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true, // to avoid deprecation warnings like current URL string parser is deprecated, warning is caused by the MongoDB Node.js driver
      useUnifiedTopology: true, // to avoid deprecation warnings like current Server Discovery and Monitoring engine is deprecated, warning is caused by the MongoDB Node.js driver
      useCreateIndex: true, // to avoid deprecation warnings like collection.ensureIndex is deprecated, warning is caused by the MongoDB Node.js driver
      useFindAndModify: false, // to avoid deprecation warnings like collection.findAndModify is deprecated, warning is caused by the MongoDB Node.js driver
    });
    // we use async await to wait for the connection to be established before proceeding to the next line of code
    //try catch block to handle any errors that may occur during the connection process

    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Error connecting to the database:", err);
    process.exit(1); //exit the process if an error occurs, this can be read further in the Node.js documentation
  }
};

module.exports = connectToDatabase; //export the function to be used in other files
// This variable can be used to connect to the database in other files by importing it like this:
// const connectToDatabase = require("./config/dbConfig");
