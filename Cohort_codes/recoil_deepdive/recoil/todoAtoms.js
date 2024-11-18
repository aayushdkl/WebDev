import { atom, selector } from "recoil"

export const todoListAtom = atom({
  key: "todoListAtom",
  default: [
    { description: "learn recoil", checked: false },
    { description: "Build a react app", checked: false },
    { description: "Master state management", checked: false },
    { description: "Listen less to eminem", checked: false },
    { description: "Touch some grass", checked: false },
    { description: "Drink more water", checked: false },
  ],
})

export const completedTodos = selector({
  key: "completedTodos",
  get: ({ get }) => {
    const todoItems = get(todoListAtom)
    return todoItems.filter((x) => x.checked === true)
  },
})
