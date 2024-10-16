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
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const books = [
  //the big bracket is an array
  {
    //the curly bracket is an object
    id: 1,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    available: true,
  },
  {
    id: 2,
    title: "Muna madan",
    author: "Laxmi Prasad Devkota",
    available: false,
  },
  {
    id: 3,
    title: "The Alchemist",
    author: "Paul",
    available: true,
  },
  {
    id: 4,
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

app.post("/", (req, res) => {
  const new_book = req.body;
  books.push(new_book);
  res.json({ message: "New book added successfully", book: new_book });
});

app.put("/", (req, res) => {
  const bookId = parseInt(req.params.id);
  const updatedData = req.body;
  for (let i = 0; i < books.length; i++) {
    if (books[i].id === bookId) {
      books[i].available = updatedData.available;
      return res.json({ message: "Book availability updated", book: books[i] });
    }
  }
  res.status(404).json({ message: "Book not found" });
});

app.delete("/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  for (let i = 0; i < books.length; i++) {
    if (books[i].id === bookId) {
      books.splice(i, 1);
      return res.json({ message: "Book deleted successfully" });
    }
  }
  res.status(404).json({ message: "Book not found" });
});

app.listen(3000);
