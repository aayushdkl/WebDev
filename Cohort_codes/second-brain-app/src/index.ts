import express from "express"
import jwt from "jsonwebtoken"
import { ContentModel, UserModel } from "./db"
import z, { ParseStatus } from "zod"
import bcrypt from "bcrypt"
import { JWT_PASSWORD } from "./config"
import { userMiddleware } from "./middleware"

const app = express()
app.use(express.json())

const signupSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" }),
  password: z
    .string()
    .min(6, { message: "Password must be atleast 6 characters long" }),
})

app.post("/api/v1/signup", async (req, res) => {
  //TO ADD: zod validation, hash the password
  const afterZodRes = signupSchema.safeParse(req.body)

  if (!afterZodRes.success) {
    const zodError = afterZodRes.error.errors

    res.status(400).json({ message: zodError })
  } else {
    const saltRounds = 10
    const username = afterZodRes.data.username
    const password = afterZodRes.data.password

    const hashedPassword = await bcrypt.hash(password, saltRounds)
    try {
      await UserModel.create({
        username,
        password: hashedPassword,
      })
      res.status(200).json({
        message: "User signed up",
      })
    } catch (err) {
      res.status(411).json({
        message: "User already exists",
      })
    }
  }
})

app.post("/api/v1/signin", async (req, res) => {
  const username = req.body.username
  const password = req.body.password

  if (!username || !password) {
    throw new Error("Fields cannot be left empty")
  }

  const existingUser = await UserModel.findOne({
    username,
  })
  if (existingUser) {
    if (!existingUser.password) {
      throw new Error("Password cannot be empty")
    }
    const isMatch = await bcrypt.compare(password, existingUser.password)
    if (!isMatch) {
      res.status(401).json({
        message: "Invalid password, please enter the correct password",
      })
    } else {
      const token = jwt.sign(
        {
          id: existingUser._id,
        },
        JWT_PASSWORD
      )

      res.status(200).json({
        token,
      })
    }
  } else {
    res.status(403).json({
      message: "Incorrect credentials",
    })
  }
})

app.post("/api/v1/content", userMiddleware, async (req, res) => {
  const title = req.body.title
  const link = req.body.link
  const type = req.body.type
  console.log("here")

  try {
    await ContentModel.create({
      title,
      link,
      type,
      //@ts-ignore //TODO: handle the ts error here
      userId: req.userId,
      tags: [],
    })

    res.status(200).json({
      message: "Content added succesfully",
    })
  } catch (err) {
    res.status(403).json({
      message: "some error occured",
    })
  }
})
app.get("/api/v1/content", userMiddleware, async (req, res) => {
  //@ts-ignore
  const userId = req.userId
  const content = await ContentModel.find({
    userId: userId,
  }).populate("userId", "username")
  res.json({
    content,
  })
})
app.delete("/api/v1/content", userMiddleware, async (req, res) => {
  const contentId = req.body.contentId

  await ContentModel.deleteMany({
    contentId,
    //@ts-ignore

    userId: req.userId,
  })
  res.json({
    message: "Deleted the content",
  })
})

app.post("/api/v1/brain/share", (req, res) => {})
app.get("api/v1/brain/:shareLink", (req, res) => {})

const PORT = 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
