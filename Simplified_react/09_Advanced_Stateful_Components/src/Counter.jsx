import { useReducer, useState } from "react"

const initialState = { count: 0, name: "" }
function reducer(state, action) {
  //Here state and action are the two parameters, state is the current state and action is the action that is being dispatched. An example of an action is { type: 'increment' }.
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 }
    case "decrement":
      return { count: state.count - 1 }

    default:
      return state
  }
}
export function Counter() {
  //   const [count, dispatch] = useReducer(reducer, initialCount)
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <div>
        <p>Count:{state.count}</p>
        {/* Step 3: Dispatch actions */}
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
      </div>
      <br />
    </>
  )
}
