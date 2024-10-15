// This file is a middleware file that contains a function for verifying JWT tokens. This function is used in the routes to authenticate and authorize users based on the token provided in the request headers. The function extracts the token from the headers, verifies it using the secret key from the .env file, and attaches the decoded user information to the request object. This information can then be used in the route handlers to perform actions based on the user's identity. The middleware function is exported to be used in the routes that require authentication.

const jwt = require("jsonwebtoken");
require("dotenv").config();
const {
  generateToken,
  verifyToken,
  decodeToken,
} = require("../utils/jwtUtils");

const authMiddleware = (req, res, next) => {
  const headers_input = req.headers.authorization;

  if (!headers_input || !headers_input.startsWith("Bearer")) {
    res.status(401).json({
      message: "Token cannot be empty or in invalid format",
    });
  }
  const split_headers = headers_input.split(" ");
  const token = split_headers[1];

  const decoded = verifyToken(token);
  if (!decoded) {
    res.status(401).json({
      message: "Token is invalid",
    });
  }
  req.user = decoded; // 5. Attach user information to the request object. THis is the user information that was decoded from the token
  //It is now available to be used in the next middleware or route handler
  next();
};
