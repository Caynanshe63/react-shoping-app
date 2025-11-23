import { useShop } from "../ShopContext"

const CartProducts = () => {
    const {products, RemoveFromCart, total} = useShop();
  return (
    <div className="cart-products">
        <h1>Cart Products</h1>
      {products.map((product)=>(
        <div key={product.id} className="cart-product">
            <div className="cart-title">
                <img src={product.imageUrl} />
                <span>{product.name}</span>
            </div>
            <h5 className="price">{product.price}</h5>
            <span onClick={()=> RemoveFromCart(product)} className="delete">Delete</span>
        </div>
        

      ))}
      <div className="total"><h1>Total Price :${total}</h1></div>
    </div>
  )
}

export default CartProducts
