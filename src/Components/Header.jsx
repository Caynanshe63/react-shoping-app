import { Link } from "react-router"
import { useShop } from "../ShopContext"

const Header = ({cart, setCart}) => {
  const {products} = useShop();
  return (
    <div className="menu">
        <Link className="logo" to="/" >Reactify App</Link>
        <div className="links">
        <Link to="/" >Home</Link>
        <Link to="/about" >About</Link>
        <Link to="/contact" >Contact</Link>
        <Link to="/cart" >Cart</Link>
        </div>
        <Link to="/cart" ><span className="cart">{products.length}</span></Link>
    </div>
  )
}

export default Header
