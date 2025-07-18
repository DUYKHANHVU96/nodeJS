import React from 'react'
import './Homework.css'

const Homework = ({ products }) => {
    return (
        <div className='product-container'>
            <div className='product-image'>
                <img src={products.image} alt={products.name} />
            </div>
            <div className='product-info'>
                <h3 className='product-name'>{products.name}</h3>
                <p className='product-description'>{products.description}</p>
                <div className='product-price'>${products.price}</div>
                <button className='product-button'>Add to Cart</button>
            </div>
        </div>
    )
}

export default Homework