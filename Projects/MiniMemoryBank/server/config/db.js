const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config() //this is used for loading environment variables from a .env file into process.env

if (!process.env.MONGO_URI) {
  throw new Error("Mongo URI is not defined in the environment variables")
}

const mongoURI = process.env.MONGO_URI
// console.log(mongoURI)

mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err))
