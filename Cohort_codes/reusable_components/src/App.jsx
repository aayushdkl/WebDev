import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import Button from "./components/Button"
import Card from "./components/Card"
import InputField from "./components/InputField"
import Dropdown from "./components/Dropdown"
import Modal from "./components/Modal"
import Container from "./components/Container"

function App() {
  const [inputVal, setInputVal] = useState("")
  const [selectedOption, setSelectedOption] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)

  function handleSelection(value) {
    setSelectedOption(value)
  }
  function handleClick() {
    console.log("Button Clicked")
  }
  function handleChange(e) {
    setInputVal(e.target.value)
  }
  function handleCloseModal() {
    setIsModalOpen(!isModalOpen)
  }
  function toggleModalCase() {
    setIsModalOpen(true)
  }
  return (
    <>
      <Button
        label={"SignUp"}
        variant={"primary"}
        onClick={handleClick}
        disabled={false}
      ></Button>
      <Button
        label={"SignUp"}
        variant={"secondary"}
        onClick={handleClick}
        disabled={true}
      ></Button>

      <Card title="First Card">
        <p>This is the description for the first card</p>
        <Button
          label={"FirstCard"}
          onClick={handleClick}
          variant={"primary"}
        ></Button>
      </Card>
      {/* <Card></Card> */}
      <InputField
        type={"text"}
        placeholder={"Enter your email"}
        onChange={handleChange}
        value={inputVal}
      ></InputField>
      <p>You Typed : {inputVal}</p>

      <Dropdown
        label={"Select a food"}
        options={["pizza", "burger", "momo", "rice"]}
        selectedValue={selectedOption}
        onSelect={handleSelection}
      ></Dropdown>

      <div>
        <Button
          label={"Open Modal"}
          onClick={toggleModalCase}
          variant={"primary"}
          disabled={false}
        ></Button>
      </div>
      {isModalOpen && (
        <Modal
          title={"Example Modal"}
          content={<p>There is some content inside teh modal</p>}
          onClose={handleCloseModal}
        ></Modal>
      )}

      <Container style={"bg-color-blue pt-8"}>
        <Card title="Container Card">
          <p>This is the description for Container card</p>
          <Button
            label={"ContainerCard"}
            onClick={handleClick}
            variant={"primary"}
          ></Button>
          <p>This is a paragraph inside the Container</p>
        </Card>{" "}
      </Container>
    </>
  )
}

export default App
