const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
const zod = require("zod");
// const { z } = require("zod");

const schema = zod.array(zod.number());
// {
//     email:string => email
//     password : atleast 8 letters
//     country : "IN","US"
// }

//  const schema = zod.object({
//     email : zod.string(),
//     password : zod.string(),
//     country: zod.literal("IN").or(zod.literal("US"));
//     kidneys: z.array(z.number())
//     })
//
//
//
//

app.post("/health-checkup", (req, res) => {
  // kidneys = [1,2]
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);
  res.send(response);
});

app.use(function (err, req, res, next) {
  res.status(404).send("404 not found");
});

app.listen(port);
