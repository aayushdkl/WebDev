import { atom } from "recoil"

export const evenSelector = atom({
  key: "evenSelector",
  get: ({ get }) => {
    const count = get(countAtom)
    return count % 2 === 0
  },
})
