const Ebook = require("../models/ebook");
const Author = require("../models/author");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
// const { response } = require ("express");

const getEbookById = async (ebookId) => {
  const ebook = await Ebook.findOne({
    _id: ebookId,
  });

  if (!ebook) {
    throw new Error("Ebook not found");
  }
  return ebook;
};
module.exports = {
  getEbookById,
};
