//Middlewares in simple language are functions that run before the main function.
// In this case, the main function is the function that is called when the user sends a request to the server.
// The middleware function runs before the main function and can be used to perform tasks such as authentication, logging, error handling, etc.
// In the code snippet above, the middleware function is used to check if the user exists before updating or deleting the user data.
// If the user does not exist, an error message is sent back to the client.
// If the user exists, the user data is updated or deleted and a success message is sent back to the client.

app.use(express.json());
app.use(express.json()); //this in simple terms does the same thing as body-parser, which is to parse the body of the request and make it available in req.body. The meaning of parse the body of request in easy is to convert the data sent by the client to the server into a format that the server can understand i.e JSON format.

app.use(calculateRequests); //All routes below this line will use the calculateRequests middleware.

app.post(
  "/register",
  /*calculateRequests,*/ (req, res) => {
    const { username, password } = req.body;
    if (username === "admin" && password === "admin") {
      res.json({ message: "User registered successfully" });
    } else {
      res.status(401).json({ message: "Unauthorized access" });
    }
  }
);

app.get(
  "/users",
  /*calculateRequests, */ (req, res) => {
    res.json(users);
  }
);

//global catches: 404 error
//They help to catch any errors that occur in the application and send an error response to the client.
//This is a global error handler middleware. It catches any errors that occur in the application and sends an error response to the client. The error handler middleware takes four arguments: err, req, res, and next. The err argument is the error object that is passed to the middleware.
app.use(function (err, req, res, next) {
  res.status(404).send("404 not found");
});
