import { useReducer } from "react"

const initialFormState = {
  name: "",
  email: "",
}

function formReducer(state, action) {
  switch (action.type) {
    case "updateName":
      console.log(state)
      return { ...state, name: action.value }
    case "updateEmail":
      return { ...state, email: action.value }
    default:
      return state
  }
}

export function InputValidation() {
  const [formState, dispatch] = useReducer(formReducer, initialFormState)

  return (
    <div>
      <input
        type="text"
        value={formState.name}
        onChange={(e) =>
          dispatch({ type: "updateName", value: e.target.value })
        }
        placeholder="Name"
      />
      <input
        type="email"
        value={formState.email}
        onChange={(e) =>
          dispatch({ type: "updateEmail", value: e.target.value })
        }
        placeholder="Email"
      />
      <p>Name: {formState.name}</p>
      <p>Email: {formState.email}</p>
    </div>
  )
}
