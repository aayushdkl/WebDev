// What is useRef?
// useRef is a hook in React that allows you to create a mutable object (which means its value can be changed without causing a re-render). You can think of it as a way to store a reference to a value or a DOM element across renders, without triggering a component update.
// In simpler terms, useRef is like a container that holds a value, and you can access or modify that value without the component needing to re-render.
// What does useRef do?
// It’s mainly used to access and modify DOM elements directly (like focusing an input).
// It can also store persistent values that survive across renders without triggering re-renders.
// Key Use Cases of useRef
// Accessing DOM Elements:

// You can use useRef to get a reference to a DOM element (like an input field) and manipulate it directly (e.g., setting focus).
// Storing Previous Values:

// You can store some value that needs to persist across renders, but without re-rendering the component when it changes.
// Avoiding Re-renders:

// useRef allows you to store values without causing unnecessary re-renders, which can improve performance.

// How to use useRef?
// 1. Using useRef to access DOM elements:

import React, { useEffect, useRef, useState } from "react"

export function UseRef() {
  const [messages, setMessages] = useState([])
  const messagesEndRef = useRef(null)

  useEffect(() => {
    // Simulate new messages being received
    const interval = setInterval(() => {
      setMessages((prev) => [...prev, `New message ${prev.length + 1}`])
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Scroll to the bottom when a new message arrives
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div style={{ height: "300px", overflowY: "auto" }}>
      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
      <div ref={messagesEndRef} />
    </div>
  )
}
