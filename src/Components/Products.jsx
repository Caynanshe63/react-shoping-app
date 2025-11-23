import Product from "./product"

const Products = () => {

    const products = [
        { id: 1, name: "Pizza with barries", price: 8, imageUrl : "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        { id: 2, name: "Pizza with leaves", price: 10, imageUrl : "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        { id: 3, name: "Papperoni Pizza",price: 12,  imageUrl : "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        { id: 4, name: "Bowl of salsa", price: 3, imageUrl : "https://plus.unsplash.com/premium_photo-1680292890588-40ab5cda2bcb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        { id: 5, name: "Zhuarma", price: 1.5, imageUrl : "https://plus.unsplash.com/premium_photo-1663850684986-b9d15f1de6bc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        { id: 6, name: "Spaghetti", price: 2.5, imageUrl : "https://plus.unsplash.com/premium_photo-1677000666741-17c3c57139a2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}

    ]

  return (
    <div className="grid">
      {products.map(product =>(
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Products
