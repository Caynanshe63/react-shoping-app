import CartProducts from "./CartProducts"
import Payment from "./Payment"

const Cart = () => {
  return (
    <div className="cart-container">
      <CartProducts />
      <Payment />
    </div>
  )
}

export default Cart
