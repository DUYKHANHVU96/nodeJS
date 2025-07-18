import React from 'react'
import Homework from './components/Homework'
import './components/Homework.css'
const App = () => {
    const products = [
        {
            id: 1,
            name: "Premium Headphones",
            description: "High-quality wireless headphones with noise cancellation",
            price: 199.99,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
        },
        {
            id: 2,
            name: "Smart Watch",
            description: "Feature-rich smartwatch with health monitoring",
            price: 299.99,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
        },
        {
            id: 3,
            name: "Wireless Earbuds",
            description: "True wireless earbuds with premium sound quality",
            price: 149.99,
            image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500"
        },
        {
            id: 4,
            name: "Laptop Pro",
            description: "Powerful laptop for professionals and creators",
            price: 1299.99,
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
        }
    ];
    return (
        <>
            <div className='homework-container'>
                <h1 className='homework-title'>Tech Store</h1>
                <div className='product-list'>
                    <div className='product-list-header'>
                        <h2>Featured Products</h2>
                    </div>
                    <div className='product-list-body'>
                        {
                            products.map((product) => (
                                <Homework key={product.id} products={product} />
                            ))
                        }
                    </div>

                </div>
            </div>
        </>
    )
}

export default App