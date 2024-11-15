import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import {
  jobsAtom,
  messagesAtom,
  networkAtom,
  notificationsAtom,
  totalNotificationSelector,
} from "./atoms"
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil"

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  )
}

function MainApp() {
  const networkCount = useRecoilValue(networkAtom)
  const jobsCount = useRecoilValue(jobsAtom)
  const notificationsCount = useRecoilValue(notificationsAtom)
  // const [messagesCount, setMessagesCount] = useRecoilState(messagesAtom)
  const messagesCount = useRecoilValue(messagesAtom)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector)

  return (
    <>
      <button>Home </button>

      <button>My network({handleCount(networkCount)})</button>
      <button>Jobs({handleCount(jobsCount)})</button>
      <button>Messaging({handleCount(messagesCount)})</button>
      <button>Notifications({handleCount(notificationsCount)})</button>
      <button>Me({totalNotificationCount})</button>

      {/* <ButtonUpdater /> */}
    </>
  )
}

// function ButtonUpdater() {
//   const setMessagesCount = useSetRecoilState(messagesAtom)

//   return (
//     <button
//     // onClick={() => {
//     //   setMessagesCount((c) => c + 1)
//     // }}
//     >
//       Me
//     </button>
//   )
// }

function handleCount(count) {
  if (count > 99) {
    return "99+"
  }
  return count
}

export default App
