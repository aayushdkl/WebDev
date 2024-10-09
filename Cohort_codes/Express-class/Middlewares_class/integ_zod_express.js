const express = require("express");
const { default: test } = require("node:test");
const z = require("zod");

const app = express();
app.use(express.json());

const registerSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long." }),
  email: z.string().email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." }),
});

app.post("/register", (req, res) => {
  const test_result = registerSchema.safeParse(req.body);

  if (!test_result.success) {
    return res.status(400).json({ errors });
  }

  const userData = test_result.data;
  //registration logic
  res
    .status(201)
    .json({ message: "User registered successfully!", user: userData });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//Test data for postman
// Valid data
// {
//     "username": "john_doe",
//     "email": "john@example.com",
//     "password": "securePass123"
//   }

//Invalid data
// {
//     "username": "jd",
//     "email": "invalid-email",
//     "password": "123"
//   }
