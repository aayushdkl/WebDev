// controllers/readerController.js

const {
  registerReader,
  authenticateReader,
  getAvailableEbooks,
  purchaseEbook,
  getPurchasedEbooks,
} = require("../services/readerService");
const { generateToken } = require("../utils/jwtUtils");

const signup = async (req, res) => {
  try {
    const reader = await registerReader(req.body);
    res.status(201).json({ message: "Reader registered successfully." });
  } catch (error) {
    console.error("Error during reader signup:", error);
    res.status(400).json({ message: error.message });
  }
};

const signin = async (req, res) => {
  try {
    const reader = await authenticateReader(req.body);
    const token = generateToken({
      id: reader._id,
      username: reader.username,
      role: "reader",
    });
    res.status(200).json({ token });
  } catch (error) {
    console.error("Error during reader signin:", error);
    res.status(400).json({ message: error.message });
  }
};

const viewEbooks = async (req, res) => {
  try {
    const ebooks = await getAvailableEbooks();
    res.status(200).json({ ebooks });
  } catch (error) {
    console.error("Error fetching available e-books:", error);
    res.status(400).json({ message: error.message });
  }
};

const purchaseEbookHandler = async (req, res) => {
  try {
    const ebookId = req.params.ebookId;
    const readerId = req.user.id;

    const reader = await purchaseEbook(ebookId, readerId);
    res.status(200).json({ message: "E-book purchased successfully.", reader });
  } catch (error) {
    console.error("Error purchasing e-book:", error);
    res.status(400).json({ message: error.message });
  }
};

const getPurchasedEbooksHandler = async (req, res) => {
  try {
    const purchasedEbooks = await getPurchasedEbooks(req.user.id);
    res.status(200).json({ purchasedEbooks });
  } catch (error) {
    console.error("Error fetching purchased e-books:", error);
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  signup,
  signin,
  viewEbooks,
  purchaseEbook: purchaseEbookHandler,
  getPurchasedEbooks: getPurchasedEbooksHandler,
};
