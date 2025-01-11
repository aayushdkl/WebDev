import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { cartItemsAtom, cartTotalSelector } from "../recoil/cartAtoms"
import "./styles.css" // Make sure the path to the CSS file is correct

export function ShoppingCart() {
  const cartItems = useRecoilValue(cartItemsAtom)
  const setCartItems = useSetRecoilState(cartItemsAtom)
  const total = useRecoilValue(cartTotalSelector)

  function removeItem(id) {
    setCartItems((items) => items.filter((item) => item.id != id))
  }

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <span>
            {item.name} = Rs {item.price} x {item.quantity}
          </span>
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
      <div className="cart-total">
        <h3>Total: Rs {total}</h3>
      </div>
    </div>
  )
}
