import { useRecoilValueLoadable } from "recoil"
import { userDataSelector } from "../recoil/asyncSelect"

export default function UserList() {
  const userDataLoadable = useRecoilValueLoadable(userDataSelector)

  switch (userDataLoadable.state) {
    case "loading":
      return <div>Loading....</div>
    case "hasError":
      return <div>Error: {userDataLoadabe.error.message}</div> //.contents.message is the error message and .contents is the error object
    //We can also use userDataLoadable.error.message
    case "hasValue":
      return (
        <ul>
          {userDataLoadable.contents.map((user) => (
            <li key={user.id}>
              Name: {user.name} email: {user.email}
            </li>
          ))}
        </ul>
      )
  }
}

// We can do useRecoilValueLoadable as :
//userDataLoadable.state
//The functions that we can use after userDataLoadabe are:
//userDataLoadable.state //This will return the state of the loadable like "loading", "hasValue", "hasError"
//userDataLoadable.contents // This will return the value of the loadable Eg: userDataSelector,
//userDataLoadable.error // This will return the error message if the loadable has error
