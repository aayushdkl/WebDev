const z = require("zod");
//if this is an array of strings, return true else return false
// const zod = require("zod");

// function validateInput(obj) {
//   const schema = zod.object({
//     email: zod.string().email(),
//     password: zod.string().min(8),
//   });
//   const response = schema.safeParse(obj);
//   console.log(response);
// }

// app.post("/login", function (req, res) {
//   const inputs = req.body;
//   const response = validateInput(req.body);
//   if (!response.success) {
//     res.json({
//       msg: "Your inputs are invalid",
//     });
//   }
// });

// 1. Validating strings
// const to_check = "Hello there";
// const schema = z.string();
// const result = schema.safeParse(to_check);
// console.log(result);

// 2. Validating Object
// const userData = {
//   name: "Aayush",
//   age: 19,
//   isAdmin: true,
//   email: "example@gmail.com",
// };

// const schema = z.object({
//   name: z.string(),
//   age: z.number(),
//   isAdmin: z.boolean(),
//   email: z.string().email({message: " Please provide a valid email address"}).optional(),
// });

// const result = schema.safeParse(userData);
// if (result.success) {
//   console.log("Valid data:", result.data);
// } else {
//   console.log("Invalid data : ", result.error);
// }
//We can define schema.success , schema.error and schema.data

// 3. Validating Arrays
// const tags = ["JavaScript", "Zod", "Validation"];
// const inv_tags = ["javascript", "", "s", 134];

// const schema = z.array(z.string().min(2,{message : " String should be atleast 2 characters long"}));

// const result = schema.safeParse(inv_tags);
// if (result.success) {
//   console.log("Valid array data:", result.data);
// } else {
//   console.log("Invalid array data: ", result.error);
// }

// 4. Combining Object and array schemas
// const blogPostData = {
//   title: "Understanding Zod",
//   content: "Zod is a powerful schema validation library...",
//   tags: ["JavaScript", "Validation", "Zod"],
//   comments: [
//     { username: "User1", message: "Great post!" },
//     { username: "User2", message: "Very helpful, thanks!" },
//   ], // The big bracket is the array of objects [{},{}] <- this is an array of objects.
// };

// const invalidBlogPost = {
//   title: "Invalid Post",
//   content: "This post has issues.",
//   tags: ["JavaScript", "", 123], // Invalid tags
//   comments: [
//     { username: "User1", message: "Nice!" },
//     { username: 456, message: "" }, // Invalid comment
//   ],
// };

// const commentSchema = z.object({
//   username: z.string(),
//   message: z.string(),
// });

// const schema = z.object({
//   title: z.string(),
//   content: z.string(),
//   tags: z.array(z.string().min(1)),
//   comments: z.array(commentSchema).optional(),
// });

// const result = schema.safeParse(blogPostData);
// if (result.success) {
//   console.log("Valid blogPostData:", result.data);
// } else {
//   console.log("Invalid blogPostData: ", result.error);
// }

//5. Handling Nested Objects and Advanced Features
const product = {
  productName: "Smartphone",
  price: 699.99,
  manufacturer: {
    name: "TechCorp",
    address: {
      street: "123 Tech Lane",
      city: "Innovation City",
      zipCode: "12345",
    },
  },
};

const addressSchema = z.object({
  street: z.string(),
  city: z.string(),
  zipCode: z.string(),
});

const manufacturerSchema = z.object({
  name: z.string(),
  address: addressSchema,
});

const ProductSchema = z.object({
  productName: z.string(),
  price: z.number().positive(),
  manufacturer: manufacturerSchema,
});

const result = ProductSchema.safeParse(product);
// console.log(result);
// console.dir(result, { depth: null });
// console.log(JSON.stringify(result));
