### What is Axios?

Axios is a popular JavaScript library used to make **HTTP requests** from your web app. In React, it’s commonly used to fetch data from an API. Axios makes it easy to send requests (GET, POST, PUT, DELETE) and handle responses.

### How to Install Axios

First, you need to install Axios in your React project. You can do this by running the following command in your project directory:

```bash
npm install axios
```

### How to Use Axios to Fetch Data in React

Let’s start by going through a simple example where you use Axios to fetch data from a public API and display it in your React app.

### Step-by-Step Guide

#### 1. Basic Axios `GET` Request

Imagine you want to fetch data from a placeholder API like this one: `https://jsonplaceholder.typicode.com/posts` (which returns a list of posts).

Here’s how you can fetch the data:

```jsx
import React, { useState, useEffect } from "react"
import axios from "axios" // Import axios

function PostList() {
  const [posts, setPosts] = useState([]) // State to hold the fetched data
  const [loading, setLoading] = useState(true) // State to show loading status
  const [error, setError] = useState(null) // State to handle errors

  useEffect(() => {
    // Fetch data with Axios inside useEffect
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        // Success! Set the posts data in state
        setPosts(response.data)
        setLoading(false) // Set loading to false when data is loaded
      })
      .catch((error) => {
        // If there's an error, catch it and store it in state
        setError(error.message)
        setLoading(false)
      })
  }, []) // The empty array ensures the effect runs only once when the component mounts

  // Show loading message
  if (loading) return <p>Loading...</p>

  // Show error message if something goes wrong
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {/* Map over the posts data and display each post */}
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default PostList
```

#### How it Works:

- **State**: We use the `useState` hook to create three state variables: `posts` (to store the fetched data), `loading` (to indicate when data is loading), and `error` (to handle any errors).
- **useEffect**: We use the `useEffect` hook to fetch the data when the component mounts. The `axios.get()` method sends a GET request to the API, and we use `.then()` to handle the successful response and `.catch()` to handle any errors.

- **Rendering**: While the data is being fetched, we show a "Loading..." message. Once the data is fetched, it is displayed in a list of posts.

#### 2. Axios `POST` Request

You can also use Axios to send data to an API using a `POST` request. Let’s say we want to add a new post.

Here’s an example:

```jsx
import React, { useState } from "react"
import axios from "axios"

function AddPost() {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault() // Prevent the default form submission behavior

    // Create the data to send
    const newPost = { title, body }

    // Send a POST request with the new post data
    axios
      .post("https://jsonplaceholder.typicode.com/posts", newPost)
      .then((response) => {
        // Success! Show a message
        setMessage("Post added successfully!")
      })
      .catch((error) => {
        // Handle any errors
        setMessage(`Error: ${error.message}`)
      })
  }

  return (
    <div>
      <h1>Add a New Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post Title"
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Post Body"
        ></textarea>
        <button type="submit">Add Post</button>
      </form>
      {message && <p>{message}</p>} {/* Show success or error message */}
    </div>
  )
}

export default AddPost
```

#### How this POST Request Works:

- The form takes the `title` and `body` input from the user.
- On form submission, the data is sent to the API using `axios.post()`.
- If successful, a success message is shown. If there’s an error, the error message is displayed.

### 3. Handling Errors with Axios

If something goes wrong (like a failed request), Axios makes it easy to handle errors using `.catch()`:

```javascript
axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    // Handle success
  })
  .catch((error) => {
    console.error("Error fetching data:", error)
  })
```

### 4. Real-World Usage of Axios in React

- **Fetching Data**: You can use Axios to fetch data from a server or an API and display it in your app. For example, you could fetch user profiles, product lists, or weather data.
- **Submitting Forms**: You can send user input (like login forms or comments) to a server using Axios and handle the response (e.g., showing success messages or validation errors).

- **Authentication**: Axios is commonly used for login and signup systems, where you send login credentials to an API and store the response (like a token) securely.

- **Error Handling**: It’s easy to handle network errors and show appropriate feedback to users when something goes wrong.

### Summary of Axios in React:

- **Install Axios**: Use `npm install axios`.
- **Get Data**: Use `axios.get()` to fetch data.
- **Post Data**: Use `axios.post()` to send data to a server.
- **Handle Errors**: Use `.catch()` to handle any errors during requests.

Here are some project ideas and challenges where you can use Axios in React. I’ll guide you through what you need to achieve and how to approach them. You can work on these step by step and apply what you've learned about fetching data.

### 1. **Weather App**

**Goal**: Build a simple weather app that fetches current weather data for a city.

**What You Need to Do**:

- Use a public weather API like OpenWeatherMap (you’ll need to sign up for an API key).
- Create an input field where users can type in the name of a city.
- When the user submits the city name, use Axios to fetch the weather data for that city.
- Display the temperature, weather condition (sunny, rainy, etc.), and any other info you find useful (e.g., humidity, wind speed).

**Steps**:

- Create a form for users to enter a city name.
- Use `axios.get()` to fetch data from the weather API when the user submits the form.
- Display the fetched data (e.g., city name, temperature) in your component.

