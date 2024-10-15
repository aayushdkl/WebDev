function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

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

module.exports = userMiddleware;
