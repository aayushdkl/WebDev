const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const User = require("./models/User")
const Memory = require("./models/Memory")
require("./config/db")
require("dotenv").config() //This is used to load environment variables from a .env file into process.env
//The difference between require('dotenv').config() and dotenv.config() is that the former is a function call that loads the environment variables, while the latter is a shorthand for the same thing. In this case, they are equivalent and can be used interchangeably.

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5000
app.get("/", (req, res) => {
  res.send("Server running")
})

const authRouter = require("./routes/auth")
app.use("/api/auth", authRouter)
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})

// const testUser = new User({
//   email: "test@gmail.com",
//   password: "test23432",
// })

// testUser.save()

// const testMemory = new Memory({
//   userId: "683891369657604819ff9944",
//   memory: "Hiking",
//   date: "2022-02-22",
//   emotion: "happy",
//   photo: "lakdjflasd",
// })

// testMemory.save()