### 2. **Crypto Price Tracker**

**Goal**: Build a real-time cryptocurrency price tracker.

**What You Need to Do**:

- Use a cryptocurrency API like CoinGecko or CoinMarketCap (they offer free APIs).
- Create a list of popular cryptocurrencies (Bitcoin, Ethereum, etc.).
- Use Axios to fetch the current price of each cryptocurrency.
- Display the name of each cryptocurrency along with its current price.

**Steps**:

- Fetch the list of cryptocurrencies and their prices using `axios.get()`.
- Update the prices periodically (e.g., every minute) using `setInterval` inside `useEffect`.
- Display the prices in a table or card layout.

### 3. **To-Do List App (with a Backend)**

**Goal**: Build a simple to-do list app where users can add, edit, and delete tasks. Use Axios to interact with a backend API.

**What You Need to Do**:

- Set up a mock backend using a service like [JSONPlaceholder](https://jsonplaceholder.typicode.com/) or build your own simple backend using Express.js.
- Use Axios to fetch the list of tasks from the API when the component loads.
- Allow users to add new tasks using a form.
- Allow users to delete tasks by clicking a "Delete" button.
- Optionally, allow users to mark tasks as complete and update the status using a `PUT` request.

**Steps**:

- Fetch the existing tasks with `axios.get()` when the component mounts.
- Use `axios.post()` to send new tasks to the backend.
- Use `axios.delete()` to remove tasks.
- Optionally, use `axios.put()` to update a task’s status (e.g., marking it as completed).

### 4. **News App**

**Goal**: Create a news app that displays the latest headlines based on a specific category (e.g., technology, sports).

**What You Need to Do**:

- Use a public news API like NewsAPI (you need to sign up for an API key).
- Create a dropdown menu where users can select a category (technology, sports, etc.).
- When a category is selected, use Axios to fetch the latest news articles for that category.
- Display the article title, description, and a link to read the full article.

**Steps**:

- Fetch the news articles using `axios.get()` when the user selects a category.
- Use Axios to fetch the news based on the selected category.
- Display each article’s title, description, and link in a card or list format.

### 5. **Movie Search App**

**Goal**: Build a movie search app that lets users search for movies and view details about them.

**What You Need to Do**:

- Use a movie API like [The Movie Database (TMDb)](https://developers.themoviedb.org/3) (you need to sign up for an API key).
- Create a search bar where users can type a movie title.
- When the user submits a search query, use Axios to fetch the matching movies from the API.
- Display a list of matching movies with their title, poster, and release date.
- When a movie is clicked, fetch and display more details (like plot summary, cast, and reviews).

**Steps**:

- Set up a search form and use `axios.get()` to fetch search results when the user submits the query.
- Display the search results (movie title, poster).
- Use Axios again to fetch detailed information when a user selects a movie.

### 6. **GitHub User Finder**

**Goal**: Create an app where users can search for GitHub profiles and see details about the user.

**What You Need to Do**:

- Use the GitHub API to fetch profile data based on a username.
- Create a search bar where users can input a GitHub username.
- When the user submits a search, use Axios to fetch the user’s profile information (like name, avatar, number of repositories, and followers).
- Display the user's profile picture, name, bio, and repositories.

**Steps**:

- Use Axios to fetch GitHub user data by username.
- Display the fetched data (avatar, name, etc.).
- Optionally, allow users to view the list of repositories and their details.

### 7. **Pagination Example (Blog Post List)**

**Goal**: Build a blog post list where data is fetched in pages (e.g., 10 posts per page).

**What You Need to Do**:

- Use an API like JSONPlaceholder to fetch blog posts in a paginated format.
- Create buttons (Previous, Next) to move between pages.
- Use Axios to fetch a specific page of blog posts when the user clicks the buttons.
- Display the posts for the current page and update the UI as the user navigates.

**Steps**:

- Fetch the initial list of posts with `axios.get()`.
- Create a function that fetches the next page of posts using query parameters (like `?_page=2`).
- Display the posts and add buttons to navigate between pages.

### 8. **E-commerce Product Catalog**

**Goal**: Build a product catalog that fetches and displays products from an API.

**What You Need to Do**:

- Use a mock API like FakeStoreAPI or set up your own with Node.js.
- Fetch the list of products and display each product’s image, name, price, and description.
- Allow users to filter products by category (e.g., electronics, clothing).
- Optionally, let users click on a product to view more detailed information.

**Steps**:

- Fetch the product data with Axios when the component mounts.
- Use `axios.get()` to filter products by category.
- Display the products in a grid or card layout.

### Key Skills You’ll Develop:

- **Handling HTTP Requests**: You’ll practice using `GET`, `POST`, `PUT`, and `DELETE` requests.
- **State Management**: You’ll manage loading, data, and errors using React’s `useState`.
- **Handling User Input**: You’ll work with forms, user input, and dynamic data fetching.
- **Error Handling**: You’ll learn how to handle errors and show feedback to the user.
- **Conditional Rendering**: Display loading states, error messages, and data based on the API response.
