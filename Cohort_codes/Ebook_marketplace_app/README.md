# E-Book Marketplace App

## Description

You need to implement an e-book marketplace app with two types of users:

- **Authors**
- **Readers**

Authors are allowed to sign up and create e-books. Readers are allowed to sign up, view e-books, and purchase them.

This will follow similar authentication rules as the previous app, where in every authenticated request, you must send the JWT in headers (Authorization: "Bearer <actual token>"). Use MongoDB to store the data persistently.

## Routes

### Author Routes:

#### POST /author/signup

- **Description**: Creates a new author account.
- **Input Body**:
  ```json
  { "username": "author", "password": "pass" }
  ```
- **Output**:
  ```json
  { "message": "Author created successfully" }
  ```

#### POST /author/signin

- **Description**: Logs in an author account.
- **Input Body**:
  ```json
  { "username": "author", "password": "pass" }
  ```
- **Output**:
  ```json
  { "token": "your-token" }
  ```

#### POST /author/ebooks

- **Description**: Creates a new e-book.
- **Input**:
  - **Headers**:
    ```json
    { "Authorization": "Bearer <your-token>" }
    ```
  - **Body**:
    ```json
    {
      "title": "ebook title",
      "description": "ebook description",
      "price": 50,
      "downloadLink": "https://linktoebook.com"
    }
    ```
- **Output**:
  ```json
  { "message": "E-book created successfully", "ebookId": "new e-book id" }
  ```

#### GET /author/ebooks

- **Description**: Returns all the e-books created by the author.
- **Input**:
  - **Headers**:
    ```json
    { "Authorization": "Bearer <your-token>" }
    ```
- **Output**:
  ```json
  {
    "ebooks": [
      {
        "id": 1,
        "title": "ebook title",
        "description": "ebook description",
        "price": 50,
        "downloadLink": "https://linktoebook.com",
        "available": true
      },
      ...
    ]
  }
  ```

### Reader Routes:

#### POST /reader/signup

- **Description**: Creates a new reader account.
- **Input**:
  ```json
  { "username": "reader", "password": "pass" }
  ```
- **Output**:
  ```json
  { "message": "Reader created successfully" }
  ```

#### POST /reader/signin

- **Description**: Logs in a reader account.
- **Input**:
  ```json
  { "username": "reader", "password": "pass" }
  ```
- **Output**:
  ```json
  { "token": "your-token" }
  ```

#### GET /reader/ebooks

- **Description**: Lists all the available e-books.
- **Input**:
  - **Headers**:
    ```json
    { "Authorization": "Bearer <your-token>" }
    ```
- **Output**:
  ```json
  {
    "ebooks": [
      {
        "id": 1,
        "title": "ebook title",
        "description": "ebook description",
        "price": 50,
        "downloadLink": "https://linktoebook.com",
        "available": true
      },
      ...
    ]
  }
  ```

#### POST /reader/ebooks/<ebookId>

- **Description**: Purchases an e-book. The ebookId in the URL path should be replaced with the ID of the e-book to be purchased.
- **Input**:
  - **Headers**:
    ```json
    { "Authorization": "Bearer <your-token>" }
    ```
- **Output**:
  ```json
  { "message": "E-book purchased successfully" }
  ```

#### GET /reader/purchasedEbooks

- **Description**: Lists all the e-books purchased by the reader.
- **Input**:
  - **Headers**:
    ```json
    { "Authorization": "Bearer <your-token>" }
    ```
- **Output**:

  ```json
  {
    "purchasedEbooks": [
      {
        "id": 1,
        "title": "ebook title",
        "description": "ebook description",
        "price": 50,
        "downloadLink": "https://linktoebook.com",
        "available": true
      },
      ...
    ]
  }
  ```

  e-book-marketplace-app/
  │
  ├── controllers/
  │ ├── authorController.js # Logic for author-related routes
  │ ├── readerController.js # Logic for reader-related routes
  │
  ├── models/
  │ ├── authorModel.js # MongoDB schema for authors
  │ ├── readerModel.js # MongoDB schema for readers
  │ ├── ebookModel.js # MongoDB schema for e-books
  │
  ├── routes/
  │ ├── authorRoutes.js # Routes for author actions (signup, signin, create ebook, list ebooks)
  │ ├── readerRoutes.js # Routes for reader actions (signup, signin, view ebooks, purchase ebooks)
  │
  ├── middlewares/
  │ ├── authMiddleware.js # Middleware for JWT authentication
  │
  ├── services/
  │ ├── authorService.js # Handles business logic for authors
  │ ├── readerService.js # Handles business logic for readers
  │ ├── ebookService.js # Handles business logic for e-books
  │
  ├── utils/
  │ ├── jwtUtils.js # Utility functions for JWT handling (generate token, verify token)
  │
  ├── config/
  │ ├── dbConfig.js # MongoDB connection configuration
  │
  ├── app.js # Main app entry point where Express is set up
  ├── package.json # Dependencies and scripts
  ├── .env # Environment variables (e.g., MongoDB URI, JWT secret)
  ├── .gitignore # Files to ignore in git (e.g., node_modules, .env)
  └── README.md # Project documentation
