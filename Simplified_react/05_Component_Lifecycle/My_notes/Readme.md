`useEffect` is one of the most important hooks in React, and it's used to manage _side effects_ in your components. Let’s break it down step by step:

### What is `useEffect`?

In simple terms, `useEffect` allows your component to perform tasks **after** it has rendered (shown on the screen). These tasks can include things like:

- Fetching data from an API
- Updating the page title
- Setting up timers
- Listening to events (e.g., scrolling or resizing)
- Cleaning up resources (like removing event listeners when the component is no longer needed)

### When to use `useEffect`?

You use `useEffect` when your component needs to do something that **affects the outside world** or **needs to run a side effect**. Examples:

- Fetch data when a component loads.
- Run code when a button is clicked (like sending data to a server).
- Update the DOM directly (like changing the title of the webpage).
- Set a timer when the component starts and clean it up when it unmounts (disappears from the screen).

### Syntax of `useEffect`

```javascript
useEffect(() => {
  // Your side-effect code here
})
```

- The function inside `useEffect` is the code that will run when your component renders.

### How does `useEffect` work?

When React renders your component:

1. It runs the code inside `useEffect` _after_ updating the UI.
2. If you need to stop or "clean up" something (like removing event listeners), you can return a clean-up function.

### Basic Example 1: Updating the document title

```javascript
import React, { useState, useEffect } from "react"

function ExampleComponent() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // This code runs after every render
    document.title = `You clicked ${count} times`
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
```

- What’s happening here? Each time you click the button and change `count`, React re-renders the component. The `useEffect` runs **after** that, updating the page title to reflect the new `count`.

### Example 2: Fetching data from an API

```javascript
import React, { useState, useEffect } from "react"

function DataFetchingComponent() {
  const [data, setData] = useState([])

  useEffect(() => {
    // Fetch data from an API after the component renders
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json))
  }, []) // Passing an empty array means this will only run once (when the component mounts)

  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}
```

### Important: The Dependency Array

In the example above, we passed an empty array `[]` as the second argument to `useEffect`. This tells React:

- "Run this effect **only once** when the component loads."

If we want the effect to run **again** when certain variables change (like `count` in the earlier example), we can pass those variables into the array:

```javascript
useEffect(() => {
  // This will run whenever 'count' changes
  console.log(`Count changed to ${count}`)
}, [count])
```

### Key Points to Remember:

1. **By default, `useEffect` runs after every render.**

   - It runs after the component's first render.
   - It runs again after any update (when state or props change).

2. **The dependency array controls when `useEffect` runs.**

   - If the array is empty (`[]`), the effect runs once when the component loads.
   - If you include variables in the array (e.g., `[count]`), the effect runs whenever those variables change.

3. **Cleanup function:**
   If your effect sets something up (like a timer or event listener), you can clean it up to avoid memory leaks when the component is removed.

```javascript
useEffect(() => {
  const timer = setTimeout(() => {
    console.log("Timer done")
  }, 3000)

  // Cleanup function (called when the component is removed)
  return () => clearTimeout(timer)
}, [])
```

### Real-World Applications of `useEffect`:

- **Fetching Data:** You can fetch data when a component loads and display it on the screen.
- **Event Listeners:** You can add a window scroll or resize event listener when the component loads and remove it when it unmounts.
- **Timers:** You can start a countdown timer when the component appears and stop it when the component is removed.

### Final Example: Cleanup Function with Event Listeners

```javascript
import React, { useEffect } from "react"

function ResizeListenerComponent() {
  useEffect(() => {
    const handleResize = () => {
      console.log("Window resized:", window.innerWidth)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup function to remove the event listener when the component is removed
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <h1>Resize the window and check the console</h1>
}
```

In this example:

- `useEffect` sets up an event listener when the component is first rendered.
- When the component is no longer needed (like if it disappears from the page), the cleanup function removes the event listener.

### Summary:

- `useEffect` helps you perform tasks that go beyond rendering, like fetching data, setting up timers, or handling events.
- The dependency array controls when your effect runs.
- You can clean up side effects by returning a cleanup function to prevent memory leaks.
