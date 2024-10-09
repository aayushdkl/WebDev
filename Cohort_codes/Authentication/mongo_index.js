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

const user = new User({
  //creating a new user in the collection
  name: "Aayush Dhakal",
  email: "ayush@gmail.com",
  password: "ayush123",
});
user.save().then(() => console.log("user data saved"));
