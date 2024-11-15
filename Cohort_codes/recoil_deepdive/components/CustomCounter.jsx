import { useRecoilState } from "recoil"
import { customCountSelector } from "../recoil/selectors"

export default function CustomCounter() {
  const [count, setCount] = useRecoilState(customCountSelector)

  const countInc = () => {
    setCount(count + 5)
  }
  const countDec = () => {
    setCount(count - 5)
  }

  return (
    <div>
      <h3>Custom Counter:{count}</h3>
      <button onClick={countInc}>+5</button>
      <button onClick={countDec}>-5</button>
    </div>
  )
}
