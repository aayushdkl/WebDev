const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://aayushdhakal:Sergioagureo8@cluster0.dsbss.mongodb.net/user_app" //user_app is the name of the database , it creates a new database if it doesn't exist
);

const User = mongoose.model("Users", {
  //Users is the name of the collection which is inside the user_app database. It creates a new collection if it doesn't exist
  name: String,
  email: String,
  password: String,
});

app.post("/", async function (req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  const exists_already = await User.findOne({ email: email });
  if (exists_already) {
    return res.status(400).send("User exists already");
  }

  const user = new User({
    //creating a new user in the collection
    name: name,
    email: email,
    password: password,
  });
  user.save().then(() => console.log("user data saved"));
  res.json({ message: "User added successfully" });
});
