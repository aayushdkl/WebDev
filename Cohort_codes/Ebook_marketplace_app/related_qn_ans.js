//MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/ebookmarketplace?retryWrites=true&w=majority
// in above code ebookmarketplace?retryWrites=true&w=majority does the following:
// ebookmarketplace: name of the database
// retryWrites=true: retry writes that fail due to a network error
// w=majority: write operations are acknowledged by a majority of the nodes
// if the database name is not present, MongoDB will create a new database with the name provided in the connection string, in this case ebookmarketplace
// *********************************************************************************

// To access anything in the .env file, we use process.env.VARIABLE_NAME

// *********************************************************************************
// mongoose.Schema.Types.ObjectId; // ObjectId is a 12-byte identifier that is unique to every document in a collection. It is made up of a timestamp, machine ID, process ID, and a random incrementing value. ObjectId is the default value of the _id field in MongoDB. It is a 24-character hexadecimal string.

//The mongoose.Schema.Types.ObjectId is used to define a new ObjectId type in a schema. This is used to define the type of the _id field in a schema. The _id field is the primary key of a document in a collection. It is unique to every document in a collection and is indexed by default.

//*********************************************************************************

//The complete process of writing a signin logic in a controller file is as follows:
// 1. Get the username and password from the request body.
// 2. Check if the username or password is empty. If either is empty, return a 401 status code with a message saying that the username or password cannot be empty.
// 3. Find the author with the given username in the database.
// 4. If the author does not exist, return a 400 status code with a message saying that the credentials are invalid.
// 5. Compare the password provided by the user with the hashed password stored in the database.
// 6. If the passwords do not match, return a 401 status code with a message saying that the password is invalid.
// 7. If the passwords match, generate a JWT token with the username and sign it using the JWT_SECRET from the .env file.
// 8. Return the token in the response body.
// *********************************************************************************

//The complete process of writing a signup logic in a controller file is as follows:
// 1. Get the username and password from the request body.
// 2. Check if an author with the given username already exists in the database.
// 3. If the author exists, return a 400 status code with a message saying that the author already exists.
// 4. Hash the password using bcrypt with a salt round of 10.
// 5. Create a new author document in the database with the username and hashed password.
// 6. Return a 200 status code with a message saying that the author was created successfully.
// 7. If there is an error during the process, return a 500 status code with a message saying that there was an internal server error.
// *********************************************************************************

//The process of connecting to a MongoDB database using Mongoose is as follows:
// 1. Import the mongoose library.
// 2. Define a function to connect to the database.
// 3. Use the mongoose.connect() method to connect to the MongoDB database using the connection string from the .env file.
// 4. Use the mongoose.connection object to handle events like connection, error, and disconnection.
// 5. Export the function to be used in the main app.js file.
// 6. Call the connectToDatabase() function in the main app.js file to establish a connection to the database.
// *********************************************************************************

//The complete process of creating a create ebook logic in a controller file is as follows:
// 1. Get the title, author, price, and description from the request body.
// 2. Check if any of the fields are empty. If any field is empty, return a 400 status code with a message saying that the fields cannot be empty.
// 3. Create a new ebook document in the database with the title, author, price, and description.
// 4. Return a 200 status code with a message saying that the ebook was created successfully.
// 5. If there is an error during the process, return a 500 status code with a message saying that there was an internal server error.
// *********************************************************************************

//The complete process of defining utils functions for generating and verifying JWT tokens is as follows:
// 1. Import the jsonwebtoken library.
// 2. Define a function to generate a JWT token with a payload and secret key.
// 3. Use the jwt.sign() method to generate a token with the payload and secret key.
// 4. Define a function to verify a JWT token with a token and secret key.
// 5. Use the jwt.verify() method to verify the token with the secret key.
// 6. Export the functions to be used in the controller files.
// *********************************************************************************

//Use async and await when working with asynchronous code in Node.js. This allows you to write asynchronous code in a synchronous way, making it easier to read and maintain. async and await are built on top of promises, which are a way to handle asynchronous operations in JavaScript. async functions return a promise, and await can be used to wait for the promise to resolve. This makes it easier to work with asynchronous code and handle errors. async and await are supported in Node.js version 7.6 and above. *********************************************************************************

//The complete process of defining the middleware function for verifying JWT tokens is as follows:
// 1. Import the jsonwebtoken library.
// 2. Define a middleware function that takes the request, response, and next function as arguments.
// 3. Get the token from the request headers.
// format of headers is: req.headers.authorization
//  Input eg by user : Authorization : Bearer <token
// 4. Check if the token is present in the headers. If the token is not present, return a 401 status code with a message saying that the token is missing.
// 5. Verify the token using the secret key from the .env file.
//Import functions from the utils file to generate and verify JWT tokens.
//to import functions from another file use require("./utils")

// 6. If the token is invalid, return a 401 status code with a message saying that the token is invalid.
// 7. If the token is valid, call the next function to continue with the request.
// 8. Export the middleware function to be used in the routes that require authentication.
// 9. Use the middleware function in the routes that require authentication to verify the JWT token.
// *********************************************************************************

// 5. Attach user information to the request object
// req.user = decoded;
//The decoded payload of the JWT token contains the user information. You can attach this information to the request object to access it in the route handlers. This allows you to identify the user making the request and perform actions based on their information. You can access the user information using req.user in the route handlers.
// like this:
// const user = req.user;
// console.log(user);
// *********************************************************************************

//The services folder contains the business logic of the application. It is responsible for interacting with the database, performing operations on the data, and returning the results to the controller. The services folder is where you define functions to create, read, update, and delete data from the database. It is a good practice to separate the business logic from the controller to keep the code organized and maintainable.

//The services folder typically contains the following files:
// 1. ebookService.js: Contains functions to interact with the ebook collection in the database.
// 2. authorService.js: Contains functions to interact with the author collection in the database.
// 3. userService.js: Contains functions to interact with the user collection in the database.

// The authorService.js file contains functions to perform CRUD operations on the author collection in the database. It is responsible for creating, reading, updating, and deleting author documents. The authorService.js file interacts with the Author model from the models folder to perform these operations.

//The authorService.js file typically contains the following functions:
// 1. registerAuthor(): Creates a new author document in the database.
// 2. authenticateAuthor (): Finds an author document in the database based on the username and password.
// 3. createEbook ():  Creates a new ebook document in the database.
// 4. deleteAuthor(): Deletes an author document from the database.

//For registerAuthor() function:
// 1. Get the username and password from the request body.
// 2. Check if the username or password is empty. If either is empty, throw an error with a message saying that the username or password cannot be empty.
// 3. Check if an author with the given username already exists in the database. If the author exists, throw an error with a message saying that the author already exists.
// 4. Hash the password using bcrypt with a salt round of 10.
// 5. Create a new author document in the database with the username and hashed password.
// 6. Return the created author document.

//The complete process of service functions for authorService.js is as follows:
// 1. Import the Author model from the models folder.
// 2. Define a function to create a new author in the database.
// 3. Use the Author.create() method to create a new author document in the database.
// 4. Return the created author document.
// 5. Export the function to be used in the controller file.

// *********************************************************************************

//*********************************************************************************
