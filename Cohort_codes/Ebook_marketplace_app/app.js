// app.js

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const connectToDatabase = require("./config/dbConfig");
const authorRoutes = require("./routes/authorRoutes");
const readerRoutes = require("./routes/readerRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectToDatabase();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(morgan("dev")); // Log HTTP requests
app.use(cors()); // Enable CORS

// Routes
app.use("/author", authorRoutes);
app.use("/reader", readerRoutes);

// Global Error Handler (Optional)
app.use((err, req, res, next) => {
  console.error("Global error handler:", err);
  res.status(500).json({ message: "Something went wrong!" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
