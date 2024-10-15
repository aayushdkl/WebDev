const mongoose = require("mongoose");
const Author = require("../models/authorModel.js");
const Ebook = require("../models/ebookModel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/dbConfig.js");
const { response } = require("express");

const registerAuthor = async (data) => {
  try {
    const username = data.username;
    const password = data.password;
    const existingAuthor = await Author.findOne(username);
    if (existingAuthor) {
      throw new Error("Author already exists");
    }
    const saltRounds = 10; // Salt rounds means the number of times the password will be hashed to make it more secure
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newCreatedAuthor = Author.create({
      username,
      password: hashedPassword,
    });
    return newCreatedAuthor;
  } catch {
    throw new Error("Registering failed due to server error");
  }
};

const authenticateAuthor = async (data) => {
  const username = data.username;
  const password = data.password;
  try {
    if (!username || !password) {
      throw new Error("Fields cannot be left empty");
    }
    const authorExists = await Author.findOne({
      username,
    });
    if (!authorExists) {
      throw new Error("Invalid username, author doesnt exist");
    }

    const isMatch = await bcrypt.compare(password, authorExists.password);
    if (!isMatch) {
      throw new Error("Invalid password,please enter correct password");
    }
    return authorExists;
  } catch (err) {
    throw new Error("Could not authenticate due to internal server errors");
  }
};

const createEbook = async (ebookData, authorId) => {
  const { title, desciption, price, downloadLink } = ebookData; // This is called object destructuring, it is used to extract the values of an object and store them in variables

  if (!title || !desciption || !price || !downloadLink)
    throw new Error("Fields cannot be left empty");

  const newEbook = await Ebook.create({
    title,
    desciption,
    price,
    downloadLink,
    author: authorId,
  });
  return newEbook;
};

const getAuthorEbooks = async (authorId) => {
  await Author.findOne({
    author: authorId,
  });
};

module.exports = {
  registerAuthor,
  authenticateAuthor,
  createEbook,
  getAuthorEbooks,
};
