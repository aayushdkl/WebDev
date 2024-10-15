// routes/readerRoutes.js

const express = require("express");
const router = express.Router();
const {
  signup,
  signin,
  viewEbooks,
  purchaseEbook,
  getPurchasedEbooks,
} = require("../controllers/readerController");
const authMiddleware = require("../middlewares/authMiddleware");

// Public Routes
router.post("/signup", signup);
router.post("/signin", signin);

// Protected Routes
router.get("/ebooks", authMiddleware, viewEbooks);
router.post("/ebooks/:ebookId", authMiddleware, purchaseEbook);
router.get("/purchasedEbooks", authMiddleware, getPurchasedEbooks);

module.exports = router;
