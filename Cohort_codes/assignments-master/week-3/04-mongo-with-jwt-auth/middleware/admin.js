const jwt = require("jsonwebtoken");
const secret = require("../index");
// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const token = req.headers.authorization;
  if (token) {
    const word = token.split(" ");
    const key = word[1];

    const decodedValue = jwt.verify(key, secret);
    if (decodedValue.username) {
      next();
    } else {
      res
        .status(403)
        .json({ message: "Wrong token, You are not authenticated" });
    }
  } else {
    res
      .status(403)
      .json({ message: "Authentication failed! Please fill the token" });
  }
}

module.exports = adminMiddleware;
