const express = require("express");
const app = express();

function isOldEnough(req, res, next) {
  const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    res.json({ message: "Sorry you are not of age yet" });
  }
}
// app.use(isOldEnough); The order of app.use matters.

app.get("/ride", isOldEnough, function (req, res) {
  res.json({
    msg: "you have successfully riden the ride 1",
  });
});

app.listen(3000);
