import { useEffect, useState } from "react";
import { useShop } from "../ShopContext";


const Product = ({product}) => {
  const [isInCart, setisInCart] = useState(false);
  const {addToCart,RemoveFromCart,products} = useShop();

  useEffect(()=>{
    const isCart = products.filter((pro) => pro.id == product.id);
    if(isCart.length >0){
      setisInCart(true);
    }else{
      setisInCart(false);
    }
  },[products])
  const handlAddToCart =()=>{
    if(isInCart){
      RemoveFromCart(product);
    }else{
      addToCart(product);
    }
  }
  return (
    <div className="card" style={
        {
            minHeight: "100%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            background: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${product.imageUrl})`

        }}>
      <div className="info">
        <span>{product.name}</span>
        <span>${product.price}</span>
      </div>
      <button onClick={handlAddToCart} className={`btn ${isInCart ? "btn-secondary" : "btn-primary"}`}> {isInCart ? "-" : "+"} </button>

    </div>
  )
}

export default Product
