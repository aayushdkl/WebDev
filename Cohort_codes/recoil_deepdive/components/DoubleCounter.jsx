import { useRecoilValue } from "recoil"
import { doubleCountSelector } from "../recoil/selectors"

export default function DoubleCounter() {
  const doubleCounter = useRecoilValue(doubleCountSelector)

  return <div>Double Count : {doubleCounter}</div>
}
