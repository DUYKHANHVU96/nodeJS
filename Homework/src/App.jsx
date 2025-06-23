import './App.css'
import Home from './assets/component/homework/home'

function App() {

  return (
    <>
      <h1>Tech Store</h1>
      <h2>Featured Products</h2>
      <Home img="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
        name="Premium Headphones" description="High-quality wireless headphones with noise cancellation"
        price="$199.99" button="Add to Cart"
      />


      <Home img="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
        name="Smart Watch"
        description="Feature-rich smartwatch with health monitoring"
        price="$299.99" button="Add to Cart"
      />


      <Home img="https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500"
        name="Wireless Earbuds"
        description="True wireless earbuds with premium sound quality"
        price="$149.99" button="Add to Cart"

      />


      <Home img="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
        name="Laptop Pro"
        description="Powerful laptop for professionals and creators"
        price="$1299.99" button="Add to Cart"
      />


    </>
  )
}

export default App
