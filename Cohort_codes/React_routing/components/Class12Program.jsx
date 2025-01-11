import { useNavigate } from "react-router-dom"

export default function Class12Program() {
  const navigate = useNavigate()
  function redirectUser() {
    navigate("/")
  }
  return (
    <div>
      NEET courses for Class 12th
      <button onClick={redirectUser}>Go back</button>
    </div>
  )
}
