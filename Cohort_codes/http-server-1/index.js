const express = require("express");
const app = express();
const port = 3000;

//fs.readfile("path", "utf8", function(err, data) {}  //read file
app.get("/", function (req, res) {
  res.send("Hello World!"); //whenever we get a request to the root of our server, we will send back "Hello World!"
});

app.listen(port);
