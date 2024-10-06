const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

// app.get("/health-checkup", function (req, res) {
//   const username = req.headers.username;
//   const password = req.headers.password;
//   const KidneyID = req.query.kidneyID;

//   if (!(username === "aayush" && password === "pass")) {
//     res.status(400).json({ message: "wrong input" });
//     return;
//   }

//   if (KidneyID != 1 || KidneyID != 2) {
//     //logic for whatever you want to do
//     res.status(400).json({ message: "wrong input" });
//   }

//   res.json({
//     message: " Your kidney is fine",
//   });
// });

app.post("/health-checkup", (req, res) => {
  // kidneys = [1,2]
  const kidneys = req.body.kidneys;
  const kidneyLength = kidneys.length;

  res.send("you have " + kidneyLength + " kidneys");
});

app.listen(port);
