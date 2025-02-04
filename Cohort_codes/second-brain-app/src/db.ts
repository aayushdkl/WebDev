import mongoose from "mongoose"
import { model, Schema } from "mongoose"
import dotenv from "dotenv"
dotenv.config()

if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined in the environment variables")
}
const mongoURI = process.env.MONGODB_URI
mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err))

const UserSchema = new Schema({
  username: { type: String, unique: true },
  password: String,
})

const ContentSchema = new Schema({
  title: String,
  link: String,
  tags: [{ type: mongoose.Types.ObjectId, ref: "Tag" }],
  userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
})

export const ContentModel = model("Content", ContentSchema)
export const UserModel = model("User", UserSchema)

// {
// 	"type": "document" | "tweet" | "youtube" | "link",
// 	"link": "url",
// 	"title": "Title of doc/video",
// 	"tags": ["productivity", "politics", ...]
// }
