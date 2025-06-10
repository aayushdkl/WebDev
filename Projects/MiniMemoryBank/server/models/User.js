const { default: mongoose, model } = require("mongoose")
const bcrypt = require("bcrypt")
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

userSchema.pre("save", async function (next) {
  const user = this
  if (!user.isModified("password")) {
    next()
  }

  try {
    const saltRounds = await bcrypt.genSaltSync(10)
    const hashPassword = await bcrypt.hashSync(user.password, saltRounds)
    user.password = hashPassword
  } catch (err) {
    next(err)
  }
})

module.exports = model("User", userSchema)
// 🔍 Code:
// js
// Copy
// Edit
// if (!this.isModified("password")) return next();
// 🧠 What it means:
// This checks:

// "Has the password field been changed?"

// this.isModified("password") returns:

// true → if the password is new or changed.

// false → if the password is unchanged.

// If the password hasn't been modified, we skip hashing by calling next() immediately.

// ✅ Why it's important
// Without this check:

// The password would get re-hashed every time the user is updated, even if the password didn't change.

// That would break login, because you'd end up hashing an already-hashed password.

// 🔄 Example:
// 👇 Imagine this:
// js
// Copy
// Edit
// // Original saved user
// user = {
//   email: "test@example.com",
//   password: "$2a$10$H0Ash1edPassword"  // already hashed
// }
// Now you update the email:

// js
// Copy
// Edit
// user.email = "new@example.com";
// await user.save();
// Without this if check: the already hashed password would get hashed again 🔁 (bad!).

// With the check: it skips hashing, because the password wasn't modified ✅
