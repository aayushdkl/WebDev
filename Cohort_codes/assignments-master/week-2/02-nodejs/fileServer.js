/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

const dir_path = path.join(__dirname, "./files/");

app.get("/files", (req, res) => {
  fs.readdir(dir_path, (err, files) => {
    //the (err, files) is a callback function where files has the contents of the directory , like an array of file names. Eg : [ 'example.txt', 'example2.txt' ]
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(200).json(files);
    }
  });
});

app.get("/file/:filename", (req, res) => {
  const file_name_to_display = req.params.filename;

  fs.readFile(
    path.join(dir_path, file_name_to_display),
    "utf8",
    (err, data) => {
      if (err) {
        return res.status(404).send("File not found");
      } else {
        res.status(200).send(data); //The difference between res.send() and res.json() is that res.send() can send any type of response (like JSON, HTML, plain text, etc.), while res.json() sends JSON responses only.
      }
    }
  );
});

//all means that the route is matched for all HTTP requests for the specified path (in this case, all paths)
//The star (*) is a wildcard character that matches any string of any length (including the empty string).
//an example of undefined route is http://localhost:3000/undefined
app.all("*", (req, res) => {
  res.status(404).send("Route not found");
});

module.exports = app;
