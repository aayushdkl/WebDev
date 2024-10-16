const Reader = require("../models/readerModel");
const Ebook = require("../models/ebookModel");
const bcrypt = require("bcrypt");

const registerReader = async (data) => {
  try {
    const username = data.username;
    const password = data.password;
    const existingReader = await Reader.findOne(username);
    if (existingReader) {
      throw new Error("Reader already exists");
    }
    const saltRounds = 10; // Salt rounds means the number of times the password will be hashed to make it more secure
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newCreatedReader = Reader.create({
      username,
      password: hashedPassword,
    });
    return newCreatedReader;
  } catch {
    throw new Error("Registering failed due to server error");
  }
};

const authenticateReader = async (data) => {
  const username = data.username;
  const password = data.password;
  try {
    if (!username || !password) {
      throw new Error("Fields cannot be left empty");
    }
    const ReaderExists = await Reader.findOne({
      username,
    });
    if (!ReaderExists) {
      throw new Error("Invalid username, Reader doesnt exist");
    }

    const isMatch = await bcrypt.compare(password, ReaderExists.password);
    if (!isMatch) {
      throw new Error("Invalid password,please enter correct password");
    }
    return ReaderExists;
  } catch (err) {
    throw new Error("Could not authenticate due to internal server errors");
  }
};

const getAvailableEbooks = async () => {
  const availableBooks = Ebook.find({
    available: true,
  });
  if (!availableBooks) {
    throw new Error("No available books currently");
  }
  return availableBooks;
};

const purchaseEbook = async (ebookId, readerId) => {
  const ebook = Ebook.findOne({
    _id: ebookId,
  });

  if (!ebook) {
    throw new Error("Ebook with given id was not found");
  }

  if (!ebook.available) {
    throw new Error(" Ebook isnt available to purchase");
  }

  const reader = Reader.findOne({
    _id: readerId,
  });
  if (reader.purchasedEbooks.includes(ebookId)) {
    throw new Error("The book is already purchased");
  }

  reader.purchasedEbooks.push(ebookId);
  return reader;
};

const getPurchasedEbooks = async (readerId) => {
  const reader = await Reader.findById(readerId);
  if (!reader) {
    throw new Error("Reader not found.");
  }

  return reader.purchasedEbooks;
};

module.exports = {
  registerReader,
  authenticateReader,
  getAvailableEbooks,
  purchaseEbook,
  getPurchasedEbooks,
};
