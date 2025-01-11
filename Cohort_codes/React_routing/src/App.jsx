// import { useState } from "react"
// // import "./App.css"
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
//   useNavigate,
//   Outlet,
// } from "react-router-dom" //HashRouter
// import Class11Program from "../components/Class11Program"
// import Class12Program from "../components/Class12Program"
// import ErrorPage from "../components/ErrorPage"
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route path="/" element={<Landing />}></Route>
//           <Route
//             path="/neet/online-coaching-class-11"
//             element={<Class11Program />}
//           />
//           <Route
//             path="/neet/online-coaching-class-12"
//             element={<Class12Program />}
//           />
//           <Route path="*" element={<ErrorPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }

import { useRef, useState } from "react"

// function Landing() {
//   return <div>Landing</div>
// }
// export default App

// function Layout() {
//   return (
//     <div style={{ height: "100vh" }}>
//       <Header />
//       <div style={{ height: "90vh" }}>
//         <Outlet />
//       </div>
//       <Footer />
//     </div>
//   )
// }

// function Header() {
//   return (
//     <>
//       <Link to="/">Allen</Link>|
//       <Link to="/neet/online-coaching-class-11">Class 11</Link>|
//       <Link to="/neet/online-coaching-class-12">Class 12</Link>|
//     </>
//   )
// }

// function Footer() {
//   return <div>Footer | Contact Us</div>
// }

function App() {
  const [value, setValue] = useState(0)
  const timer = useRef()

  function startClock() {
    let value = setInterval(() => {
      setValue((c) => c + 1)
    }, 1000)
    timer.current = value
  }
  function stopClock() {
    clearInterval(timer.current)
  }
  return (
    <div>
      {value}
      <br />
      <button onClick={startClock}>Start</button>
      <button onClick={stopClock}>Stop</button>
    </div>
  )
}

export default App
