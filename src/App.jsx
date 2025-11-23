import { Route, Routes } from "react-router"
import Header from "./Components/Header"
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Cart from "./Components/Cart"
import { useState } from "react"


const App = () => {

  const [cart, setCart] = useState(10);

  return (
    <div className="container">
      <Header cart={cart} setCart={setCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart setCart={setCart} />} />
      </Routes>
    </div>
  )
}

export default App
