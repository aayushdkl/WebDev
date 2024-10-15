# 📚 Ebook Marketplace

Welcome to the **Ebook Marketplace**, an application where authors can publish their books and readers can browse, purchase, and enjoy ebooks! This platform facilitates a seamless interaction between authors and readers, allowing for content creation, purchasing, and reviewing of ebooks.

---

## 🌟 Features

### 🔐 **Authentication and Authorization**

- Secure **JWT-based authentication** for both Authors and Readers.
- Each user type has distinct capabilities, ensuring role-based access to features.
- Authors and Readers can **register**, **login**, and manage their profiles.

### ✍️ **Authors**

- Authors can **create** and **upload ebooks** to the marketplace.
- Manage personal details and **update profiles** securely.
- View sales information and manage books they have published.

### 📖 **Readers**

- Readers can **browse**, **search**, and **purchase ebooks** from the marketplace.
- Download purchased ebooks for future reading.
- Provide feedback by leaving **reviews** and **ratings** for the ebooks they have purchased.

### 📚 **Ebooks**

- Ebooks come with detailed information including **title**, **description**, **price**, and **author**.
- Readers can view individual ebook pages with details and reviews.
- Purchased ebooks can be accessed and downloaded at any time by the reader.

---

## 🗂 **Project Structure**

The project is organized into clear directories for better modularity and maintainability. Here's a breakdown of the directory structure:

```
📦 Ebook Marketplace
├── 📂 controllers          # Business logic for different features
│   ├── authorController.js # Handles author-specific requests
│   ├── readerController.js # Handles reader-specific requests
│   └── ebookController.js  # Handles ebook-related actions
├── 📂 models               # MongoDB schemas and data models
│   ├── Author.js           # Model for author data
│   ├── Reader.js           # Model for reader data
│   └── Ebook.js            # Model for ebook data
├── 📂 routes               # Route definitions for APIs
│   ├── authorRoutes.js     # Endpoints related to author actions
│   ├── readerRoutes.js     # Endpoints related to reader actions
│   └── ebookRoutes.js      # Endpoints related to ebook management
├── 📂 middlewares          # Custom middleware for request handling
│   └── authMiddleware.js   # Middleware for JWT-based authorization
├── 📂 services             # Service layer for business logic
│   ├── authorService.js    # Logic for handling author-related operations
│   ├── readerService.js    # Logic for handling reader-related operations
│   └── ebookService.js     # Logic for ebook-related operations
├── 📂 utils                # Utility functions for handling common tasks
│   └── jwtUtils.js         # Functions for generating and verifying JWTs
├── 📂 config               # Configuration files
│   └── dbConfig.js         # MongoDB connection setup
├── .env                    # Environment variables (DB URIs, JWT secrets, etc.)
├── server.js               # Main entry point for the application
├── README.md               # Documentation for the project
└── package.json            # Project metadata and dependencies
```

---

## 🚀 **Getting Started**

### 1. **Clone the Repository**

```bash
git clone https://github.com/yourusername/ebook-marketplace.git
cd ebook-marketplace
```

### 2. **Install Dependencies**

Install the necessary Node.js packages by running:

```bash
npm install
```

### 3. **Configure Environment Variables**

Create a `.env` file in the project root and add the following:

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### 4. **Set Up MongoDB Connection**

Make sure your MongoDB instance is up and running and properly configured in the `dbConfig.js` file.

### 5. **Start the Application**

Launch the server with the following command:

```bash
npm start
```

The app will run on `http://localhost:5000`.

---

## 📋 **API Endpoints**

### **Authentication Endpoints**:

- **POST** `/auth/register`: Register a new user (Author or Reader).
- **POST** `/auth/login`: Login as an Author or Reader.

### **Author-Specific Endpoints**:

- **GET** `/authors/profile`: Get the authenticated author’s profile.
- **PUT** `/authors/profile`: Update the authenticated author’s profile.
- **POST** `/authors/ebooks`: Upload a new ebook to the platform.
- **GET** `/authors/ebooks`: Get all ebooks uploaded by the authenticated author.

### **Reader-Specific Endpoints**:

- **GET** `/readers/profile`: Get the authenticated reader’s profile.
- **PUT** `/readers/profile`: Update the authenticated reader’s profile.
- **GET** `/readers/ebooks`: Browse and view all available ebooks.
- **POST** `/readers/ebooks/:id/purchase`: Purchase a specific ebook.
- **GET** `/readers/purchased-books`: List all ebooks purchased by the reader.

### **Ebook Endpoints**:

- **GET** `/ebooks/:id`: Fetch details of a specific ebook by its ID.
- **POST** `/ebooks/:id/reviews`: Leave a review for an ebook.
- **GET** `/ebooks`: Get a list of all available ebooks.

---

## ⚙️ **Technologies Used**

- **Node.js**: Backend framework.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing data.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB.
- **JWT (JSON Web Tokens)**: For authentication and authorization.
- **dotenv**: For managing environment variables.
- **bcrypt.js**: For hashing passwords.

---

## 🛠 **Running Tests**

To run the tests, ensure that the app is up and running, and execute the following command:

```bash
npm test
```

---

## 📈 **Future Improvements**

Here are some planned enhancements for the platform:

- Implement advanced search functionality for ebooks by categories, genres, and ratings.
- Add the ability for authors to track real-time sales data.
- Allow readers to create wishlists and bookmark ebooks.
- Integrate third-party payment gateways for purchasing ebooks.

---

## 📧 **Contact**

For any questions or inquiries, please reach out at: **https://www.facebook.com/ayushdkl7/**

---

**Enjoy using the Ebook Marketplace!** ✨
