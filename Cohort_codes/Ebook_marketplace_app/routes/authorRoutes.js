// routes/authorRoutes.js

const express = require("express");
const router = express.Router();
const {
  signup,
  signin,
  createEbookHandler,
  getEbooksHandler,
} = require("../controllers/authorController");
const authMiddleware = require("../middlewares/authMiddleware");

// Public Routes
router.post("/signup", signup);
router.post("/signin", signin);

// Protected Routes
router.post("/ebooks", authMiddleware, createEbookHandler);
router.get("/ebooks", authMiddleware, getEbooksHandler);

module.exports = router;
