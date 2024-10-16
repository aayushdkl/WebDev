//This file is a utility file that contains functions for generating, verifying, and decoding JWT tokens. These functions are used in the controller files to create and verify tokens for authentication and authorization purposes.

const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET);
};

const verifyToken = (payload) => {
  return jwt.verify(payload, process.env.JWT_SECRET);
};

const decodeToken = (payload) => {
  return jwt.decode(payload, process.env.JWT_SECRET);
};

module.exports = { generateToken, verifyToken, decodeToken };
