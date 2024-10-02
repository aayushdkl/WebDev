// Problem 1: Book Inventory
// Data Structure:
// JavaScript
// const books = [
//   {
//     title: "The Lord of the Rings",
//     author: "J.R.R. Tolkien",
//     available: true,
//   },
// ];

// Endpoints:
// GET /books: Return all books.
// POST /books: Add a new book.
// PUT /books/:id: Update a book's availability.
// DELETE /books/:id: Delete a book.

const express = require("express");
const app = express();

const books = [
  //the big bracket is an array
  {
    //the curly bracket is an object
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    available: true,
  },
  {
    title: "Muna madan",
    author: "Laxmi Prasad Devkota",
    available: false,
  },
  {
    title: "The Alchemist",
    author: "Paul",
    available: true,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    available: false,
  },
];

app.get("/", (req, res) => {
  let unavailable_books = [];
  const available_books = books.filter((x) => {
    if (x.available) {
      return x;
    } else {
      unavailable_books.push(x);
    }
  });

  res.json({
    available_books,
    unavailable_books,
  });
});

app.listen(3000);
