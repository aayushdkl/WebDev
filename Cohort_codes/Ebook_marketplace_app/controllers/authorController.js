// controllers/authorController.js

const {
  registerAuthor,
  authenticateAuthor,
  createEbook,
  getAuthorEbooks,
} = require("../services/authorService");
const { generateToken } = require("../utils/jwtUtils");

const signup = async (req, res) => {
  try {
    const author = await registerAuthor(req.body);
    res.status(201).json({ message: "Author registered successfully." });
  } catch (error) {
    console.error("Error during author signup:", error);
    res.status(400).json({ message: error.message });
  }
};

const signin = async (req, res) => {
  try {
    const author = await authenticateAuthor(req.body);
    const token = generateToken({
      id: author._id,
      username: author.username,
      role: "author",
    });
    res.status(200).json({ token });
  } catch (error) {
    console.error("Error during author signin:", error);
    res.status(400).json({ message: error.message });
  }
};

const createEbookHandler = async (req, res) => {
  try {
    const ebook = await createEbook(req.body, req.user.id);
    res
      .status(201)
      .json({ message: "E-book created successfully.", ebookId: ebook._id });
  } catch (error) {
    console.error("Error creating e-book:", error);
    res.status(400).json({ message: error.message });
  }
};

const getEbooksHandler = async (req, res) => {
  try {
    const ebooks = await getAuthorEbooks(req.user.id);
    res.status(200).json({ ebooks });
  } catch (error) {
    console.error("Error fetching e-books:", error);
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  signup,
  signin,
  createEbookHandler,
  getEbooksHandler,
};
