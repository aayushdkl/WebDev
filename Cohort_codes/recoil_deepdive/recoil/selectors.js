import { atom, selector } from "recoil"
import { countAtom } from "./atoms"

export const doubleCountSelector = selector({
  key: "doubleCountSelector",
  get: ({ get }) => {
    const doubleCount = get(countAtom)
    return doubleCount * 2
  },
})

export const customCountSelector = selector({
  key: "customCountSelector",
  get: ({ get }) => {
    const count = get(countAtom)
    return count
  },
  set: ({ set }, newValue) => {
    set(countAtom, newValue)
  },
})
