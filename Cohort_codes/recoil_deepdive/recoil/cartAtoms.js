import { atom, selector } from "recoil"

export const cartItemsAtom = atom({
  key: "cartItemsAtom",
  default: [
    { id: 1, name: "Laptop", price: 20000, quantity: 5 },
    { id: 2, name: "Bag", price: 1000, quantity: 6 },
    { id: 3, name: "Mobile", price: 5000, quantity: 9 },
  ],
})

export const cartTotalSelector = selector({
  key: "cartTotalSelector",
  get: ({ get }) => {
    const items = get(cartItemsAtom)
    return items.reduce(
      (total, items) => total + items.price * items.quantity,
      0
    )
  },
})
