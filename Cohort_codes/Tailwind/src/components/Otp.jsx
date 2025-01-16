import { useRef, useState } from "react"
import { Button } from "./Button"

export default function Otp() {
  const [disabled, setDisabled] = useState(true)
  const refs = Array(6)
    .fill(null)
    .map(() => useRef())

  function handleInput(index, value) {
    if (value) {
      if (index < refs.length - 1) {
        refs[index + 1].current.focus()
      }
    } else {
      if (index > 0) {
        refs[index - 1].current.focus()
      }
    }

    const allFilled = refs.every((ref) => ref.current?.value)
    setDisabled(!allFilled)
  }

  return (
    <div className="flex gap-2">
      {refs.map((ref, index) => (
        <SubOtpBox
          key={index}
          inputRef={ref}
          onDone={(value) => handleInput(index, value)}
        />
      ))}
      <Button disabled={disabled} className="">
        Submit
      </Button>
    </div>
  )
}

function SubOtpBox({ inputRef, onDone }) {
  return (
    <div className="m-1">
      <input
        ref={inputRef}
        type="text"
        maxLength={1}
        onChange={(e) => onDone(e.target.value)}
        className="text-white w-[30px] h-[35px] rounded-md bg-blue-500 text-center"
        onKeyDown={(e) => {
          if (e.key === "Backspace" && !e.target.value) {
            onDone("")
          }
        }}
      />
    </div>
  )
}
