import "./index.css"
// import Screen1 from "./components/Screen1"
import { Button } from "./components/Button"
import { Input } from "./components/Input"
import Otp from "./components/Otp"
function App() {
  return (
    <>
      <div className="h-screen bg-blue-700 flex flex-col justify-center items-center">
        <Input type={"text"} placeholder={"Enter your email"}></Input>
        <Button disabled={true}>Sign Up</Button>
        <Otp></Otp>
      </div>
    </>
  )
}

export default App

{
  /* <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="flex justify-center">
          <div className="bg-blue-300">child1</div>
          <div className="bg-red-500">child2</div>
          <div className="bg-green-300">child3</div>
        </div>
        <div className="grid sm:grid-cols-12">
          <div className="bg-blue-300 col-span-4">child1</div>
          <div className="bg-red-500 col-span-4">child2</div>
          <div className="bg-green-300 col-span-4">child3</div>
        </div> */
}
{
  /* <div className="min-h-screen flex items-center justify-center bg-gray-100"> */
}
{
  /* <Screen1></Screen1> */
}
{
  /* </div> */
}

{
  /* <div className="md:bg-green-700 sm:bg-blue-300 bg-red-700">Hello</div> */
}
{
  /* </div> */
}
