// Example 1: Simple useMemo

// import { useMemo, useState } from "react"

// export function UseMemo() {
//   const [number, setNumber] = useState(1)
//   const [count, setCount] = useState(0)

//   function slowFunction(num) {
//     console.log("Calculating.....")
//     let res = 0
//     for (let index = 0; index < 10; index++) {
//       res = res + num
//     }
//     return res
//   }

//   const slowResult = useMemo(() => slowFunction(number), [number])

//   return (
//     <div>
//       <h1>Expensive operation result:{slowResult}</h1>
//       <button onClick={() => setNumber((prev) => prev + 1)}>
//         Increase number
//       </button>
//       <h2>Counter: {count}</h2>
//       <button onClick={() => setCount((prev) => prev + 1)}>
//         Increase Counter
//       </button>
//     </div>
//   )
// }

// Example 2: Memoizing a Filtered List

import React, { useState, useMemo } from "react"

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Jack" },
  // Imagine there are hundreds or thousands of users here
]

export function UseMemo() {
  const [searchTerm, setSearchTerm] = useState("")

  // Memoize the filteredUsers, so it only recalculates if searchTerm changes
  const filteredUsers = useMemo(() => {
    console.log("Filtering users...")
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [searchTerm])

  return (
    <div>
      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

//Notes on useMemo
// useMemo is used to memoize a value. This means that the value is stored in memory and only recalculated if the dependencies change.
// This is useful when you have a value that is expensive to calculate and you only want to calculate it when the dependencies change.

// Understanding useMemo in React
// useMemo is a React hook that helps optimize performance by memorizing the result of a calculation, so that the calculation is only recomputed when its dependencies change. This helps avoid unnecessary recalculations and re-renders, especially in situations where the component needs to perform heavy computations or render large data sets.
// The meaning of dependencies in the context of useMemo is the same as in the context of useEffect. Dependencies are the values that the useMemo hook watches for changes. When any of the dependencies change, the useMemo hook will recompute the memoized value. If none of the dependencies change, the memoized value will be returned without recomputing it.

// Syntax of useMemo
// The syntax of useMemo is as follows:
// const memoizedValue = useMemo(() => {
//     // some expensive calculation
//     return calculatedResult;
//   }, [dependency1, dependency2, ...]);

// useMemo takes two arguments:
// 1. A function that returns the value you want to memoize.
// 1. A dependency array that tells React when to recalculate the memoized value. If any value in this array changes, the memoized value will be recalculated.
