// const express = require("express");
// const app = express();
// const port = 3000;

// //fs.readfile("path", "utf8", function(err, data) {}  //read file
// app.get("/", function (req, res) {
//   res.send("Hello World!"); //whenever we get a request to the root of our server, we will send back "Hello World!"
// });

// app.listen(port);

const express = require("express");
const app = express();
const port = 3000;

function CalculateSum(n) {
  let sum = 0;
  for (i = 0; i < n; i++) {
    sum = sum + i;
  }
  return sum;
}

app.get("/", function (req, res) {
  const n = req.query.n;
  const ans = CalculateSum(n);
  res.sendStatus(ans.toString()); //Send string whenever we want to send the ans, because sending ans may result in it thinking that it is a status code which might give some error
});

app.listen(port);
